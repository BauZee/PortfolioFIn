export const exercise2 = {
    tasks: [
      {
        id: "2.1",
        title: "Boxdesign Visualisierung",
        html: `<!DOCTYPE html>
  <html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2.1</title>
    <link rel="stylesheet" href="2.1.css">
  </head>
  <body>
    <h1>Boxdesign Visualisierung</h1>
    <div class="container">
      <div class="box box1">Box 1</div>
      <div class="box box2">Box 2</div>
      <div class="box box3">Box 3</div>
      <p>Das ist ein Paragraph.</p>
    </div>
  </body>
  </html>`,
        css: `h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .container {
    display: flex;
    gap: 10px;
    padding: 20px;
    border: 2px solid #444;
    background-color: #fff;
  }
  
  .box {
    padding: 20px;
    border: 3px solid;
    background-color: #e6f2ff;
    text-align: center;
    flex: 1;
  }
  
  .box1 {
    border-color: #ff5733;
    background-color: #ffeeee;
  }
  
  .box2 {
    border-color: #28a745;
    background-color: #e6f9e6;
  }
  
  .box3 {
    border-color: #007acc;
    background-color: #e6f2ff;
  }
  
  p {
    margin-top: 20px;
    padding: 10px;
    border: 1px dashed #888;
    background-color: #f9f9f9;
    color: #555;
  }`,
      },
      {
        id: "2.2.1",
        title: "Float und Textausrichtung",
        html: `<!DOCTYPE html>
  <html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2.2.1</title>
    <link rel="stylesheet" href="2.2.1.css">
  </head>
  <body>
    <div class="content">
      <img src="images/huhn.png" alt="Beispielbild">
      <p>Dies ist ein Beispieltext.</p>
    </div>
  </body>
  </html>`,
        css: `.content {
    width: 80%;
    margin: 0 auto;
  }
  
  img {
    float: left;
    margin-right: 15px;
    width: 175px;
  }
  
  p {
    text-align: justify;
  }`,
      },
      {
        id: "2.2.2",
        title: "Absolute Positionierung",
        html: `<!DOCTYPE html>
  <html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2.2.2</title>
    <link rel="stylesheet" href="2.2.2.css">
  </head>
  <body>
    <div class="absolute-container">
      <img src="images/huhn.png" alt="Beispielbild">
      <p>Das ist ein Beispieltext.</p>
    </div>
  </body>
  </html>`,
        css: `.absolute-container {
    position: absolute;
    top: 40px;
    left: 50px;
    width: 300px;
  }
  
  img {
    display: block;
    margin-bottom: 10px;
    width: 175px;
  }
  
  p {
    text-align: justify;
    background-color: #f4f4f4;
    padding: 10px;
    border: 1px solid #ccc;
  }`,
      },
      {
        id: "2.2.3",
        title: "Flexbox mit Layout-Anpassung",
        html: `<!DOCTYPE html>
  <html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2.2.3</title>
    <link rel="stylesheet" href="2.2.3.css">
  </head>
  <body>
    <div class="wrapper">
      <div class="block block-b">B</div>
      <div class="block block-main">
        <img src="images/huhn.png" alt="Beispielbild">
        <p>Das ist ein Beispieltext.</p>
      </div>
      <div class="block block-c">C</div>
    </div>
  </body>
  </html>`,
        css: `.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .block {
    padding: 10px;
    border: 2px solid #444;
    background-color: #f0f0f0;
    width: 150px;
    text-align: center;
  }
  
  .block-main {
    flex-grow: 1;
    margin: 0 10px;
  }
  
  img {
    float: left;
    margin-right: 10px; 
    width: 175px;
  }
  
  p {
    text-align: justify;
  }`,
      },
      {
        id: "2.3.1",
        title: "Flexbox - Horizontale Anordnung",
        html: `<!DOCTYPE html>
  <html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2.3.1</title>
    <link rel="stylesheet" href="2.3.1.css">
  </head>
  <body>
    <div class="flex-container">
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
      <p>Paragraph 3</p>
    </div>
  </body>
  </html>`,
        css: `.flex-container {
    display: flex;
    border: 2px solid #000;
    padding: 10px;
  }
  
  p {
    margin: 5px;
    border: 1px solid #ccc;
    padding: 10px;
  }`,
      },
    ],
  };
  