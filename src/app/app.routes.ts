import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home-page.component').then(m => m.HomePageComponent),
    data: {
      title: 'Erwin Bause - Frontend Developer Portfolio',
      description: 'Willkommen zu meinem Portfolio! Entdecke meine Projekte, Fähigkeiten und mehr über meinen beruflichen Werdegang als Frontend Developer mit Angular.',
      keywords: 'Frontend Developer, Angular, Webentwicklung, Portfolio, Projekte, Lebenslauf',
      og: {
        title: 'Erwin Bause - Frontend Developer Portfolio',
        description: 'Willkommen zu meinem Portfolio! Entdecke meine Projekte, Fähigkeiten und mehr über meinen beruflichen Werdegang als Frontend Developer mit Angular.',
        image: 'assets/images/og-home.png',
        url: 'https://localhost:4200',
        type: 'website'
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Erwin Bause",
        "url": "https://localhost:4200",
        "sameAs": [
          "https://www.linkedin.com/in/erwin-bause-10b592185/",
          "https://github.com/BauZee"
        ],
        "jobTitle": "Werkstudent - Front End Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Exxeta AG"
        },
        "hasPart": [
          {
            "@type": "WebPage",
            "name": "Übung 1",
            "url": "https://localhost:4200/exercise/1"
          },
          // Weitere Übungen hier
        ]
      },
    }
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    data: {
      title: 'Über mich - Erwin Bause Portfolio',
      description: 'Erfahre mehr über Erwin Bause, seinen Bildungsweg, beruflichen Erfahrungen und persönlichen Interessen als Frontend Developer.',
      keywords: 'Über mich, Erwin Bause, Frontend Developer, Bildungsweg, Lebenslauf, Erfahrungen',
      og: {
        title: 'Über mich - Erwin Bause Portfolio',
        description: 'Erfahre mehr über Erwin Bause, seinen Bildungsweg, beruflichen Erfahrungen und persönlichen Interessen als Frontend Developer.',
        image: 'assets/images/og-about.png',
        url: 'https://localhost:4200/about',
        type: 'website'
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Erwin Bause",
        "url": "https://localhost:4200/about",
        "sameAs": [
          "https://www.linkedin.com/in/erwin-bause-10b592185/",
          "https://github.com/BauZee"
        ],
        "jobTitle": "Werkstudent - Front End Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Exxeta AG"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "HTWK Leipzig"
        }
      },
    }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/components/form-component/form-component.component').then(m => m.FormComponentComponent),
    data: {
      title: 'Kontakt - Erwin Bause Portfolio',
      description: 'Nimm Kontakt mit mir auf! Sende mir eine Nachricht über das Kontaktformular und lass uns über mögliche Projekte und Zusammenarbeit sprechen.',
      keywords: 'Kontakt, Nachricht, Erwin Bause, Frontend Developer, Zusammenarbeit',
      og: {
        title: 'Kontakt - Erwin Bause Portfolio',
        description: 'Nimm Kontakt mit mir auf! Sende mir eine Nachricht über das Kontaktformular und lass uns über mögliche Projekte und Zusammenarbeit sprechen.',
        image: 'assets/images/og-contact.png',
        url: 'https://localhost:4200/contact',
        type: 'website'
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Kontakt - Erwin Bause Portfolio",
        "url": "https://localhost:4200/contact",
        "contactOption": "TollFree",
        "contactType": "customer support",
        "telephone": "+49-123-4567890",
        "email": "erwin.bause@beispiel.de"
      },
    }
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    data: {
      title: 'Projekte - Erwin Bause Portfolio',
      description: 'Entdecke eine Übersicht meiner Projekte im Bereich Frontend-Entwicklung mit Angular. Erfahre mehr über die Technologien und Herausforderungen hinter jedem Projekt.',
      keywords: 'Projekte, Frontend Development, Angular, Webprojekte, Portfolio, Erwin Bause',
      og: {
        title: 'Projekte - Erwin Bause Portfolio',
        description: 'Entdecke eine Übersicht meiner Projekte im Bereich Frontend-Entwicklung mit Angular. Erfahre mehr über die Technologien und Herausforderungen hinter jedem Projekt.',
        image: 'assets/images/og-projects.png',
        url: 'https://localhost:4200/projects',
        type: 'website'
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Projekte - Erwin Bause Portfolio",
        "url": "https://localhost:4200/projects",
        "hasPart": [
          {
            "@type": "WebPage",
            "name": "Projekt XYZ",
            "url": "https://localhost:4200/projects/projekt-xyz"
          },
          // Weitere Projekte hier
        ]
      },
    }
  },
  {
    path: 'exercise',
    loadComponent: () => import('./pages/exercises/exercises.component').then(m => m.ExercisesComponent),
    data: {
      title: 'Übungen - Erwin Bause Portfolio',
      description: 'Siehe meine Lösungen und Projekte aus den Übungen des Moduls Multimediale Webprogrammierung. Erfahre mehr über die angewandten Techniken und Frameworks.',
      keywords: 'Übungen, Multimediale Webprogrammierung, Angular, Lösungen, Projekte, Erwin Bause',
      og: {
        title: 'Übungen - Erwin Bause Portfolio',
        description: 'Siehe meine Lösungen und Projekte aus den Übungen des Moduls Multimediale Webprogrammierung. Erfahre mehr über die angewandten Techniken und Frameworks.',
        image: 'assets/images/og-exercise.png',
        url: 'https://localhost:4200/exercise',
        type: 'website'
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Übungen - Erwin Bause Portfolio",
        "url": "https://localhost:4200/exercise",
        "hasPart": [
          {
            "@type": "WebPage",
            "name": "Übung 1",
            "url": "https://localhost:4200/exercise/1"
          },
          {
            "@type": "WebPage",
            "name": "Übung 2",
            "url": "https://localhost:4200/exercise/2"
          },
          // Weitere Übungen hier
        ]
      },
    }
  },
  {
    path: 'exercise/:id',
    loadComponent: () => import('./pages/exercises/components/exercise-detail/exercise-detail.component').then(m => m.ExerciseDetailComponent),
    data: {
      title: '', 
      description: '', 
      keywords: 'Übung, Details, Multimediale Webprogrammierung, Angular, Lösungen, Erwin Bause',
      og: {
        title: '', 
        description: '', 
        image: 'assets/images/og-exercise-detail.png',
        url: '', 
        type: 'article'
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "", 
        "url": "", 
        "author": {
          "@type": "Person",
          "name": "Erwin Bause"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Erwin Bause Portfolio",
          "logo": {
            "@type": "ImageObject",
            "url": "https://localhost:4200/assets/images/logo.png"
          }
        },
        "datePublished": "2025-02-07"
      },
    }
  }
];
