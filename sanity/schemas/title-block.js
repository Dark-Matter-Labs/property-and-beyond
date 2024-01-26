
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */


export default  {
    name:'titleBlock',
    type: 'object',
    title: 'Title and block content',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{type: 'block'}]
        }
    ]
}