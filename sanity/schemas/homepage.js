

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
              ],
            lists: [],
            marks: {
                decorators: [],
                annotations: [],
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
                annotations: [],
            } 
            }]
        },

    ],
}