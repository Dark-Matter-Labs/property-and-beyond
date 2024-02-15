
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
    name: 'possibility',
    type: 'object',
    title: 'Proof of Possiblity',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Card title',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Card description',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Card image',
        },
        {
            name: 'file',
            type: 'file',
            title: 'Upload pdf',    
        }
    ]
}