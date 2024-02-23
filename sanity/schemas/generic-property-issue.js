/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */


export default  {
    name:'genericPropertyIssue',
    type: 'document',
    title: 'Generic Property Issue',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'genericContent',
            type: 'array',
            title: 'Generic Content',
            of: [{type: 'block'}]
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        }, 
        {
            name: 'alt',
            type: 'string',
            title: 'Image Alt Text'
        },
    ]
}