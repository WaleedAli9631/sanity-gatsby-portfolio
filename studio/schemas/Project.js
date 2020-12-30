import React from 'react'


const TitleStyle = props => (
  <span style={{fontFamily: 'sans-serif', fontSize: '2em'}}>{props.children}</span>
)
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
            type: 'block',
            styles: [
              {title: 'Normal', value: 'normal'},
              {title: 'H1', value: 'h1'},
              {title: 'H2', value: 'h2'},
              {title: 'H3', value: 'h3'},
              {title: 'Quote', value: 'blockquote'},
              {
                title: 'Title',
                value: 'title',
                blockEditor: {
                  render: TitleStyle
                }
              },
            ]
          },
          {
            type: 'image'
          },
          {
            type: 'code',
            options: {
              withFilename: true,
              theme: 'monokai'
            }
          }
        ]
      }
    ]
  }