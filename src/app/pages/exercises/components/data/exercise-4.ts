export const exercise4 = {
    tasks: [
      {
        id: "4.1",
        title: "Einfache Hintergrundfarbe mit JS",
        html: `<!DOCTYPE html>
  <html>
  <head>
      <link rel="stylesheet" href="4.1.css">
      <title>4.1</title>
  </head>
  <body>
      <h1>4.1</h1>
      <script src="4.1.js"></script>
  </body>
  </html>`,
        css: `body {
      background-color: rgb(203, 174, 230);
  }`,
        js: `console.log("JavaScript ist daaa!");`
      },
      {
        id: "4.2",
        title: "Interaktiver Text mit Klick",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4.2</title>
    <link rel="stylesheet" href="4.2.css">
  </head>
  <body>
    <!-- Aufgabe 4.2.1 -->
    <div id="textElement" class="textElement">Klicke hier, um den Text zu ändern</div>
  
    <!-- Aufgabe 4.2.6 Bevor -->
    <script src="4.2.before.js"></script>
  
    <!-- Aufgabe 4.2.2-->
    <script src="4.2.js"></script>
  
    <!-- Aufgabe 4.2.6 Danach-->
    <script src="4.2.after.js"></script>
  </body>
  </html>`,
        css: `body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    
  .textElement {
      background-color: #d1c4e9;
      color: #4a148c;
      padding: 2rem;
      text-align: center;
      border-radius: 10px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }
    
  .textElement:hover {
      background-color: #b39ddb;
      transform: scale(1.05);
  }`,
        js: `// Aufgabe 4.2.2
  const textElement = document.getElementById("textElement");
  
  // Aufgabe 4.2.3
  textElement.addEventListener("click", changeText);
  
  // Aufgabe 4.2.5
  function changeText() {
    const textOptions = [
      "Hallo Welt!",
      "JS hat Swag!",
      "Klick mich härter!",
      "Mir fällt nichts mehr ein!",
      "MMWP!"
    ];
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    textElement.textContent = textOptions[randomIndex];
  }`
      },
      {
        id: "4.3",
        title: "Formular mit Ausgabe",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4.3</title>
    <link rel="stylesheet" href="4.3.css">
  </head>
  <body>
    <div class="form-container">
      <h1>4.3</h1>
      <label for="nameInput">Name:</label>
      <input type="text" class="name-input" placeholder="Gib einen Namen ein">
      
      <label for="ageInput">Alter:</label>
      <input type="number" class="age-input" placeholder="Gib ein Alter ein">
      
      <button class="generate-btn">Person erzeugen</button>
  
      <p class="output"></p>
    </div>
    <script src="4.3.js"></script>
  </body>
  </html>`,
        css: `body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    
  .form-container {
      background-color: #d1c4e9;
      padding: 1.5rem;
      border-radius: 8px;
      text-align: center;
  }
    
  label {
      margin: 0.5rem 0;
      font-weight: bold;
  }
    
  input {
      padding: 0.5rem;
      margin: 0.5rem 0;
      border: 1px solid #b39ddb;
      border-radius: 4px;
      width: 100%;
  }
    
  button {
      background-color: #7e57c2;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
  }
    
  button:hover {
      background-color: #5e35b1;
  }
    
  .output {
      margin-top: 1rem;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #b39ddb;
      background-color: #ede7f6;
  }`,
        js: `document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.querySelector(".name-input");
    const ageInput = document.querySelector(".age-input");
    const generateBtn = document.querySelector(".generate-btn");
    const output = document.querySelector(".output");
  
    generateBtn.addEventListener("click", () => {
      const name = nameInput.value.trim();
      const age = ageInput.value.trim();
  
      if (name && age) {
        output.textContent = \`Name: \${name}, Alter: \${age}\`;
      } else {
        output.textContent = "Bitte beide Felder ausfüllen!";
      }
    });
  });`
      },
      {
        id: "4.4",
        title: "Bild ein-/ausblenden",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>4.4</title>
      <link rel="stylesheet" href="4.4.css">
  </head>
  <body>
      <div class="container">
          <h1>4.4</h1>
          <img class="toggle-image" src="images/huhn.png" alt="Ein schönes Bild">
          <button class="toggle-button">Bild ein-/ausblenden</button>
      </div>
      <script src="4.4.js"></script>
  </body>
  </html>`,
        css: `body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
  }
  
  .container {
      text-align: center;
      padding: 20px;
      border: 2px solid #d8b4ff;
      border-radius: 10px;
      background-color: #ffffff; 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .toggle-image {
      max-width: 300px; 
      height: auto; 
      border: 2px solid #d8b4ff;
      border-radius: 10px;
      margin-bottom: 20px;
  }
  
  .toggle-button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #d8b4ff;
      color: #ffffff;
      border: none;
      border-radius: 5px;
  }`,
        js: `document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.querySelector('.toggle-image');
    const buttonElement = document.querySelector('.toggle-button');
  
    buttonElement.addEventListener('click', () => {
        if (imageElement.style.display === 'none') {
            imageElement.style.display = 'block'; 
        } else {
            imageElement.style.display = 'none'; 
        }
    });
  });`
      }
    ]
  };
  