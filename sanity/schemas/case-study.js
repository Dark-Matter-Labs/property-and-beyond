
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
    name: 'caseStudy',
    type: 'document',
    title: 'Case Study',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location',
        },
        {
            name: 'year',
            type: 'number',
            title: 'Year',
        },
        {
            name: 'typeOfRisk',
            type: 'string',
            title: 'Type of Risk',
            options: {
                list: [
                    {title: 'Technology', value: 'technology'},
                    {title: 'Real Estate and Build Environment', value: 'reslEstate'},
                ]
            }
        },
        {
            name: 'scenario',
            type: 'string',
            title: 'Scenario (Risk)',
        },
        {
            name: 'desctiption',
            type: 'text',
            title: 'Description',
        },
    ]
}