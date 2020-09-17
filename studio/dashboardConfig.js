export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f62e8002bf496dd2786c719',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1zrfzvam',
                  apiId: '23121c60-f1e1-4ba1-a2e7-394c379e79cb'
                },
                {
                  buildHookId: '5f62e800924ff01cf689f5a1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-n8dw1rm7',
                  apiId: 'b3615288-1f57-4dae-99b6-201b4c7eeb3c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/WaleedAli9631/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-n8dw1rm7.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
