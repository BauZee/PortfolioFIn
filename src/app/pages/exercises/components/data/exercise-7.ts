export const exercise7 = {
    tasks: [
      {
        id: "7.2",
        title: "Drag & Drop von Bildern",
        html: `<!DOCTYPE html>
  <html>
  <head>
      <title>7.2</title>
      <link rel="stylesheet" href="07.02.css">
  </head>
  <body>
      <h1>7.2</h1>
      <div class="container">
          <div id="original" class="dropzone original-position">
              <img src="images/huhn.png" alt="Draggable 1" id="img1" draggable="true" class="draggable-img">
              <img src="/images/moneyboy.jpg" alt="Not Draggable" id="img2" draggable="false" class="not-draggable-img">
          </div>
          <div id="target1" class="dropzone zielzone"></div>
          <div id="target2" class="dropzone zielzone"></div>
      </div>
  
      <script src="07.02.js"></script>
  </body>
  </html>`,
        css: `.container {
      display: flex;
      gap: 20px;
      margin: 20px;
  }
  
  .dropzone {
      width: 200px;
      height: 200px;
      border: 2px dashed #a97db0;
      background-color: #f5e6f7; 
      padding: 10px;
      transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  
  .dropzone.dragover {
      background-color: #d9c2e9; 
      border-color: #7e57a1; 
  }
  
  .draggable-img {
      width: 50px;
      height: 50px;
      cursor: move; 
      margin: 5px;
      border: 2px solid #a97db0;
      background-color: #e9d4f0; 
  }
  
  .not-draggable-img {
      width: 50px;
      height: 50px;
      cursor:not-allowed; 
      margin: 5px;
      border: 2px solid #a97db0;
      background-color: #e9d4f0; 
  }
  
  .original-position {
      min-height: 120px;
      background-color: #f5e6f7; 
  }`,
        js: `document.addEventListener("DOMContentLoaded", function () {
      const draggableImages = document.querySelectorAll(".draggable-img");
      const dropzones = document.querySelectorAll(".dropzone");
  
      draggableImages.forEach(image => {
          image.addEventListener("dragstart", (event) => {
              event.dataTransfer.setData("text/plain", event.target.id);
              event.target.classList.add("dragging");
          });
  
          image.addEventListener("dragend", () => {
              image.classList.remove("dragging");
          });
      });
  
      dropzones.forEach(zone => {
          zone.addEventListener("dragover", (event) => {
              event.preventDefault(); 
              zone.classList.add("dragover");
          });
  
          zone.addEventListener("dragleave", () => {
              zone.classList.remove("dragover");
          });
  
          zone.addEventListener("drop", (event) => {
              event.preventDefault();
              const draggedId = event.dataTransfer.getData("text/plain");
              const draggedElement = document.getElementById(draggedId);
  
              if (draggedElement) {
                  zone.appendChild(draggedElement);
              }
  
              draggedElement.addEventListener("dblclick", () => {
                  const originalZone = document.getElementById("original");
                  originalZone.appendChild(draggedElement);
              });
  
              zone.classList.remove("dragover");
          });
      });
  });`
      },
      {
        id: "7.4",
        title: "Drag & Drop Aufgabentool",
        html: `<!DOCTYPE html>
  <html>
  <head>
      <link rel="stylesheet" href="07.04.css">
  </head>
  <body>
      <h1>07.04 - Drag & Drop Aufgabentool</h1>
  
      <div id="new-task-form">
          <input type="text" id="task-text" placeholder="Neue Aufgabe...">
          <input type="color" id="task-color" value="#cccccc">
          <button onclick="addTask()">Aufgabe hinzufügen</button>
      </div>
  
      <div class="board">
          <div id="todo" class="column" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="leaveDrop(event)">
              <div class="column-header">ToDo</div>
          </div>
          <div id="wip" class="column" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="leaveDrop(event)">
              <div class="column-header">WIP</div>
          </div>
          <div id="done" class="column" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="leaveDrop(event)">
              <div class="column-header">Done</div>
          </div>
          <div id="trash" class="column" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="leaveDrop(event)">
              <div class="column-header">Trash</div>
          </div>
      </div>
  
      <script src="07.04.js"></script>
  </body>
  </html>`,
        css: `.board {
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: center;
      margin: 20px;
  }
  
  .column {
      flex: 1;
      border: 2px dashed #a97db0; 
      border-radius: 10px;
      background-color: #f5e6f7; 
      padding: 10px;
      text-align: center;
      min-height: 200px;
      transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  
  .column.dragover {
      background-color: #d9c2e9; 
      border-color: #7e57a1; 
  }
  
  .column-header {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #4b0082;
  }
  
  .task {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--task-color, #dda0dd); 
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      color: white;
      cursor: grab;
      border: 2px solid #a97db0; 
      background-color: #e9d4f0; 
      transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  
  .task.done {
      background-color: #d3b8e5; 
      color: #4b0082;
      text-decoration: line-through;
      cursor: default;
  }
  
  .task.dragging {
      opacity: 0.5; 
  }
  
  .task-controls button {
      background-color: #6a5acd;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 3px;
      cursor: pointer;
      transition: background-color 0.3s;
  }
  
  .task-controls button:hover {
      background-color: #483d8b;
  }`,
        js: `let taskCounter = 0; 
  
  function allowDrop(event) {
      event.preventDefault();
      event.currentTarget.classList.add('dragover');
  }
  
  function leaveDrop(event) {
      event.currentTarget.classList.remove('dragover');
  }
  
  function drag(event) {
      event.dataTransfer.setData('text', event.target.id);
      event.target.classList.add('dragging');
  }
  
  function drop(event) {
      event.preventDefault();
      event.currentTarget.classList.remove('dragover');
  
      const taskId = event.dataTransfer.getData('text');
      const task = document.getElementById(taskId);
  
      if (event.currentTarget.id === 'done') {
          task.classList.add('done');
      } else if (event.currentTarget.id === 'trash') {
          task.remove();
          return;
      } else {
          task.classList.remove('done');
      }
  
      event.currentTarget.appendChild(task);
  }
  
  function addTask() {
      const text = document.getElementById('task-text').value;
      const color = document.getElementById('task-color').value;
  
      if (!text) return;
  
      const task = document.createElement('div');
      task.id = \`task-\${++taskCounter}\`; 
      task.className = 'task';
      task.draggable = true;
      task.style.backgroundColor = color;
      task.setAttribute('data-color', color); 
      task.ondragstart = drag;
      task.ondragend = () => task.classList.remove('dragging');
  
      const taskText = document.createElement('div');
      taskText.className = 'task-text'; 
      taskText.textContent = text;
  
      const controls = document.createElement('div');
      controls.className = 'task-controls';
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Bearbeiten';
      editButton.onclick = () => editTask(task);
  
      controls.appendChild(editButton);
      task.appendChild(taskText);
      task.appendChild(controls);
  
      document.getElementById('todo').appendChild(task);
  
      document.getElementById('task-text').value = '';
  }
  
  function editTask(task) {
      const taskTextDiv = task.querySelector('.task-text');
      const currentText = taskTextDiv.textContent;
      const currentColor = task.getAttribute('data-color');
  
      const input = document.createElement('input');
      input.type = 'text';
      input.value = currentText;
  
      const colorInput = document.createElement('input');
      colorInput.type = 'color';
      colorInput.value = currentColor;
  
      const saveButton = document.createElement('button');
      saveButton.textContent = 'Speichern';
  
      saveButton.onclick = () => {
          taskTextDiv.textContent = input.value;
          const newColor = colorInput.value;
          task.style.backgroundColor = newColor;
          task.setAttribute('data-color', newColor); 
  
          task.replaceChild(taskTextDiv, input);
          task.querySelector('.task-controls').replaceChild(editButton, saveButton);
          task.querySelector('.task-controls').removeChild(colorInput);
      };
  
      task.replaceChild(input, taskTextDiv);
      const controls = task.querySelector('.task-controls');
      controls.appendChild(colorInput);
      controls.appendChild(saveButton);
  
      const editButton = controls.querySelector('button');
      controls.removeChild(editButton);
  }
  
  function clearTrash() {
      const trash = document.getElementById('trash');
      trash.innerHTML = '';
  }`
      }
    ]
  };
  