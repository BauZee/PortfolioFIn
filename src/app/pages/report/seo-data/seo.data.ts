export const reportSeoData = {
    title: 'Erwin Bause - Portfolio - Bericht',
    description:
      'Entdecken Sie den detaillierten Bericht über die Entwicklung der Portfolio-Webseite von Erwin Bause.',
    keywords: 'Portfolio, Bericht, Erwin Bause, MMWP, Projektstruktur, Medienformate, Layout-Design, Lernerfahrungen',
    og: {
      title: 'Erwin Bause - Portfolio - Bericht',
      description:
      'Entdecken Sie den detaillierten Bericht über die Entwicklung der Portfolio-Webseite von Erwin Bause.',
      image: 'assets/images/report/report-overview.webp', 
      url: 'localhost:4200/report', 
      type: 'article',
      locale: 'de_DE',
      site_name: 'Erwin Bause - Portfolio - Bericht',
      'image:alt': 'Bericht zur Portfolio-Webseite von Erwin Bause',
      'image:width': '1200',
      'image:height': '800',
    },
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Bericht zur Entwicklung der Portfolio-Webseite',
        'description':
        'Entdecken Sie den detaillierten Bericht über die Entwicklung der Portfolio-Webseite von Erwin Bause.',
        'author': {
          '@type': 'Person',
          'name': 'Erwin Bause',
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Erwin Bause Portfolio',
          'logo': {
            '@type': 'ImageObject',
            'url': 'assets/images/logo.webp',
          },
        },
        'datePublished': '2025-01-28',
        'image': 'assets/images/report/report-overview.webp',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Bericht zur Portfolio-Webseite',
        'url': 'localhost:4200/report',
      },
    ],
  };
  