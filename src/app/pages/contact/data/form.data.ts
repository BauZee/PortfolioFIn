export const formFields: any[] = [
    {
      id: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'Ihr Name',
      errorMessage: 'Dies ist ein Pflichtfeld.'
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Ihre E-Mail-Adresse',
      errorMessage: 'Bitte geben Sie eine gültige Email-Adresse ein. Dies ist ein Pflichtfeld.'
    },
    {
      id: 'subject',
      type: 'text',
      label: 'Betreff',
      placeholder: 'Betreff',
      errorMessage: 'Dies ist ein Pflichtfeld.'
    },
    {
      id: 'message',
      type: 'text',
      label: 'Nachricht',
      placeholder: 'Ihre Nachricht',
      errorMessage: 'Dies ist ein Pflichtfeld.',
      isTextarea: true,
      rows: 5
    }
  ];