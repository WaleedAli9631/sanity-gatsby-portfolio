import React from 'react'


const TitleStyle = props => (
  <span style={{fontFamily: 'sans-serif', fontSize: '2em'}}>{props.children}</span>
)

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
          }
        ]
      }
    ]
  }