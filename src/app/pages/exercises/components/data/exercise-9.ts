// exercise9.ts

export const exercise9 = {
    tasks: [
      {
        id: "9",
        title: "Übungsserie 09 - Input Events und Formulare",
        html: `<!DOCTYPE html>
  <html lang="de">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Übungsserie 09 - Input Events und Formulare</title>
      <link rel="stylesheet" href="exercise9.css">
  </head>
  <body>
      <div class="container">
          <h1>Übungsserie 09 - Registrierungsformular</h1>
  
          <!-- Aufgabe 9.1: Grundlegendes Formular -->
          <!-- Aufgabe 9.2: Zusammenfassung und Reset-Funktion -->
          <!-- Aufgabe 9.3: Tracking von Ereignissen -->
          <form class="registration-form" novalidate>
              <div class="form-group">
                  <label for="fullname">Vollständiger Name</label>
                  <input type="text" class="fullname" name="fullname" required>
                  <small class="error fullname-error"></small>
              </div>
              <div class="form-group">
                  <label for="email">E-Mail-Adresse</label>
                  <input type="email" class="email" name="email" required>
                  <small class="error email-error"></small>
              </div>
              <div class="form-group">
                  <label for="password">Passwort</label>
                  <input type="password" class="password" name="password" minlength="8" required>
                  <small class="error password-error"></small>
              </div>
              <div class="form-group">
                  <label for="confirm-password">Passwort bestätigen</label>
                  <input type="password" class="confirm-password" name="confirm-password" required>
                  <small class="error confirm-password-error"></small>
              </div>
              <div class="form-group">
                  <label for="birthdate">Geburtsdatum</label>
                  <input type="date" class="birthdate" name="birthdate" required>
                  <small class="error birthdate-error"></small>
              </div>
              <div class="form-group">
                  <label for="country">Land</label>
                  <select class="country" name="country" required>
                      <option value="">Bitte wählen...</option>
                      <option value="de">Deutschland</option>
                      <option value="at">Österreich</option>
                      <option value="ch">Schweiz</option>
                  </select>
                  <small class="error country-error"></small>
              </div>
              <div class="form-group">
                  <label>
                      <input type="checkbox" class="terms" name="terms" required>
                      Ich akzeptiere die allgemeinen Geschäftsbedingungen
                  </label>
                  <small class="error terms-error"></small>
              </div>
              <div class="form-buttons">
                  <button type="submit">Registrieren</button>
                  <button type="reset" class="reset-button">Zurücksetzen</button>
              </div>
          </form>
  
          <!-- Zusammenfassung (9.2) -->
          <div class="summary hidden">
              <h2>Zusammenfassung der Eingaben</h2>
              <p class="summary-content"></p>
          </div>
  
          <!-- Logs (9.3) -->
          <div class="logs">
              <h2>Logs</h2>
              <ul class="log-list"></ul>
          </div>
      </div>
  
      <script src="exercise9.js"></script>
  </body>
  </html>`,
        css: `/* Allgemeine Container-Styling für alle Aufgaben */
  .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border: 2px solid #dda0dd;
      border-radius: 10px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Styling für Eingabefelder, Buttons und Labels */
  .form-group {
      margin-bottom: 15px;
  }
  
  label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
  }
  
  input, select, button {
      width: 100%;
      padding: 10px;
      margin-bottom: 5px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 16px;
      box-sizing: border-box;
  }
  
  button {
      background-color: #dda0dd;
      color: white;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
  }
  
  button:hover {
      background-color: #ba55d3;
  }
  
  /* Fehleranzeigen */
  .error {
      color: red;
      font-size: 12px;
      display: none;
  }
  
  /* Zusammenfassung Styling (9.2) */
  .summary {
      margin-top: 20px;
      background-color: #fdf5ff;
      border: 1px solid #dda0dd;
      border-radius: 10px;
      padding: 20px;
  }
  
  .summary-content {
      color: #4b0082;
      font-size: 16px;
  }
  
  /* Logs Styling (9.3) */
  .logs {
      margin-top: 30px;
      background-color: #f9f9f9;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 10px;
  }
  
  .log-list {
      list-style-type: none;
      padding-left: 0;
  }
  
  .log-list li {
      background-color: #e0d4f0;
      padding: 5px;
      margin-bottom: 5px;
      border-radius: 5px;
      color: #4b0082;
  }`,
        js: `let formStartTime = null; // Startzeit für 9.3
  const logList = document.querySelector(".log-list");
  
  /**
   * Aufgabe 9.3: Log-Funktion zur Protokollierung
   */
  function logEvent(message) {
      const logItem = document.createElement("li");
      logItem.textContent = message;
      logList.appendChild(logItem);
  }
  
  /**
   * Aufgabe 9.3: Tracking von Input-Interaktionen
   */
  document.querySelectorAll(".registration-form input, .registration-form select").forEach((input) => {
      input.addEventListener("focus", () => {
          logEvent(\`Fokus auf \${input.name} um \${new Date().toLocaleTimeString()}\`);
      });
  });
  
  /**
   * Aufgabe 9.1 und 9.2: Formularvalidierung und Zusammenfassung
   */
  document.querySelector(".registration-form").addEventListener("submit", function (event) {
      event.preventDefault();
  
      if (!formStartTime) {
          formStartTime = new Date(); // Startzeit setzen
      }
  
      const formEndTime = new Date(); // Endzeit für 9.3
      const timeTaken = ((formEndTime - formStartTime) / 1000).toFixed(2);
      logEvent(\`Das Formular wurde in \${timeTaken} Sekunden ausgefüllt.\`);
  
      let isValid = true;
      const summaryContent = document.querySelector(".summary-content");
      const summary = document.querySelector(".summary");
  
      // Validierung für jedes Feld
      const fullname = document.querySelector(".fullname");
      const fullnameError = document.querySelector(".fullname-error");
      if (fullname.value.trim() === "") {
          fullnameError.textContent = "Der Name darf nicht leer sein.";
          fullnameError.style.display = "block";
          isValid = false;
          logEvent("Fehler: Vollständiger Name fehlt.");
      } else {
          fullnameError.style.display = "none";
      }
  
      const email = document.querySelector(".email");
      const emailError = document.querySelector(".email-error");
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email.value)) {
          emailError.textContent = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
          emailError.style.display = "block";
          isValid = false;
          logEvent("Fehler: Ungültige E-Mail-Adresse.");
      } else {
          emailError.style.display = "none";
      }
  
      const password = document.querySelector(".password");
      const passwordError = document.querySelector(".password-error");
      if (password.value.length < 8) {
          passwordError.textContent = "Das Passwort muss mindestens 8 Zeichen lang sein.";
          passwordError.style.display = "block";
          isValid = false;
          logEvent("Fehler: Passwort zu kurz.");
      } else {
          passwordError.style.display = "none";
      }
  
      const confirmPassword = document.querySelector(".confirm-password");
      const confirmPasswordError = document.querySelector(".confirm-password-error");
      if (confirmPassword.value !== password.value) {
          confirmPasswordError.textContent = "Die Passwörter stimmen nicht überein.";
          confirmPasswordError.style.display = "block";
          isValid = false;
          logEvent("Fehler: Passwörter stimmen nicht überein.");
      } else {
          confirmPasswordError.style.display = "none";
      }
  
      const birthdate = document.querySelector(".birthdate");
      const birthdateError = document.querySelector(".birthdate-error");
      if (birthdate.value === "") {
          birthdateError.textContent = "Bitte geben Sie Ihr Geburtsdatum ein.";
          birthdateError.style.display = "block";
          isValid = false;
          logEvent("Fehler: Geburtsdatum fehlt.");
      } else {
          birthdateError.style.display = "none";
      }
  
      const country = document.querySelector(".country");
      const countryError = document.querySelector(".country-error");
      if (country.value === "") {
          countryError.textContent = "Bitte wählen Sie ein Land aus.";
          countryError.style.display = "block";
          isValid = false;
          logEvent("Fehler: Land fehlt.");
      } else {
          countryError.style.display = "none";
      }
  
      const terms = document.querySelector(".terms");
      const termsError = document.querySelector(".terms-error");
      if (!terms.checked) {
          termsError.textContent = "Sie müssen die allgemeinen Geschäftsbedingungen akzeptieren.";
          termsError.style.display = "block";
          isValid = false;
          logEvent("Fehler: AGBs nicht akzeptiert.");
      } else {
          termsError.style.display = "none";
      }
  
      // Zusammenfassung anzeigen, wenn das Formular valide ist
      if (isValid) {
          let summaryText = \`
              <strong>Vollständiger Name:</strong> \${fullname.value}<br>
              <strong>E-Mail-Adresse:</strong> \${email.value}<br>
              <strong>Geburtsdatum:</strong> \${birthdate.value}<br>
              <strong>Land:</strong> \${country.options[country.selectedIndex].text}<br>
              <strong>AGBs akzeptiert:</strong> \${terms.checked ? "Ja" : "Nein"}
          \`;
          summaryContent.innerHTML = summaryText;
          summary.classList.remove("hidden");
  
          document.querySelector(".registration-form").reset();
          logEvent("Formular erfolgreich abgesendet!");
      } else {
          summary.classList.add("hidden");
      }
  });
  
  /**
   * Aufgabe 9.2: Reset-Button
   */
  document.querySelector(".reset-button").addEventListener("click", function () {
      document.querySelector(".registration-form").reset();
      document.querySelector(".summary").classList.add("hidden");
      document.querySelectorAll(".error").forEach(error => (error.style.display = "none"));
      logEvent("Formular zurückgesetzt");
  });`
      }
    ]
  };
  