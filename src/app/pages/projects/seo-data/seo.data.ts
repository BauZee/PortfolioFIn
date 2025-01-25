export const projectsSeoData = {
    title: 'Projekte - Erwin Bause Portfolio',
    description:
      'Entdecke die Projekte von Erwin Bause, von privaten Entwicklungen bis hin zu WordPress- und Angular-Projekten. Erfahre mehr über die Technologien und Tools, die in diesen Projekten verwendet wurden.',
    keywords: 'Projekte, Erwin Bause, Frontend Developer, Angular, WordPress, JavaScript, TypeScript, Tailwind CSS, Projekte Übersicht',
    og: {
      title: 'Projekte - Erwin Bause Portfolio',
      description:
      'Entdecke die Projekte von Erwin Bause, von privaten Entwicklungen bis hin zu WordPress- und Angular-Projekten. Erfahre mehr über die Technologien und Tools, die in diesen Projekten verwendet wurden.',
      image: 'localhost:4200/assets/images/projects/projects.webp', 
      url: 'localhost:4200/projects',
      type: 'website',
      locale: 'de_DE',
      site_name: 'Erwin Bause Portfolio',
      'image:alt': 'Projekte von Erwin Bause',
      'image:width': '1200',
      'image:height': '800'
    },
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Projekte - Erwin Bause Portfolio",
        "description":
          'Eine Übersicht der vielfältigen Projekte von Erwin Bause, von privaten Entwicklungen bis hin zu WordPress- und Angular-Projekten.',
        "url": "localhost:4200/projects",
        "hasPart": [
          {
            "@type": "WebPage",
            "name": "Private Projekte",
            "url": "localhost:4200/projects#private"
          },
          {
            "@type": "WebPage",
            "name": "WordPress Projekte",
            "url": "localhost:4200/projects#wordpress"
          },
          {
            "@type": "WebPage",
            "name": "Angular & Tailwind Projekte",
            "url": "localhost:4200/projects#angular"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Erwin Bause Portfolio",
        "url": "localhost:4200/projects",
      }
    ]
  };