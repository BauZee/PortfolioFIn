// exercise8.ts

export const exercise8 = {
    tasks: [
      {
        id: "8.2",
        title: "Daten laden mit XMLHttpRequest",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>8.2</title>
      <link rel="stylesheet" href="08.02.css">
  </head>
  <body>
      <h1>8.2</h1>
      <button onclick="loadContent()">Daten laden</button>
      <div class="content">Klicken Sie auf den Button, um Daten zu laden.</div>
      <script src="08.02.js"></script>
  </body>
  </html>`,
        css: `h1 {
      text-align: center;
  }
  button {
      display: block;
      margin: 20px auto;
      padding: 10px 20px;
      font-size: 16px;
      background-color: #dda0dd; 
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
  }
  button:hover {
      background-color: #ba55d3; 
  }
  .content {
      margin: 20px auto;
      padding: 20px;
      max-width: 600px;
      text-align: center;
      border: 2px dashed #dda0dd;
      background-color: #fff;
      border-radius: 10px;
      color: #4b0082;
  }
  .error {
      color: #ff6347; 
  }`,
        js: `function loadContent() {
      const xhttp = new XMLHttpRequest();
  
      xhttp.onreadystatechange = function () {
          if (this.readyState === 4) {
              if (this.status === 200) { 
                  document.querySelector('.content').innerHTML = this.responseText;
              } else { 
                  document.querySelector('.content').innerHTML = \`
                      <p class="error">Die Daten konnten nicht geladen werden. 
                      Möglicherweise existiert die Seite nicht oder es sind keine Daten verfügbar.</p>\`;
              }
          }
      };
  
      xhttp.open("GET", "https://www.imn.htwk-leipzig.de/~ebause/ajax_info.txt", true);
      xhttp.send();
  }`
      },
      {
        id: "8.3",
        title: "Aufgaben aus XML laden",
        html: `<!DOCTYPE html>
  <html lang="de">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>8.3</title>
      <link rel="stylesheet" href="08.03.css">
  </head>
  <body>
      <div class="container">
          <h1>8.3 - Aufgaben aus XML laden</h1>
          <div class="content">
          </div>
          <button onclick="loadContent()">Aufgaben laden</button>
      </div>
      <script src="08.03.js"></script>
  </body>
  </html>`,
        css: `.container {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      padding: 30px;
      width: 90%;
      max-width: 600px;
  }
  
  .content {
      background-color: #e9d4f0;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 30px;
      text-align: left;
  }
  
  ul {
      list-style-type: none;
      padding-left: 0;
  }
  
  li {
      background-color: #f2e0f4; 
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      color: #4b0082;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  button {
      background-color: #dda0dd; 
      color: white;
      padding: 15px 30px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      max-width: 250px;
      margin-top: 20px;
  }
  
  button:hover {
      background-color: #ba55d3; 
  }
  
  .error {
      color: red;
      font-size: 14px;
      margin-top: 10px;
      text-align: center;
  }`,
        js: `function loadContent() {
      const xhttp = new XMLHttpRequest();
  
      xhttp.onreadystatechange = function () {
          if (this.readyState === 4) {
              if (this.status === 200) {
                  const xmlDoc = this.responseXML; 
                  const tasks = xmlDoc.getElementsByTagName("task"); 
  
                  let taskList = '';
                  
                  for (let i = 0; i < tasks.length; i++) {
                      const title = tasks[i].getElementsByTagName("title")[0].textContent;
                      const description = tasks[i].getElementsByTagName("description")[0].textContent;
                      
                      taskList += \`
                          <li>
                              <strong>\${title}</strong>: \${description}
                          </li>
                      \`;
                  }
  
                  document.querySelector('.content').innerHTML = \`<ul>\${taskList}</ul>\`;
              } else { 
                  document.querySelector('.content').innerHTML = \`
                      <p class="error">Die Daten konnten nicht geladen werden. 
                      Möglicherweise existiert die Seite nicht oder es sind keine Daten verfügbar.</p>\`;
              }
          }
      };
  
      xhttp.open("GET", "08.03.xml", true); 
      xhttp.send();
  }`,
        xml: `<?xml version="1.0" encoding="UTF-8"?>
  <tasks>
      <task>
          <title>Aufgabe 1</title>
          <description>Beschreibung der Aufgabe 1</description>
      </task>
      <task>
          <title>Aufgabe 2</title>
          <description>Beschreibung der Aufgabe 2</description>
      </task>
      <task>
          <title>Aufgabe 3</title>
          <description>Beschreibung der Aufgabe 3</description>
      </task>
  </tasks>`
      },
      {
        id: "8.4",
        title: "Ajax-Dokumentation",
        md: `# 8.4 - Ajax-Dokumentation
  
  Ajax (Asynchronous JavaScript and XML) ermöglicht das Abrufen und Senden von Daten, ohne die gesamte Webseite neu zu laden.
  
  ### Vorteile:
  - Ermöglicht asynchrone Datenkommunikation
  - Macht Webseiten interaktiver
  - Reduziert Serverlast durch gezielte Datenanforderungen
  
  ### Nachteile:
  - Erfordert zusätzliche Browserunterstützung
  - Kann schwieriger zu debuggen sein`
      },
      {
        id: "8.5",
        title: "Fetch API-Dokumentation",
        md: `# 8.5 - Fetch API-Dokumentation
  
  Die Fetch API ist eine moderne Methode zur Durchführung von HTTP-Anfragen und eine Weiterentwicklung von Ajax.
  
  ### Vorteile:
  - Nutzt Promises für klareren Code
  - Unterstützt Methoden wie GET, POST, PUT und DELETE
  - Ermöglicht einfache Arbeit mit JSON, Text und anderen Formaten
  
  ### Beispiel:
  \`\`\`javascript
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  \`\`\`
  
  ### Einsatzmöglichkeiten:
  - Formulareingaben validieren
  - Daten laden und anzeigen
  - Echtzeit-Suche`
      },
      {
        id: "8.6",
        title: "SPA-Dokumentation",
        md: `# 8.6 - Single-Page Applications (SPA)
  
  Eine Single-Page Application (SPA) ist eine Webanwendung, bei der alle Inhalte auf einer Seite angezeigt werden, ohne dass die Seite neu geladen wird.
  
  ### Vorteile:
  - Schnellere Navigation
  - Nutzerfreundlicher
  - Komponenten-basierte Architektur
  
  ### Beispiele:
  - React
  - Angular`
      }
    ]
  };
  