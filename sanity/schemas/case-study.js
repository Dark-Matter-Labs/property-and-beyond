
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
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'typeOfRisk',
            type: 'array',
            title: 'Type of Risk',
            of: [
                {
                  type: 'reference',
                  to: [
                    {type: 'risk'},
                  ]
                }
              ]
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location',
        },
        {
            name: 'date',
            type: 'string',
            title: 'Date',
        },  
        {
            name: 'desctiption',
            type: 'array',
            title: 'Case Study Description',
            of: [{type: 'block'}]
        },
        {
            name: 'references',
            type: 'array',
            title: 'References',
            of: [{type: 'block'}]
        },
       
    ]
}