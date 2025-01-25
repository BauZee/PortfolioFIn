import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from './models/projects.model';
import { AccordionModule } from 'primeng/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { NgClass } from '@angular/common';
import { ProjectAccordionComponent } from './components/project-accordion/project-accordion.component';
import { SkillCardComponent } from './components/skills-card/skill-card/skill-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectAccordionComponent, SkillCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})


export class ProjectsComponent {
  privateProjects: Project[] = [
    {
      "title": "Entwicklung einer Benutzeroberfläche für einen Potentiostaten",
      "subtitle": "Bachelorarbeit im Studiengang Medizintechnik",
      "image": "assets/images/projects/Bachelorarbeit-image.png",
      "description": "Funktionalitäten der Software:",
      "details": [
        "Entwicklung einer benutzerfreundlichen grafischen Benutzeroberfläche (GUI) für die Steuerung eines Open-Source-Potentiostaten",
        "Kommunikation mit dem Potentiostaten über serielle Schnittstellen (RS232)",
        "Implementierung elektrochemischer Messmethoden wie Cyclovoltammetrie (CV) und Squarewavevoltammetrie (SWV)",
        "Echtzeitaufnahme, Visualisierung und Analyse der Messdaten",
        "Integration von Kalibrierungsfunktionen für pH- und Sauerstoffsensoren"
      ],
      "technologies": [
        "Python",
        "Tkinter",
        "Matplotlib",
        "pySerial"
      ]
    },
    
    {
      "title": "Schiffe versenken",
      "subtitle": "Prüfungsprojekt im zweiten Semester im Modul 'Anwendungsorientierte Programmierung' an der HTWK Leipzig in einer Zweiergruppe",
      "image": "assets/images/projects/SchiffeVersenken-min.png",
      "description": "Funktionalitäten des Spiels:",
      "details": [
        "2-Spieler-Modus und Computermodus mit wechselseitigem Schießen",
        "Grafische Benutzeroberfläche (GUI) mit zwei Spielfeldern pro Spieler (eigene Schiffe und gegnerische Trefferanzeige)",
        "Regelkonforme Platzierung von Schiffen (z. B. keine angrenzenden Schiffe)",
        "Debug-Modus für Testzwecke ohne Spielerwechsel"
      ],
      "technologies": ["Java", "Java Swing"]
    },
    {
      "title": "Smart Home System",
      "subtitle": "Seminarfacharbeit im beruflichen Gymnasium an der Andreas Gordon Schule",
      "image": "assets/images/projects/smart-home.png",
      "description": "Funktionalitäten der App:",
      "details": [
        "Integration eines Rauch- und Dämmerungssensors zur Erhöhung der Sicherheit",
        "Programmierung einer Android-App zur Anzeige von Fenster-, Tür-, Licht- und Rauchstatus",
        "Einrichtung einer Realtime-Datenbank mit Firebase für die Kommunikation und Statusverfolgung",
        "Prototyp auf einem Steckbrett mit LEDs zur visuellen Darstellung der Sensorzustände"
      ],
      "technologies": ["Raspberry Pi", "Firebase", "Android App Development"]
    },
    {
      title: 'Buchhandlung-Verwaltungssystem',
      subtitle: 'Prüfungsprojekt im ersten Semester im Modul "Grundlagen der Programmierung" an der HTWK Leipzig.',
      image: 'assets/images/projects/bookstore.png',
      description: 'Funktionalitäten des Programmes:',
      details: [
        'Speicherung von Autor, Titel, Verlag, ISBN, Jahr, Preis',
        'Mehrfache Suchfunktionen (Autor, Titel, ISBN)',
        'Automatische Lagerbestandsverwaltung',
        'Verkaufsabwicklung mit Bestandsprüfung'
      ],
      technologies: ["C++"]
    },
    {
      title: 'Blog meiner Fahrradtour nach Kroatien',
      subtitle: 'Von Prag nach Rijeka in zwei Wochen',
      image: 'assets/images/projects/fahrradtour-kroatien.png',
      description: 'Eine eindrucksvolle Fahrradtour von Prag nach Rijeka über 1.593 Kilometer in zwei Wochen, dokumentiert mit Bildern, Statistiken und Erlebnissen.',
      details: [
        '1.593 Kilometer von Prag nach Rijeka in 14 Etappen',
        'Durchquerung von Tschechien, Österreich, Slowenien, Italien und Kroatien',
        'Anspruchsvolle Strecken mit 14.130 Höhenmetern bergauf',
        'Übernachtungen im Zelt, in Wäldern, an Flussufern und gelegentlich auf Campingplätzen',
        'Detaillierte Planung und Durchführung mit einem fünfköpfigen Team',
        'Dokumentation der Route, Ausrüstung und Erlebnisse auf einer interaktiven Webseite'
      ],
      technologies: [
        'Bootstrap 5',
        'Lightbox Plugin',
        'bs5-accordion',
        'HTML/CSS'
      ]
    },
    {
      title: 'Portfolio-Webseite – Prüfungsprojekt',
      subtitle: 'Lehrveranstaltung: Multimediale Webprogrammierung (Wintersemester 2024/25)',
      image: 'assets/images/projects/portfolio.png',
      description: 'Prüfungsprojekt zur Entwicklung einer Portfolio-Webseite im Modul Multimediale Webprogrammierung an der HTWK Leipzig.',
      details: [
        'Erstellung einer responsive Portfolio-Webseite mit Unterseiten zur Präsentation von Person, Bildungsweg, Fähigkeiten, Projekten, Hobbys und Referenzen.',
        'Integration von Übungsinhalten aus den Seminaraufgaben (Serie 1–9) als eigenständige Unterseiten.',
        'Umsetzung von SEO-Optimierungen (Keywords, Open-Graph, Schema.org) und Ladezeitenoptimierung (Lazy Loading, Critical Rendering Path).',
        'Bericht über eingesetzte Medienformate, Designentscheidungen und Lernerkenntnisse (2–3 A4-Seiten).',
        'Zusatzpunkte für Kreativität und Originalität der Umsetzung.'
      ],
      technologies: [
        'Tailwind',
        'Angular',
        'EmailJS',
        'SEO-Tools',
      ]
    }
    
    
  ];

