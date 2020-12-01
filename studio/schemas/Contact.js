export default {
    name: 'Contact',
    title: 'Contact',
    type: 'document',
    fields: [
      // ... other fields ...
      {
        name: 'body',
        type: 'array',
        title: 'Body',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image'
          }
        ]
      }
    ]
  }