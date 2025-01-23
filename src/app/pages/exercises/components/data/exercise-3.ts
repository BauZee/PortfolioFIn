export const exercise3 = {
    tasks: [
      {
        id: "3.3",
        title: "Grid Layout mit Media Queries",
        html: `<!DOCTYPE html>
   <html lang="de">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>3.3</title>
      <link rel="stylesheet" href="3.3.css">
   </head>
   <body>
      <div class="grid-container">
          <div class="grid-item">
              <img src="images/huhn.png" alt="Beispielbild">
              <h2>Überschrift 1</h2>
              <p>Ein kurzer Text.</p>
          </div>
          <div class="grid-item">
              <img src="images/huhn.png" alt="Beispielbild">
              <h2>Überschrift 2</h2>
              <p>Ein kurzer Text.</p>
          </div>
          <div class="grid-item">
              <img src="images/huhn.png" alt="Beispielbild">
              <h2>Überschrift 3</h2>
              <p>Ein kurzer Text.</p>
          </div>
      </div>
   </body>
   </html>`,
        css: `.grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      padding: 1rem;
   }
   
   .grid-item {
      border: 1px solid #8800ff;
      padding: 1rem;
      border-radius: 0.5rem;
   }
   
   img {
      width: 100%;
      max-width: 175px; 
      height: auto;
   }
   
   h2 {
      margin: 1rem 0;
   }
   
   @media (orientation: landscape) {
      .grid-container {
          grid-template-columns: repeat(3, 1fr);
      }
   }
   
   @media (max-width: 768px) {
      .grid-container {
          grid-template-columns: repeat(2, 1fr);
      }
   }
   
   @media (max-width: 480px) {
      .grid-container {
          grid-template-columns: 1fr;
      }
   }
   
   @media (max-width: 480px) and (orientation: landscape) {
      .grid-container {
          grid-template-columns: repeat(2, 1fr);
      }
   }`
      },
      {
        id: "3.2.1",
        title: "Grid & Flexbox Layout",
        html: `<!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3.2.1</title>
    <link rel="stylesheet" href="3.2.1.css">
   </head>
   <body>
    <header class="header">3.2.1</header>
    <main class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
      <div class="grid-item">7</div>
      <div class="grid-item">8</div>
      <div class="grid-item">9</div>
      <div class="grid-item">10</div>
      <div class="grid-item">11</div>
      <div class="grid-item">12</div>
      <div class="grid-item">13</div>
      <div class="grid-item">14</div>
      <div class="grid-item">15</div>
      <div class="grid-item">16</div>
    </main>
    <footer class="footer">Footer</footer>
   </body>
   </html>`,
        css: `body {
      display: flex;
      flex-direction: column;
      height: 100vh;
   }
    
   .header, .footer {
      background-color: #9370db;
      color: white;
      text-align: center;
      padding: 1rem;
   }
    
   .grid-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      padding: 1rem;
      flex: 1;
   }
    
   .grid-item {
      background-color: #d8bfd8;
      color: #4b0082;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #9370db;
   }
    
   @media (max-width: 800px) {
      .grid-container {
          grid-template-columns: repeat(2, 1fr);
      }
   }
    
   @media (max-width: 500px) {
      .grid-container {
          grid-template-columns: 1fr;
      }
   }`
      }
    ]
   };