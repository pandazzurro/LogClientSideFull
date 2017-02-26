using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Serilog;
using JSNLog;
using Microsoft.WindowsAzure.Storage;
using LogClientSide.Services;
using Microsoft.WindowsAzure.Storage.Table;

namespace LogClientSide
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            ConfigureSerilog();
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IProductRepository, ProductRepository>();
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IApplicationLifetime applicationLifetime)
        {
            // Disabilito il livelli di log di default dell'infrastruttura
            loggerFactory = new LoggerFactory();
            // Serilog
            loggerFactory.AddSerilog(Log.Logger, false);
            applicationLifetime.ApplicationStopped.Register(Log.CloseAndFlush);
            // Configure JSNLog
            JsnlogConfiguration jsnlogConfiguration = new JsnlogConfiguration
            {
                corsAllowedOriginsRegex = ".*"
            };
            app.UseJSNLog(new LoggingAdapter(loggerFactory), jsnlogConfiguration);
            app.UseFileServer(enableDirectoryBrowsing: false);
            app.UseCors(cors => cors.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
            app.UseMvc();
        }

        public void ConfigureSerilog()
        {
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse("UseDevelopmentStorage=true");
            Log.Logger = new LoggerConfiguration()
                .Destructure.ToMaximumDepth(10)
                .MinimumLevel.Is(Serilog.Events.LogEventLevel.Verbose)
                .WriteTo.AzureTableStorage(storageAccount, Serilog.Events.LogEventLevel.Verbose, period: TimeSpan.FromSeconds(2), storageTableName: "Corelogger", writeInBatches: true)
                .CreateLogger();
        }
    }
}
