# LogClientSide

Il repository è formato da 2 progetti:

 - *Frontend* - Angular2 con *Backend* - ASP .NET core
 - ASP .NET Core MVC

**Angular2**
--------
Il progetto è stato generato con [angular-cli](https://github.com/angular/angular-cli).
Per compilare il progetto angular è necessario eseguire `ng build` dalla shell del sistema operativo, all'interno della cartella in cui è presente il progetto.

***JSNLog***
E' stato creato il servizio jslogger.service.ts con contiene la logica di scrittura del log

***Application Insight***
E' stato installato il pacchetto via **npm** ed utilizzato nel componente di application-insight. 
Non è stato installato nulla sui componenti di backend.

**Asp Net Core - Backend**
--------
Il progetto viene ospitato su IIS express in cui sono stati installati dei pacchetti per la gestione di JSNLog e Serilog.

----------------------------------------------------------------------------------------------------------------------------------------
**Asp Net Core - MVC**
--------
Il progetto viene ospitato su IIS express.
Sono stati aggiunti dei pacchetti per la gestione di JSNLog, JSNLog per Serilog  e Serilog.
La pagina Home.cs contiene la logica per la scrittura dei log applicativi per JSNLog.
