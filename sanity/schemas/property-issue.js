
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
    name: 'propertyIssue',
    type: 'document',
    title: 'Property issue',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'descriptions',
            type: 'text',
            title: 'Description'
        },
    ]
}