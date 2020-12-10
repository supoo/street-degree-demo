export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fd283b91be6a88ce4fc47f7',
                  title: 'Sanity Studio',
                  name: 'street-degree-demo-studio',
                  apiId: '8baaa9e0-68d1-48b5-a644-653f0a7503e5'
                },
                {
                  buildHookId: '5fd283b95d91638ba056c1e9',
                  title: 'Blog Website',
                  name: 'street-degree-demo',
                  apiId: 'e6d6e9cb-7bd4-4757-b530-1c97f28d1736'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/supoo/street-degree-demo',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://street-degree-demo.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
