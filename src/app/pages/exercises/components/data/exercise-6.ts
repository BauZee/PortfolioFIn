export const exercise6 = {
    tasks: [
      {
        id: "6.1",
        title: "Summe mit Web Worker berechnen",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>6.1</title>
      <link rel="stylesheet" href="6.1.css">
  </head>
  <body>
      <h1>6.1</h1>
      <button class="start-button">Berechnung starten</button>
      <p class="output-text">Ergebnis wird hier angezeigt.</p>
      <p class="status-text">Status: Bereit</p>
      <script src="6.1.js"></script>
  </body>
  </html>`,
        css: `body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 20px;
    font-size: 24px;
  }
  
  .start-button {
    padding: 10px 20px;
    font-size: 16px;
    color: #ffffff;
    background-color: #d8b4ff; 
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .start-button:hover {
    background-color: #b380d6; 
  }
  
  .output-text, .status-text {
    margin-top: 20px;
    font-size: 18px;
    color: #4b0082;
  }`,
        js: `const startButton = document.querySelector('.start-button');
  const outputText = document.querySelector('.output-text');
  const statusText = document.querySelector('.status-text');
  
  const worker = new Worker('6.1.worker.js');
  
  worker.onmessage = (event) => {
      outputText.textContent = \`Ergebnis: \${event.data}\`; 
      statusText.textContent = 'Status: Bereit'; 
  };
  
  startButton.addEventListener('click', () => {
      outputText.textContent = 'Ergebnis wird berechnet...'; 
      statusText.textContent = 'Status: Arbeitet...'; 
  
      const max = 1_000_000_000; 
      worker.postMessage(max);
  });`,
        workerJs: `self.onmessage = (event) => {
    const max = event.data; 
    let sum = 0;
  
    for (let i = 1; i <= max; i++) {
        sum += i; 
    }
    self.postMessage(sum);
  };`
      },
      {
        id: "6.2",
        title: "Countdown und Berechnung mit Web Worker",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>6.2</title>
      <link rel="stylesheet" href="6.2.css">
  </head>
  <body>
      <h1>6.2</h1>
      <div class="content">
          <button class="start-button">Berechnung starten</button>
          <p class="status">Status: Bereit</p>
          <p class="output">Ergebnis: -</p>
      </div>
      <script src="6.2.js"></script>
  </body>
  </html>`,
        css: `body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 20px;
    font-size: 24px;
  }
  
  .content {
    text-align: center;
  }
  
  .start-button {
    padding: 10px 20px;
    font-size: 16px;
    color: #ffffff;
    background-color: #d8b4ff; 
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .start-button:hover {
    background-color: #b380d6; 
  }
  
  .status, .output {
    margin-top: 20px;
    font-size: 18px;
    color: #4b0082; }`,
        js: `const startButton = document.querySelector('.start-button');
  const status = document.querySelector('.status');
  const output = document.querySelector('.output');
  
  const worker = new Worker('6.2.worker.js');
  
  worker.onmessage = (event) => {
      output.textContent = \`Ergebnis: \${event.data}\`;
      status.textContent = 'Status: Bereit'; 
  };
  
  function startCountdown(seconds) {
      status.textContent = \`Status: Berechnung läuft... (\${seconds}s)\`;
      const interval = setInterval(() => {
          seconds -= 1;
          if (seconds > 0) {
              status.textContent = \`Status: Berechnung läuft... (\${seconds}s)\`;
          } else {
              clearInterval(interval);
          }
      }, 1000);
  }
  
  startButton.addEventListener('click', () => {
      const max = 1_000_000_000; 
      output.textContent = 'Ergebnis: Wird berechnet...'; 
      startCountdown(5); 
      worker.postMessage(max); 
  });`,
        workerJs: `self.onmessage = (event) => {
    const max = event.data; 
    let sum = 0;
  
    for (let i = 1; i <= max; i++) {
        sum += i; 
    }
    self.postMessage(sum);
  };`
      },
      {
        id: "6.3",
        title: "Sortierung mit und ohne Web Worker",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>6.3</title>
      <link rel="stylesheet" href="6.3.css">
      <script src="6.3.js" defer></script>
  </head>
  <body>
      <h1>6.3</h1>
      <button class="without-worker">Without Web Worker</button>
      <button class="with-worker">With Web Worker</button>
      <p class="result">Ergebnis: -</p>
  </body>
  </html>`,
        css: `button {
      padding: 10px 20px;
      margin: 10px;
      font-size: 16px;
      cursor: pointer;
  }
  
  .result {
      margin-top: 20px;
      font-size: 18px;
  }`,
        js: `const withoutWorkerButton = document.querySelector('.without-worker');
  const withWorkerButton = document.querySelector('.with-worker');
  const result = document.querySelector('.result');
  
  function selectionSort(arr) {
      for (let i = 0; i < arr.length; i++) {
          let minIndex = i;
          for (let j = i + 1; j < arr.length; j++) {
              if (arr[j] < arr[minIndex]) {
                  minIndex = j;
              }
          }
          if (minIndex !== i) {
              let temp = arr[i];
              arr[i] = arr[minIndex];
              arr[minIndex] = temp;
          }
      }
  }
  
  function nonWebWorkerSort() {
      let arr = [];
      for (let i = 50000; i >= 0; i--) {
          arr.push(i);
      }
  
      const start = new Date().getTime();
      selectionSort(arr);
      const end = new Date().getTime();
  
      const time = end - start;
      result.textContent = \`Ergebnis: \${time} ms (ohne Web Worker)\`;
  }
  
  function withWebWorkerSort() {
      const worker = new Worker('6.3.worker.js');
  
      worker.onmessage = function (e) {
          result.textContent = \`Ergebnis: \${e.data} ms (mit Web Worker)\`;
      };
  
      worker.postMessage("start");
  }
  
  withoutWorkerButton.addEventListener('click', nonWebWorkerSort);
  withWorkerButton.addEventListener('click', withWebWorkerSort);`,
        workerJs: `onmessage = function (e) {
    if (e.data === "start") {
        var a = [];
  
        for (var i = 50000; i >= 0; i--) {
            a.push(i);
        }
  
        function selectionSort(arr) {
            for (let i = 0; i < arr.length; i++) {
                let minIndex = i;
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[j] < arr[minIndex]) {
                        minIndex = j;
                    }
                }
                if (minIndex !== i) {
                    let temp = arr[i];
                    arr[i] = arr[minIndex];
                    arr[minIndex] = temp;
                }
            }
        }
  
        var start = new Date().getTime();
        selectionSort(a);
        var end = new Date().getTime();
        var time = end - start;
  
        postMessage(time);
    }
  };`
      },
      {
        id: "6.4",
        title: "Vielfache von 3 und 5 mit Web Worker berechnen",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>6.4</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="6.4.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  </head>
  <body>
      <h1>6.4</h1>
      <p>
          Geben Sie die unteren und oberen Grenzen ein, um die Vielfachen von 3 und 5 zu berechnen und deren Summe anzuzeigen.
      </p>
      <label for="lower">Untergrenze: <input class="lower" type="text" value="0" maxlength="8"></label><br>
      <label for="upper">Obergrenze: <input class="upper" type="text" value="10" maxlength="8"></label><br>
      <button class="calculate">Berechnen</button>
  
      <p class="loading" style="display: none;">
          <i class="fa fa-spinner fa-pulse"></i> Wird berechnet...
      </p>
      <p class="result"></p>
  
      <script src="6.4.js"></script>
  </body>
  </html>`,
        css: `body {
    max-width: 960px;
  }
  
  button {
    padding: 10px 20px;
    margin-top: 10px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: #a700c9;
    color: white;
    border-radius: 5px;
  }
  
  .loading {
    margin-top: 20px;
    font-size: 18px;
  }
  
  .result {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
  }`,
        js: `const lowerInput = document.querySelector('.lower');
  const upperInput = document.querySelector('.upper');
  const calculateButton = document.querySelector('.calculate');
  const loadingIndicator = document.querySelector('.loading');
  const resultOutput = document.querySelector('.result');
  
  if (window.Worker) {
      const worker = new Worker('6.4.worker.js');
  
      calculateButton.addEventListener('click', () => {
          const lower = lowerInput.value;
          const upper = upperInput.value;
  
          loadingIndicator.style.display = 'block';
          resultOutput.textContent = '';
  
          worker.postMessage([lower, upper]);
      });
  
      worker.onmessage = (e) => {
          loadingIndicator.style.display = 'none'; 
          resultOutput.textContent = e.data; 
      };
  } else {
      resultOutput.textContent = 'Web Workers werden in Ihrem Browser nicht unterstützt.';
  }`,
        workerJs: `onmessage = function (e) {
    const lowerBound = parseInt(e.data[0], 10);
    const upperBound = parseInt(e.data[1], 10);
  
    let count = 0;
    let sum = 0;
  
    for (let i = lowerBound; i <= upperBound; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            count++;
            sum += i;
        }
    }
    const result = \`Es gibt \${count} Vielfache von 3 oder 5 zwischen \${lowerBound} und \${upperBound}. Die Summe ist \${sum}.\`;
    postMessage(result);
  };`
      },
      {
        id: "6.5",
        title: "Async-Scripts und Berechnung",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>6.5</title>
      <link rel="stylesheet" href="6.5.css">
      <script src="6.5.async.js" async></script>
      <script src="6.5.script.js" defer></script>
  </head>
  <body>
      <h1>6.5</h1>
      <button class="calculate">Start</button>
      <p class="result">Ergebnis: -</p>
  </body>
  </html>`,
        css: `button {
      padding: 10px 20px;
      font-size: 16px;
      margin-top: 20px;
  }
  
  .result {
      margin-top: 20px;
      font-size: 18px;
      color: #333;
  }`,
        js: `const button = document.querySelector('.calculate');
  const result = document.querySelector('.result');
  const worker = new Worker('6.5.worker.js');
  
  button.addEventListener('click', () => {
      result.textContent = 'Berechnung läuft...';
      worker.postMessage('start');
  });
  
  worker.onmessage = (e) => {
      result.textContent = e.data;
  };`,
        workerJs: `onmessage = function () {
    let sum = 0;
    for (let i = 1; i <= 1e6; i++) {
        sum += i;
    }
    postMessage(\`Summe: \${sum}\`);
  };`
      }
    ]
  };
  