# filterable-cards-with-parser
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)


Questo progetto è stato utilizzato per creare la lista di programmi svolti per l'a.s. 2021/2022 dell'ITT Panetti Pitagora di Bari. 

È un'applicazione web formata da un'unica pagina con un campo di ricerca che filtra una serie di card. 
L'applicazione è scritta in React partendo dallo scheletro di default di web-app che `create-react-app` mette a disposizione.


## Front-End

L'applicazione front-end è un semplice elenco di card filtrabili mediante un campo di testo. I dati vengono caricati da una fixture json che si trova `/src/fixture/data.json` che viene popolata dallo script Python presente nella cartella `/python/parse_dir.py`. 

La struttura dati presente nella fixture json non è altro che un array di oggetti; ogni oggetto è fatto in questa maniera: 

```
{
    "c": "1A",
    "name": "Diritto",
    "teachers": [
      "Piccolo"
    ],
    "href": "https://www.panettipitagora.edu.it/qs/documenti/programmi-21-22/1A-Diritto-Piccolo.pdf"
  }
```

Notiamo che: 
- `c` contiene la classe di riferimento 
- `name` contiene il nome della materia 
- `teachers` è un vettore con i cognomi dei docenti
- `href` è l'URL a cui è disponibile il file pdf da scaricare

TBD: 
- ✅ struttura del file json contenente i file da filtrare
- spiegazione e ottimizzazione codice Python per scraping
- ✅ modularizzazione del front-end
- pubblicazione delle fonti (URL del figma)
- EN version
- Integrazione con Redux
