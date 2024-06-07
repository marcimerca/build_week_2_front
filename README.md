
# NOTA: la parte front end è consultabile al seguente link: https://github.com/marcimerca/build_week_2_back

# EPIC ENERGY SERVICES - Backend CRM

## Descrizione del Progetto

Questo progetto implementa il backend di un sistema CRM per un'azienda fornitrice di energia denominata "EPIC ENERGY SERVICES". Il sistema è basato su Web Service REST utilizzando Spring Boot e PostgreSQL come database. L'obiettivo principale è gestire i contatti con i clienti business, tenere traccia delle fatture e degli indirizzi, e gestire l'anagrafica di comuni e province.

## Struttura del Sistema

### Clienti

Il sistema gestisce un elenco di clienti, ciascuno dei quali è caratterizzato dai seguenti dati:
- ragioneSociale
- partitaIva
- email
- dataInserimento
- dataUltimoContatto
- fatturatoAnnuale
- pec
- telefono
- emailContatto
- nomeContatto
- cognomeContatto
- telefonoContatto
- logo aziendale

Ogni cliente può avere fino a due indirizzi: uno per la sede legale e uno per la sede operativa. I clienti possono essere di vario tipo: PA, SAS, SPA, SRL.

### Indirizzi

Gli indirizzi sono composti dai seguenti dati:
- via
- civico
- località
- cap
- comune

I comuni sono gestiti attraverso un'anagrafica centralizzata e sono caratterizzati da un nome e da un riferimento a una provincia. Le province sono anch'esse gestite in un'anagrafica centralizzata e sono caratterizzate da un nome e una sigla.

### Fatture

Ogni cliente ha un insieme di fatture associate, che sono caratterizzate dai seguenti dati:
- data
- importo
- numero

Ogni fattura ha uno stato che può essere "PAGATA" o "NON_PAGATA".

### Anagrafe

La superclasse `Anagrafe` è estesa dalle classi `Comune` e `Provincia`. La classe `Provincia` ha una relazione one-to-many con la classe `Comune`, mentre la classe `Anagrafe` ha una relazione one-to-many con la classe `Indirizzo`.

## Funzionalità del Backend

Il backend fornisce le funzionalità CRUD per gestire in modo completo i seguenti elementi:
- Clienti
- Indirizzi
- Fatture
- Utenti

### Gestione Clienti

Sono state inoltre aggiunte delle query per:
- Ordinare i clienti per:
  - Nome
  - Fatturato annuale
  - Data di inserimento
  - Data di ultimo contatto
  - Provincia della sede legale
- Filtrare la lista clienti per:
  - Fatturato annuale
  - Data di inserimento
  - Data di ultimo contatto
  - Parte del nome

### Gestione Fatture

Sono state inoltre aggiunte delle query per:
- Filtrare le fatture per:
  - Cliente
  - Stato
  - Data
  - Anno
  - Range di importi

### Gestione Anagrafica

Sono stati importati i comuni e le province da file CSV (`elenco-comuni-italiani.csv` e `elenco-province-italiane.csv`) tramite una procedura Java eseguibile manualmente per popolare il database.

## Sistema di Autenticazione e Autorizzazione

Il sistema prevede un'autenticazione e autorizzazione basata su token JWT, permettendo a diversi utenti di accedere alle funzioni del backend e di registrarsi al sistema. Un utente è caratterizzato dai seguenti dati:
- username
- email
- password
- nome
- cognome
- avatar

Gli utenti possono avere ruoli di tipo USER (abilitati alle sole operazioni di lettura) o ADMIN (abilitati a tutte le operazioni). 

## Frontend

E' stato implementato un semplice frontend connesso al backend per dimostrare alcune funzionalità della piattaforma. In particolare è stata aggiunta la possibilità dal front end di creare un nuovo cliente (solo per utente "ADMIN"), visualizzare tutti i clienti, i dettagli di ogni cliente con le specifiche fatture, e l'elenco completo delle fatture di tutti i clienti.

## Requisiti Tecnici

- Java
- Spring Boot
- PostgreSQL
- JWT per l'autenticazione
- CSV per l'importazione dei dati

## Angular Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
