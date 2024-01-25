
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
    name: 'titleText',
    type: 'object',
    title: 'Title text block',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'descriptions',
            type: 'text',
            title: 'Description',
        }
    ]
}