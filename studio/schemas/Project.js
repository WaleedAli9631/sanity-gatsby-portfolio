export default {
    name: 'Project',
    title: 'Project',
    type: 'document',
    fields: [
      // ... other fields ...
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'featuredPhoto',
        title: 'FeaturedPhoto',
        type: 'image'
      },
      {
        name: 'imagesGallery',
        title: 'Images gallery',
        type: 'array',
        of: [{ type: 'image' }]
       },
       {
        name: 'slug',
        title: 'Slug',
        type: 'slug'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'url'
      },
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