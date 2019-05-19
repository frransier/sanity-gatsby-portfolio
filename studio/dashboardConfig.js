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
                  buildHookId: '5ce1b32d5699e683e9045447',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-hcapzt9s',
                  apiId: '8f940b2d-638f-44e6-856b-856bb9c0b3b3'
                },
                {
                  buildHookId: '5ce1b32d5699e6b7d0045432',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ggaqkvwy',
                  apiId: '7b9ad2d0-8413-4205-9233-888aaca7c4e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frransier/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-ggaqkvwy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
