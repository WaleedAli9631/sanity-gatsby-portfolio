export default {
    name: 'About',
    title: 'About',
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