export const exercise1 = {
    tasks: [
      {
        id: "1.1",
        title: "Basic Setup",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1.1</title>
    <link rel="stylesheet" href="1.1.css">
    <script src="1.1.js" defer></script>
  </head>
  <body>
    <h1>1.1</h1>
    <p>Basic Setup</p>
  </body>
  </html>`,
        css: `h1 {
    color: purple;
  }
  
  p {
    color: blueviolet;
  }`,
        js: `console.log('Hallo');`,
      },
      {
        id: "1.4",
        title: "HTML-Struktur",
        html: `<!DOCTYPE html>
  <html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aufgabe 1.4: HTML-Struktur</title>
  </head>
  <body>
    <h1>Aufgabe 1.4</h1>
    <h2>Aufgabe 1.4</h2>
    <p>Das ist <em>Aufgabe 1.4</em>. Ich teste verschiedene <span style="color:blue;">HTML-Elemente</span> aus, die in der Aufgabe <b>gefordert sind.</b>.</p>
    <h2>Aufgabe 1.4</h2>
    <p>Ich heiße <em>Erwin Bause</em>, und <span style="color:green;">bin 24</span> Jahre alt.</p>
    <p>Zusätzlich verbringe ich gerne Zeit mit <b>Fahrradfahren</b> und <span style="color:purple;">Fahrradreparaturen</span>.</p>
  </body>
  </html>`,
      },
      {
        id: "1.5",
        title: "CSS-Selektoren",
        html: `<!DOCTYPE html>
  <html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aufgabe 1.5: CSS-Selektoren</title>
    <link rel="stylesheet" href="1.5.css">
  </head>
  <body>
    <h1>Aufgabe 1.5: CSS-Selektoren</h1>
    <h2>CSS Selektoren Beispiel</h2>
    <p>Dies ist ein Beispieltext, um die Wirkung von CSS-Selektoren zu demonstrieren.</p>
  </body>
  </html>`,
        css: `h1 {
    color: darkblue;
    font-size: 2rem;
    text-align: center;
  }
  
  h2 {
    color: darkgreen;
    font-size: 1.8rem;
    text-align: left;
  }
  
  * {
    margin: 10px;
    padding: 5px;
    font-family: Arial, sans-serif;
  }
  
  h1, h2 {
    border-bottom: 2px solid gray;
    padding-bottom: 5px;
  }`,
      },
      {
        id: "1.6",
        title: "CSS Klassen und IDs",
        html: `<!DOCTYPE html>
  <html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1.6: Klassen und IDs</title>
    <link rel="stylesheet" href="1.6.css">
  </head>
  <body>
    <h1>1.6: CSS Klassen und IDs</h1>
    <p class="paragraf">Dies ist ein Paragraph mit einer Klasse.</p>
    <p id="wichtig">Dieser Paragraph hat eine ID.</p>
    <p class="paragraf">Dies ist ein weiterer Paragraph mit derselben Klasse.</p>
  </body>
  </html>`,
        css: `.paragraf {
    font-size: 1.2rem;
    color: darkblue;
    line-height: 1.5;
  }
  
  #wichtig {
    font-weight: bold;
    color: red;
    background-color: lightyellow;
    padding: 10px;
    border: 1px solid red;
  }
  
  p {
    margin: 15px 0;
  }`,
      },
      {
        id: "1.7",
        title: "Farben und Transparenz",
        html: `<!DOCTYPE html>
  <html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1.7</title>
    <link rel="stylesheet" href="1.7.css">
  </head>
  <body>
    <h1>1.7</h1>
    <p class="farbe1">Dieser Paragraph hat eine feste Textfarbe.</p>
    <p class="farbe2">Dieser Paragraph hat eine transparente Textfarbe (80% Deckkraft).</p>
    <p class="farbe3">Dieser Paragraph hat eine transparente Textfarbe (50% Deckkraft).</p>
  </body>
  </html>`,
        css: `.farbe1 {
    color: darkgreen;
    font-size: 1.2rem;
    margin: 10px 0;
  }
  
  .farbe2 {
    color: rgba(255, 0, 0, 0.8); 
    font-size: 1.2rem;
    margin: 10px 0;
  }
  
  .farbe3 {
    color: rgba(0, 0, 255, 0.5);
    font-size: 1.2rem;
    margin: 10px 0;
  }`,
      },
      {
        id: "1.8",
        title: "Fontgrößen (px, em, rem)",
        html: `<!DOCTYPE html>
  <html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1.8</title>
    <link rel="stylesheet" href="1.8.css">
  </head>
  <body>
    <h1>1.8</h1>
    <p class="em-size">Dies ist ein Beispiel für eine Schriftgröße, die mit <em>em</em> definiert wurde.</p>
    <p class="px-size">Dies ist ein Beispiel für eine Schriftgröße, die mit <span>Pixel</span> definiert wurde.</p>
    <p class="rem-size">Dies ist ein Beispiel für eine Schriftgröße, die mit <b>rem</b> definiert wurde.</p>
  </body>
  </html>`,
        css: `html {
    font-size: 16px;
  }
  
  h1 {
    font-size: 2rem;
    text-align: center;
    color: #333;
  }
  
  .em-size {
    font-size: 1.5em; 
    color: #007acc;
  }
  
  .px-size {
    font-size: 20px;
    color: #ff5733;
  }
  
  .rem-size {
    font-size: 1.25rem;
    color: #28a745;
  }`,
      },
    ],
  };
  