// exercise5.ts

export const exercise5 = {
    tasks: [
      {
        id: "5.1",
        title: "Zeichnen auf dem Canvas",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>5.1</title>
      <link rel="stylesheet" href="5.1.css">
  </head>
  <body>
      <div class="container">
          <h1 class="title">5.1</h1>
          <canvas class="drawing-canvas" width="400" height="400"></canvas>
      </div>
      <script src="5.1.js"></script>
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
  }
  
  .title {
      font-size: 24px;
      margin-bottom: 20px;
  }
  
  .drawing-canvas {
      border: 2px solid #4b0082; 
      background-color: #e6d3f8;
      border-radius: 10px;
  }`,
        js: `const canvas = document.querySelector('.drawing-canvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(50, 50, 200, 100);`
      },
      {
        id: "5.2",
        title: "Mehrere Canvas mit Text",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>5.2</title>
      <link rel="stylesheet" href="5.2.css">
  </head>
  <body>
      <div class="container">
          <h1 class="title">5.2</h1>
          <canvas class="drawing-canvas" width="400" height="200"></canvas>
          <canvas class="text-canvas" width="400" height="200"></canvas>
      </div>
      <script src="5.2.js"></script>
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
  }
  
  .drawing-canvas, .text-canvas {
      border: 2px solid #4b0082; 
      background-color: #e6d3f8;
      margin: 10px 0;
      border-radius: 10px;
  }`,
        js: `const drawingCanvas = document.querySelector('.drawing-canvas');
  const drawingCtx = drawingCanvas.getContext('2d');
  
  drawingCtx.fillStyle = 'red';
  drawingCtx.fillRect(50, 50, 200, 100); 
  
  const textCanvas = document.querySelector('.text-canvas');
  const textCtx = textCanvas.getContext('2d');
  
  textCtx.fillStyle = 'black';
  textCtx.font = '20px Arial';
  
  textCtx.fillText('Text innerhalb der Grenzen', 10, 50);
  textCtx.fillText('Dieser Text ist zu lang und überschreitet die Grenze!', 10, 150);
  
  /*
  Erklärung:
  Ein Canvas verhält sich wie ein begrenzter Zeichenbereich. Alles, was außerhalb der definierten Breite und Höhe liegt, wird nicht dargestellt.
  */`
      },
      {
        id: "5.3",
        title: "Komplexes Canvas mit Bild und Linien",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>5.3</title>
      <link rel="stylesheet" href="5.3.css">
  </head>
  <body>
      <div class="container">
          <h1 class="title">5.3</h1>
          <canvas class="canvas" width="600" height="400"></canvas>
      </div>
      <script src="5.3.js"></script>
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
  }
  
  .canvas {
      border: 2px solid #4b0082; 
      background-color: #e6d3f8;
  }`,
        js: `// Aufgabe 5.3.2
  function setupCanvas() {
      const canvas = document.querySelector('.canvas');
      const ctx = canvas.getContext('2d');
  
      // Aufgabe 5.3.1
      ctx.fillStyle = '#f3e8ff'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'lightblue';
      ctx.fillRect(50, 50, 200, 100);
  
      // Aufgabe 5.3.3
      const img = new Image();
  
      // Aufgabe 5.3.4
      img.onload = () => {
          // Aufgabe 5.3.5
          ctx.drawImage(img, 300, 100, 200, 150);
  
          // Aufgabe 5.3.6
          ctx.beginPath();
          ctx.moveTo(50, 200); 
          ctx.lineTo(250, 350); 
          ctx.lineTo(50, 350); 
          ctx.closePath(); 
          ctx.strokeStyle = '#4b0082';
          ctx.lineWidth = 3;
          ctx.stroke(); 
      };
  
      // Aufgabe 5.3.4
      img.src = 'images/huhn.png';
  }
  
  // Aufgabe 5.3.7
  setupCanvas();`
      },
      {
        id: "5.4",
        title: "Canvas-Animation",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>5.4</title>
      <link rel="stylesheet" href="5.4.css">
  </head>
  <body>
      <div class="container">
          <h1 class="title">5.4</h1>
          <canvas class="animation-canvas" width="600" height="400"></canvas>
      </div>
      <script src="5.4.js"></script>
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
  }
  
  .animation-canvas {
      border: 2px solid #4b0082; 
      background-color: #e6d3f8; 
      border-radius: 10px;
  }`,
        js: `const canvas = document.querySelector('.animation-canvas');
  const ctx = canvas.getContext('2d');
  
  let x = 50; 
  let y = canvas.height / 2;
  let radius = 20; 
  let speed = 2; 
  
  // Die Funktion \`animate\` bewegt einen Kreis über den Canvas und lässt ihn von links wieder erscheinen, wenn er den rechten Rand erreicht.
  function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#4b0082'; 
      ctx.fill();
      ctx.closePath();
  
      x += speed;
  
      if (x - radius > canvas.width) {
          x = -radius;
      }
  
      requestAnimationFrame(animate);
  }
  
  animate();`
      }
    ]
  };
  