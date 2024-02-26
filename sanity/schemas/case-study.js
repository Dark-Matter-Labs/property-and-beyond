
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
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Image Alt text',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'source',
            type: 'text',
            title: 'Image Source',
            validation: (Rule) => Rule.required(),
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
            validation: (Rule) => Rule.required()
        },

        {
            name: 'date',
            type: 'string',
            title: 'Date',
            validation: (Rule) => Rule.required()
        },  
        {
            name: 'desctiption',
            type: 'array',
            title: 'Case Study Description',
            of: [{type: 'block'}],
            validation: (Rule) => Rule.required()
        },
        {
            name: 'references',
            type: 'array',
            title: 'References',
            of: [{type: 'block'}]
        },
       
    ]
}