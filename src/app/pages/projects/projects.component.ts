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
      title: 'Potentiostat Benutzeroberfläche',
      subtitle: 'Bachelorarbeit im Studiengang Medizintechnik...',
      image: 'assets/images/projects/Bachelorarbeit-image.png',
      description: 'Bachelorarbeit im Studiengang Medizintechnik an der Ernst-Abbe-Hochschule Jena...',
      details: [
        'Kommunikation mit dem Open-Source Potentiostaten über eine serielle Schnittstelle (RS232)',
        'Entwicklung einer benutzerfreundlichen GUI für die Steuerung und Konfiguration eines Open-Source-Potentiostaten',
        'Implementierung der elektrochemischen Messmethoden Cyclovoltammetrie und Squarewave-Voltammetrie',
        'Datenaufnahme, Visualisierung und Analyse der Ergebnisse elektrochemischer Messmethoden',
        'Integration von Kalibrierungsfunktionen für pH- und Sauerstoffsensoren'
      ],
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript']
    },
    {
      title: 'Schiffe versenken',
      subtitle: 'Prüfungsprojekt im zweiten Semester...',
      image: 'assets/images/projects/SchiffeVersenken-min.png',
      description: 'Prüfungsprojekt im zweiten Semester im Modul "Anwendungsorientierte Programmierung"...',
      details: [
        '2-Spieler-Modus & Computermodus mit wechselseitigem Schießen',
        'GUI mit zwei Spielfeldern pro Spieler (eigene Schiffe und gegnerische Trefferanzeige)',
        'Regelkonforme Platzierung von Schiffen (z. B. keine angrenzenden Schiffe)',
        'Debug-Modus für Testzwecke ohne Spielerwechsel'
      ],
      technologies: ['JavaScript', 'HTML/CSS']
    },
    {
      title: 'Smart Home System',
      subtitle: 'Seminarfacharbeit im beruflichen Gymnasium...',
      image: 'assets/images/projects/smart-home.png',
      description: 'Seminarfacharbeit im beruflichen Gymnasium an der Andreas Gordon Schule...',
      details: [
        'Integration eines Rauch- und Dämmerungssensors für Sicherheit',
        'Programmierung einer Android-App zur Anzeige von Fenster-, Tür-, Licht- und Rauchstatus',
        'Einrichtung einer Realtime-Datenbank mit Firebase',
        'Prototyp auf einem Steckbrett mit LEDs zur grafischen Anzeige'
      ],
      technologies: []
    },
    {
      title: 'Buchhandlung-Verwaltungssystem',
      subtitle: 'Prüfungsprojekt im ersten Semester...',
      image: 'assets/images/projects/bookstore.png',
      description: 'Prüfungsprojekt im ersten Semester im Modul "Grundlagen der Programmierung" an der HTWK Leipzig...',
      details: [
        'Speicherung von Autor, Titel, Verlag, ISBN, Jahr, Preis',
        'Mehrfache Suchfunktionen (Autor, Titel, ISBN)',
        'Automatische Lagerbestandsverwaltung',
        'Verkaufsabwicklung mit Bestandsprüfung'
      ],
      technologies: []
    }
  ];

  wordpressProjects: Project[] = [
    {
      title: 'Security Unternehmen Website',
      subtitle: 'Moderne Website für ein Sicherheitsunternehmen',
      image: '',
      description: 'Moderne Website für ein Sicherheitsunternehmen:',
      details: [
        'Startseite',
        'Kontakt',
        'Leistungen',
        'Über uns',
        'Karriere'
      ],
      technologies: ['WordPress', 'PHP', 'CSS']
    },
    {
      title: 'Autowaschanlage',
      subtitle: 'Moderne Website für eine Autowaschanlage',
      image: '',
      description: 'Moderne Website für eine Autowaschanlage:',
      details: [
        'Startseite',
        'Über uns',
        'Kontakt',
        'Preise',
        'Leistungen'
      ],
      technologies: ['WordPress', 'PHP']
    },
    {
      title: 'Security Unternehmen Website',
      subtitle: 'Moderne Website für ein weiteres Sicherheitsunternehmen',
      image: '',
      description: 'Moderne Website für ein weiteres Sicherheitsunternehmen:',
      details: [
        'Startseite',
        'Kontakt',
        'Leistungen',
        'Über uns',
        'Karriere'
      ],
      technologies: ['WordPress', 'PHP', 'CSS']
    },
    {
      title: 'Fußballverein',
      subtitle: 'Dynamische Website für einen Fußballverein',
      image: '',
      description: 'Dynamische Website für einen Fußballverein:',
      details: [
        'Spielplan & Ergebnisse',
        'Mannschaftsverwaltung',
        'News & Events',
        'Bildergalerie'
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
