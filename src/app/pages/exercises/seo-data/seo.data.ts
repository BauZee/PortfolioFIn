export const exercisesSeoData = {
  title: 'Übungen - Erwin Bause Portfolio',
  description:
    'Entdecke meine Lösungen und Projekte aus den Übungen des Moduls Multimediale Webprogrammierung. Jede Serie zeigt praktische Beispiele und Lösungen.',
  keywords: 'Übungen, Multimediale Webprogrammierung, HTML, CSS, JavaScript, Webworker, Angular, Erwin Bause',
  og: {
    title: 'Übungen - Erwin Bause Portfolio',
    description:
      'Entdecke meine Lösungen und Projekte aus den Übungen des Moduls Multimediale Webprogrammierung.',
    image: 'assets/images/exercises.webp',  
    url: 'localhost:4200/exercises', 
    type: 'website',
    locale: 'de_DE',
    site_name: 'Erwin Bause Portfolio',
    'image:alt': 'Übungsserien von Erwin Bause',
    'image:width': '1200',
    'image:height': '800'
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Übungsserien - Erwin Bause Portfolio",
      "description":
        'Eine Übersicht meiner Lösungen und Projekte aus den Übungen des Moduls Multimediale Webprogrammierung.',
      "url": "localhost:4200/exercises",
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "Serie 1",
          "url": "localhost:4200/exercises/1"
        },
        {
          "@type": "WebPage",
          "name": "Serie 2",
          "url": "localhost:4200/exercises/2"
        },
        {
          "@type": "WebPage",
          "name": "Serie 3",
          "url": "localhost:4200/exercises/3"
        },
        {
          "@type": "WebPage",
          "name": "Serie 4",
          "url": "localhost:4200/exercises/4"
        },
        {
          "@type": "WebPage",
          "name": "Serie 5",
          "url": "localhost:4200/exercises/5"
        },
        {
          "@type": "WebPage",
          "name": "Serie 6",
          "url": "localhost:4200/exercises/6"
        },
        {
          "@type": "WebPage",
          "name": "Serie 7",
          "url": "localhost:4200/exercises/7"
        },
        {
          "@type": "WebPage",
          "name": "Serie 8",
          "url": "localhost:4200/exercises/8"
        },
        {
          "@type": "WebPage",
          "name": "Serie 9",
          "url": "localhost:4200/exercises/9"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Erwin Bause Portfolio",
      "url": "localhost:4200/exercises",
      
    }
  ]
};
  

export const seriesData = [
  {
    id: 1,
    title: 'Einführung & Tools',
    description: 'Entwicklungsumgebung einrichten und erste HTML-Datei erstellen.',
    topics: ['Entwicklungstools', 'HTML', 'CSS', 'JS']
  },
  {
    id: 2,
    title: 'HTML & CSS Grundlagen',
    description: 'HTML-Strukturen und grundlegende CSS-Styling-Techniken.',
    topics: ['HTML', 'CSS', 'Box-Modell']
  },
  {
    id: 3,
    title: 'Responsive Design',
    description: 'Media Queries und Layouts für verschiedene Bildschirmgrößen.',
    topics: ['Media Queries', 'Flexbox', 'Grid']
  },
  {
    id: 4,
    title: 'Einführung in JavaScript',
    description: 'Grundlegende JavaScript-Funktionen und DOM-Interaktion.',
    topics: ['JS Basics', 'DOM', 'Events']
  },
  {
    id: 5,
    title: 'Canvas Grundlagen',
    description: 'Zeichnen von Formen und Texten mit der Canvas-API.',
    topics: ['Canvas', 'Zeichnungen', 'Text']
  },
  {
    id: 6,
    title: 'Web Worker',
    description: 'Hintergrundberechnungen und asynchrone Tasks.',
    topics: ['Web Worker', 'Performance', 'Async']
  },
  {
    id: 7,
    title: 'Drag & Drop API',
    description: 'Drag-and-Drop-Interaktionen mit der HTML-API.',
    topics: ['Drag & Drop', 'Benutzerführung', 'Interaktionen']
  },
  {
    id: 8,
    title: 'Asynchrones JavaScript',
    description: 'AJAX und die Fetch-API für serverseitige Kommunikation.',
    topics: ['AJAX', 'Fetch API', 'SPA']
  },
  {
    id: 9,
    title: 'Formulare und Events',
    description: 'Formulare validieren und Benutzereingaben protokollieren.',
    topics: ['Formulare', 'Validierung', 'Events']
  }
];
  

  export function getSeriesSeoData(id: number): any {
    const exercise = seriesData.find((s) => s.id === id);
  
    if (!exercise) return null;
  
    return {
      title: `Übung ${exercise.id} - ${exercise.title} - Erwin Bause Portfolio`,
      description: `Details zu Übung ${exercise.id}: ${exercise.description}. Themen: ${exercise.topics.join(', ')}.`,
      keywords: exercise.topics.join(', '),
      og: {
        title: `Übung ${exercise.id} - ${exercise.title} - Erwin Bause Portfolio`,
        description: `Details zu Übung ${exercise.id}: ${exercise.description}. Themen: ${exercise.topics.join(', ')}.`,
        url: `localhost:4200/exercises/${exercise.id}`, 
        type: 'article',
        locale: 'de_DE',
        site_name: 'Erwin Bause Portfolio',
        'image:alt': `Übung ${exercise.id} - ${exercise.title} von Erwin Bause`,
        'image:width': '1200',
        'image:height': '800'
      },
      schema: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": `Übung ${exercise.id} - ${exercise.title}`,
          "description": `Details zu Übung ${exercise.id}: ${exercise.description}. Themen: ${exercise.topics.join(', ')}.`,
          "author": {
            "@type": "Person",
            "name": "Erwin Bause",
            "url": "localhost:4200/about",
          
          },
          "publisher": {
            "@type": "Organization",
            "name": "Erwin Bause Portfolio",
            "logo": {
              "@type": "ImageObject",
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `localhost:4200/exercises/${exercise.id}`
          }
        }
      ]
    };
  }