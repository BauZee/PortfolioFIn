import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css'],
})
export class EducationSectionComponent {
  education = [
    {
      title: 'Werksstudent - Front-End Entwickler',
      company: 'Exxeta AG, Leipzig, Germany',
      duration: 'Oct. 2024 - heute',
      details: [
        'Konzeption und Umsetzung moderner Frontends mit Angular und Tailwind, einschließlich der Entwicklung responsiver und benutzerfreundlicher Oberflächen.',
        'Integration & Entwicklung von Services, für die Kommunikation mit REST-APIs, inklusive effizientem Abruf, Senden, Aktualisieren und Löschen von Daten.',
        'Erstellung und Durchführung umfangreicher Tests, wie Unit-Tests, Komponententests und End-to-End-Tests mithilfe moderner Tools wie Cypress und Jasmine.',
        'Verwendung von Git und GitLab für Versionskontrolle, kollaborative Entwicklung und strukturierte Projektverwaltung.',
      ],
    },
    {
      title: 'Werkstudent – Front-End Entwickler',
      company: 'Knowmates GmbH, Leipzig, Germany',
      duration: 'Oct. 2023 - Sep. 2024',
      details: [
        'Entwicklung und Gestaltung von Webseiten mit WordPress unter Verwendung zahlreicher verschiedener Themes.',
        'Verantwortlich für die Konzeption und Gestaltung der Projekte in enger Abstimmung mit den Kunden durch regelmäßige Gespräche und Feedbackschleifen.',
        'Erstellung individueller WordPress-Blöcke mithilfe von PHP, um spezifische Kundenanforderungen umzusetzen.',
      ],
    },
    {
      title: 'Praktikant – Front-End-Entwicklung',
      company: 'Knowmates GmbH, Leipzig, Germany',
      duration: 'Jun. 2023 - Sep. 2023',
      details: [
        'Mitarbeit an der Entwicklung und Gestaltung von Webseiten mit WordPress und dem Einsatz zahlreicher Themes.',
        'Unterstützung bei der Konzeption und Umsetzung der Projekte, einschließlich der Kundenkommunikation zur Abstimmung von Anforderungen.',
        'Erstellung individueller WordPress-Blöcke mithilfe von PHP, um spezifische Kundenanforderungen umzusetzen.',
      ],
    },
    {
      title: 'Bachelorarbeit',
      company: 'Hegewald Medizinprodukte GmbH, Leipzig, Germany',
      duration: 'Aug. 2022 - Nov. 2022',
      details: [
        'Verbesserte und erweiterte meine Software zur Ansteuerung und Auswertung einer Multisensorik für Single-Use-Bioreaktoren (SUB).',
        'Kommunikation mit einem Open-Source-Potentiostaten sowie die Datenaufnahme, -aufbereitung, -auswertung und -visualisierung von Messwerten.',
        'Weiterentwicklung einer grafischen Benutzeroberfläche (GUI) in Python mit Tkinter und Matplotlib, basierend auf der MVC-Architektur.',
      ],
    },
    {
      title: 'Bachelor Medizintechnik (B. Eng.)',
      company: 'Ernst-Abbe-Hochschule Jena, Jena, Germany',
      duration: 'Okt. 2019 – März. 2023',
      details: [
        'Praxisorientierte ingenieurwissenschaftliche Ausbildung mit Fokus auf die Entwicklung medizinischer Geräte und die Verarbeitung von Biosignalen.',
        'Moderne Verfahren der Medizintechnik, insbesondere im Umgang mit Diagnose- und Therapiegeräten wie Beatmungs- und Ultraschallgeräten.',
      ],
    },
    {
      title: 'Abitur mit dem Schwerpunkt Daten- und Informationstechnik',
      company: 'Andreas-Gordon-Schule Erfurt, Erfurt, Germany',
      duration: 'Aug. 2016 – Jul. 2019',
      details: [
        'Abitur mit dem Schwerpunkt Daten- und Informationstechnik.',
        'Projekt „Sicherheit im Eigenheim – Raspberry Pi“, ein Smart-Home-System mit Rauch- und Dämmerungssensoren sowie einer Android-App.',
      ],
    },
  ];
}
