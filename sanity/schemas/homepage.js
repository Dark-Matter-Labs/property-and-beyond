

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
    name: 'homePage',
    type: 'document',
    title: 'Home Page',
    fields: [
        {
            name: 'title',
            type: 'string',
            readOnly: true
        },

        {
            name: 'intro',
            type: 'array',
            title: 'Intro text',
            of: [{type: 'block', 
            styles: [
                {title: 'Intro', value: 'intro'},
                {title: 'Normal', value: 'normal'},
              ],
            lists: [],
            marks: {
                decorators: [],
                annotations: [],
            } 
            }]
        },
        {
            name: 'politicsOfChange',
            type: 'array',
            title: 'Politics of change',
            of: [{type: 'block', 
            styles: [
                {title: 'Intro', value: 'intro'},
                {title: 'Normal', value: 'normal'},
                {title: 'small', value: 'small'}
              ],
            lists: [],
            marks: {
                decorators: [],
                annotations: [         {
                    name: 'link',
                    type: 'object',
                    title: 'External link',
                    fields: [
                      {
                        name: 'file',
                        title: 'File',
                        type: 'file'
                      },
                 
                    ]
                  },],
            } 
            }]
        },
        {
            name: 'capabilities',
            type: 'array',
            title: 'Capabilities',
            of: [{type: 'block', 
            styles: [
                {title: 'Intro', value: 'intro'},
                {title: 'Normal', value: 'normal'},
              ],
            lists: [],
            marks: {
                decorators: [],
                annotations: [],
            } 
            }]
        },
        {
            name: 'proofsOfPossibility',
            type: 'array',
            title: 'Proofs of Possibility',
            of: [{type: 'block', 
            styles: [
                {title: 'Intro', value: 'intro'},
                {title: 'Normal', value: 'normal'},
              ],
            lists: [],
            marks: {
                decorators: [],
                annotations: [],
            } 
            }]
        },
          {
            name: 'proofOfPossibilityCards',
            type: 'array',
            title: 'Proofs of Possiblity',
            of: [{type: 'possibility'}]
        },
        {
            name: 'conference',
            type: 'array',
            title: 'Conference',
            of: [{type: 'block', 
            styles: [
                {title: 'Intro', value: 'intro'},
                {title: 'Normal', value: 'normal'},
              ],
            lists: [],
            marks: {
                decorators: [],
                annotations: [         {
                  name: 'extLink',
                  type: 'object',
                  title: 'External link',
                  fields: [
                    {
                      name: 'link',
                      title: 'Link',
                      type: 'url'
                    },
               
                  ]
                },],
            } 
            }]
        },

    ],
}