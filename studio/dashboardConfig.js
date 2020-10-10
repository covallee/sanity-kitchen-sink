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
                  buildHookId: '5f81f555d1e620e2e4c0ce6d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cs9fiq9w',
                  apiId: '368dfae2-8706-4ddb-98d9-58ccfe882f96'
                },
                {
                  buildHookId: '5f81f5559f396cdcebdbf565',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6hcdwpjp',
                  apiId: '0d3c9923-0f45-462e-acfc-0f58b8a07bfc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/covallee/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6hcdwpjp.netlify.app', category: 'apps'}
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
