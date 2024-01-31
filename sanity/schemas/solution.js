
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
    name: 'solution',
    type: 'document',
    title: 'Solution',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'description',
            type: 'array',
            title: 'Description',
            of: [{type: 'block'}]
        },
        {
            name: 'type',
            type: 'string',
            title: 'Solution Type',
            options: {
                list: [
                    {title: 'Intermediate', value: 'Intermediate'},
                    {title: 'Third Horizon Solution', value: 'Third Horizon Solutions'},
                    {title: 'Adjacent Possibilitie', value: 'Adjacent Possibilitie'},
                ]
            }
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
    ]

}