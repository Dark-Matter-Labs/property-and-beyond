
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
    name: 'risk',
    type: 'document',
    title: 'Risk',
    fields: [
        {
            name:'title',
            type:'string',
            title: 'Risk Title',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Risk description'
        }
    ]
}