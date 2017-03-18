using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using JSNLog;
using Microsoft.WindowsAzure.Storage;
using Serilog;
using Serilog.Formatting.Json;
using Serilog.Events;
using Serilog.Sinks.Email;

namespace LogClientSideMVC
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            ConfigureSerilog();
            var builder = new ConfigurationBuilder();
            if (env.IsDevelopment())
            {
                builder.AddApplicationInsightsSettings(developerMode: true);
            }
            builder.SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }
        
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddApplicationInsightsTelemetry(Configuration);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
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

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            
            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }

        public void ConfigureSerilog()
        {
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse("UseDevelopmentStorage=true");
            Log.Logger = new LoggerConfiguration()
                .Destructure.ToMaximumDepth(10)
                .MinimumLevel.Is(Serilog.Events.LogEventLevel.Verbose)
                .WriteTo.Email(new EmailConnectionInfo {
                    MailServer = "smtp.live.com", FromEmail = "xxx@hotmail.it", ToEmail = "xxx@hotmail.it",
                    NetworkCredentials = new System.Net.NetworkCredential("xxx@hotmail.it", "xxx")}
                , restrictedToMinimumLevel: LogEventLevel.Fatal)
                .WriteTo.RollingFile("log.txt")
                .WriteTo.AzureTableStorage(storageAccount, LogEventLevel.Verbose, period: TimeSpan.FromSeconds(2), storageTableName: "CoreloggerMVC", writeInBatches: true)
                .CreateLogger();
        }
    }
}
