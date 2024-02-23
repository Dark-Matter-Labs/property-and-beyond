


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
            name: 'genericPropertyIssue',
            type: 'reference',
            title: 'Generic Property Issue',
            to: [{type: 'genericPropertyIssue'}],
            validation: (Rule) => Rule.required()
        }
       
    ]
}