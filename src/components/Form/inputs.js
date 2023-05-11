export const inputs = [
  {
    type: 'text',
    'data-testid': 'name-input',
    name: 'cardName',
    label: 'Nome',
    hasError: true,
  },
  {
    type: 'text',
    'data-testid': 'description-input',
    name: 'cardDescription',
    label: 'Descrição',
    multiline: true,
    hasError: true,
  },
  {
    type: 'number',
    'data-testid': 'attr1-input',
    name: 'cardAttr1',
    label: 'Attr01',
    hasError: true,
    outlined: true,
  },
  {
    type: 'number',
    'data-testid': 'attr2-input',
    name: 'cardAttr2',
    label: 'Attr02',
    hasError: true,
    outlined: true,

  },
  {
    type: 'number',
    'data-testid': 'attr3-input',
    name: 'cardAttr3',
    label: 'Attr03',
    hasError: true,
    outlined: true,
  },
  {
    type: 'text',
    'data-testid': 'image-input',
    name: 'cardImage',
    label: 'Imagem',
    icon: <img src="/images/link.svg" alt="link" />,
    hasError: true,
    outlined: true,
  },
];
