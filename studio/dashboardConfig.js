export default {
  widgets: [
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
                  buildHookId: '5fa8512f0a6d59efe8204f50',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mhu99igw',
                  apiId: 'bc2227fb-e6ac-4809-bed3-9f46a2d679bb'
                },
                {
                  buildHookId: '5fa8512fa4fba8e43c41873e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-n31bphpb',
                  apiId: '81f29224-6320-4d6e-a2f4-a13e1fc4ad50'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jkod/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-n31bphpb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
