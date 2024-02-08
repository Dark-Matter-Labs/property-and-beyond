


/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */


export default  {
    name:'propertyIssue',
    type: 'object',
    title: 'Property Issue',
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
        }
    ]
}