  wordpressProjects: Project[] = [
    {
      title: 'Website für Sicherheitsunternehmen',
      subtitle: 'Professionelle und moderne Darstellung eines Sicherheitsunternehmens',
      image: '',
      description: 'Entwicklung einer modernen und übersichtlichen Website für ein Sicherheitsunternehmen. Die Seite bietet eine klare Struktur und umfassende Informationen.',
      details: [
        'Startseite mit ansprechendem Design',
        'Kontaktformular zur direkten Kundenanfrage',
        'Detaillierte Übersicht über angebotene Leistungen',
        'Informationen über das Unternehmen',
        'Karriereseite für potenzielle Bewerber'
      ],
      technologies: ['WordPress', 'PHP', 'CSS']
    },
    {
      title: 'Website für eine Autowaschanlage',
      subtitle: 'Moderne und kundenfreundliche Website für eine Autowaschanlage',
      image: '',
      description: 'Erstellung einer attraktiven Website, die die Dienstleistungen und Preise der Autowaschanlage klar darstellt.',
      details: [
        'Startseite mit allen wichtigen Informationen',
        'Abschnitt "Über uns" zur Vorstellung des Unternehmens',
        'Kontaktseite mit Formular und Standortanzeige',
        'Preisliste für verschiedene Waschprogramme',
        'Leistungsübersicht für die angebotenen Services'
      ],
      technologies: ['WordPress', 'PHP']
    },
    {
      title: 'Website für weiteres Sicherheitsunternehmen',
      subtitle: 'Professionelle Online-Präsenz für ein weiteres Sicherheitsunternehmen',
      image: '',
      description: 'Entwicklung einer Website für ein Sicherheitsunternehmen mit Fokus auf klarer Navigation und modernem Design.',
      details: [
        'Startseite mit Unternehmensvorstellung',
        'Kontaktformular und Standortkarte',
        'Leistungsübersicht für Kunden',
        'Informationen über das Unternehmen',
        'Karrierebereich für Bewerbungen'
      ],
      technologies: ['WordPress', 'PHP', 'CSS']
    },
    {
      title: 'Website für einen Fußballverein',
      subtitle: 'Interaktive Website für einen Fußballverein mit dynamischen Funktionen',
      image: '',
      description: 'Erstellung einer Website für einen Fußballverein mit Fokus auf aktuelle Informationen und Vereinsaktivitäten.',
      details: [
        'Dynamische Anzeige von Spielplänen und Ergebnissen',
        'Mannschaftsverwaltung mit Profilen',
        'News- und Eventbereich für Vereinsnachrichten',
        'Bildergalerie für besondere Momente und Highlights'
      ],
      technologies: ['WordPress', 'PHP']
    }
  ];


  angularProjects: Project[] = [
    {
      title: 'Auftragsverwaltung Elektro',
      subtitle: 'Moderne Auftragsverwaltungssoftware für Elektrodienstleistungen',
      image: '',
      description: 'Moderne Auftragsverwaltungssoftware für Elektrodienstleistungen mit folgenden Features:',
      details: [
        'Kundenmanagement & Auftragserfassung',
        'Ressourcenplanung & Auftragsverteilung',
        'Abrechnungsmodul & Dokumentenverwaltung',
        'Responsive Design & Benutzerfreundliche Oberfläche',
        'PDF-Export für Angebote und Rechnungen'
      ],
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript', 'REST API']
    }
  ];

  skillCategories: any[] = [
    {
      title: 'Frontend Skills',
      skills: [
        ['HTML5', 'CSS3', 'JavaScript'],
        ['Angular', 'React', 'Vue'],
        ['TypeScript', 'Tailwind']
      ]
    },
    {
      title: 'Backend Skills',
      skills: [
        ['Java', 'C#', 'Node.js'],
        ['SpringBoot', 'Express.js']
      ]
    },
    {
      title: 'Technologies & Tools',
      skills: [
        ['Docker', 'Git', 'GitLab'],
        ['CI/CD', 'Jira', 'Confluence']
      ]
    },
    {
      title: 'CMS & Platforms',
      skills: [
        ['WordPress', 'Salesforce']
      ]
    }
  ];


}
