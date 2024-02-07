# React_Blog

Questo progetto è un'applicazione blog completa che separa le preoccupazioni tra il front-end e il back-end. Il front-end è costruito con Vite e React, utilizzando Sass per una gestione avanzata degli stili CSS. Il back-end si appoggia su Node.js con il framework Express e utilizza MySQL come sistema di gestione del database, permettendo così di gestire i dati relativi a blog e utenti.

## Panoramica

L'applicazione permette agli utenti di registrarsi, accedere, creare post, visualizzare i post di altri utenti e interagire con essi. Questa guida ti accompagnerà attraverso i passaggi necessari per configurare e avviare il progetto sul tuo sistema locale.

## Prerequisiti

Prima di iniziare, assicurati di avere installato sul tuo sistema:

- Node.js (preferibilmente l'ultima versione LTS)
- npm (viene installato con Node.js)
- MySQL (puoi utilizzare XAMPP come ambiente di sviluppo per MySQL)
- Git (opzionale, per clonare il repository)

## Configurazione del Progetto

### Clonare il Repository

Se hai Git installato, puoi clonare il progetto direttamente dal repository GitHub utilizzando il seguente comando:

```bash
git clone https://github.com/DomenicoDodoDonnici/React_Blog.git
```

Se non hai Git, puoi semplicemente scaricare il progetto come file ZIP dal sito GitHub e decomprimerlo nel tuo sistema.

### Database Setup

1. Avvia MySQL tramite XAMPP o il tuo sistema di gestione preferito.
2. Crea un nuovo database chiamato `blog`.
3. Apri il file `backend/blogPage.sql` incluso nel progetto. Questo file contiene le istruzioni SQL per creare le tabelle necessarie all'applicazione.
4. Esegui le query SQL nel tuo sistema di gestione del database per creare le tabelle.

### Configurazione del Back-End

1. Apri un terminale o prompt dei comandi.
2. Naviga alla cartella `backend` del progetto clonato o scaricato:

```bash
cd React_Blog/backend
```

3. Installa le dipendenze del progetto eseguendo:

```bash
npm install
```

4. Se incontri degli errori di vulnerabilità, puoi tentare di risolverli con:

```bash
npm audit fix
```

o, se necessario,

```bash
npm audit fix --force
```

5. Avvia il server back-end con:

```bash
npm start
```

Il server dovrebbe ora essere in esecuzione e in ascolto per le richieste.

### Configurazione del Front-End

1. Apri un nuovo terminale o prompt dei comandi.
2. Naviga alla cartella `frontend` del progetto:

```bash
cd React_Blog/frontend
```

3. Installa le dipendenze del progetto eseguendo:

```bash
npm install
```

4. Avvia l'applicazione front-end con:

```bash
npm run dev
```

L'applicazione dovrebbe ora essere accessibile tramite browser all'indirizzo `http://localhost:3000` (o alla porta specificata dalla console).

## Utilizzo dell'Applicazione

Dopo aver avviato sia il back-end che il front-end, puoi navigare all'indirizzo `http://localhost:3000` per visualizzare l'applicazione. Da qui, puoi registrarti come nuovo utente, accedere, creare nuovi post, visualizzare i post esistenti e interagire con essi.

## Struttura del Progetto

Il progetto è suddiviso in due parti principali: `frontend` e `backend`, ognuna con la propria struttura di cartelle e file. Il front-end utilizza React per l'interfaccia utente, mentre il back-end utilizza Express per gestire le richieste e MySQL per il database.

### Front-End

- `src`: Contiene i componenti React, le pagine, e il contesto di autenticazione.
- `public`: Cartella per file statici come immagini e icone.

### Back-End

- `controllers`: Logica per gestire le richieste agli endpoint.
- `routes`: Definisce gli endpoint disponibili e li mappa ai controller.
- `db.js`: Configurazione della connessione al database MySQL.
