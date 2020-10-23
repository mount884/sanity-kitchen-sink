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
                  buildHookId: '5f9248888c221a473a07b23a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-v2grmdt2',
                  apiId: 'd1b367b6-c6ff-473a-b5af-f834b7e93236'
                },
                {
                  buildHookId: '5f9248888c221a4a0f07b0f8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-fojmxmde',
                  apiId: '5e59d4b1-8f3c-4c79-9416-c926aea3915c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mount884/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-fojmxmde.netlify.app', category: 'apps'}
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
