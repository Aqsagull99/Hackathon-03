export default {
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
        description: 'Main tagline for the hero section',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Short description below the heading',
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
        description: 'Text for the call-to-action button',
      },
      {
        name: 'statistics',
        title: 'Statistics',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'value', title: 'Value', type: 'string' },
              { name: 'label', title: 'Label', type: 'string' },
            ],
          },
        ],
      },
      {
        name: 'images',
        title: 'Hero Images',
        type: 'array',
        of: [
          {
            type: 'image',
            fields: [
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
              },
              // {
              //   name: 'animation',
              //   title: 'Animation Class',
              //   type: 'string',
              // },
            ],
          },
        ],
      },
    ],
  };
  

  