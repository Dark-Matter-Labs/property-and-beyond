
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
            validation: Rule => Rule.required()
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            options: {
                //Change to schema title to automatically populate
                source: "title",
                slugify: (input) =>
                  input
                    .toLowerCase()
                    //Remove spaces
                    .replace(/\s+/g, "-")
                    //Remove special characters
                    .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
                validation: (Rule) => Rule.required(),
              },
          },
        {
            name: 'riskType',
            type: 'string',
            title: 'Risk Type',
            validation: Rule => Rule.required(),
            options: {
                list: [
                    {title: 'Climate', value: 'Climate'},
                    {title: 'AI and Innovation', value: 'AI and Innovation'},
                    {title: 'Labor and Economic Security', value: 'Labor and Economic Security'},
                    {title: 'Housing and Commercial Real Estate / Civic Infrastructure', value: 'Housing and Commercial Real Estate / Civic Infrastructure'},
                    {title: 'Conflict and Displacement', value: 'Conflict and Displacement'}
                ]
            }
        },
        {
            name: 'riskSubType',
            type: 'string',
            title: 'Risk Subtype',
            validation: Rule => Rule.required(),
            options: {
                list: [
                    {title: 'National Security Threat', value: 'National Security Threat'},
                    {title: 'Climate Change and Environmental Impact', value: 'Climate Change and Environmental Impact'},
                    {title: 'Economic and Market Dynamics', value: 'Economic and Market Dynamics'},
                    {title: 'Societal and Community Welfare', value: 'Societal and Community Welfare'},
                    {title: 'Governance and Regulatory Challenges', value: 'Governance and Regulatory Challenges'},
                    {title: 'Political Stability', value: 'Political Stability'},
                    {title: 'Water Resource Challenges', value: 'Water Resource Challenges'},
                    {title: 'Energy and Resource Scarcity', value: 'Energy and Resource Scarcity'},
                    {title: 'Socio-Economic Impacts and Humanitarian Crises', value: 'Socio-Economic Impacts and Humanitarian Crises'},
                    {title: 'Industrial and Technological Risks', value: 'Industrial and Technological Risks'},
                ]
            }
        },
        {
            name: 'description',
            type: 'text',
            title: 'Risk description',
            validation: Rule => Rule.required().max(315),
        },
        {
            name: 'caseStudies',
            type: 'array',
            title: 'Case Studies',
            validation: Rule => Rule.required(),
            of: [
                {
                  type: 'reference',
                  to: [
                    {type: 'caseStudy'},
                  ]
                }
              ]
        },
        {
            name: 'stakeholders',
            type: 'array',
            title: 'Stakeholders',
            validation: Rule => Rule.required(),
            of: [{type: 'titleBlock'}]
        },
        {
            name: 'propertyIssues',
            type: 'array',
            title: 'Property Issues',
            validation: Rule => Rule.required(),
            of: [{type: 'propertyIssue'}]
        },
        {
            name: 'directImpacts',
            type: 'array',
            title: 'Direct impacts',
            validation: Rule => Rule.required(),
            of: [{type: 'titleBlock'}]
        },
        {
            name: 'indirectImpacts',
            type: 'array',
            title: 'Indirect impacts',
            validation: Rule => Rule.required(),
            of: [{type: 'titleBlock'}]
        },
        {
            name: 'preparedness',
            type: 'array',
            title: 'Preparedness',
            validation: Rule => Rule.required(),
            of: [{type: 'block'}]
        },
        {
            name: 'solutions',
            type: 'array',
            title: 'Solutions',
            of: [
                {
                  type: 'reference',
                  to: [
                    {type: 'solution'},
                  ]
                }
              ]
        },

    ]
}