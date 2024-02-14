
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
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              inUnique: 'true',
              slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
          },
          {
            name: 'icon',
            type: 'image',
            title: 'Risk Icon',
          },
          {
            name: 'alt',
            type: 'string',
            title: 'Icon Alt Text'
        },
        {
            name: 'riskType',
            type: 'string',
            title: 'Risk Type',
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
            title: 'Risk description'
        },
        {
            name: 'caseStudies',
            type: 'array',
            title: 'Case Studies',
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
            of: [{type: 'titleBlock'}]
        },
        {
            name: 'propertyIssues',
            type: 'array',
            title: 'Property Issues',
            of: [{type: 'propertyIssue'}]
        },
        {
            name: 'directImpacts',
            type: 'array',
            title: 'Direct impacts',
            of: [{type: 'titleBlock'}]
        },
        {
            name: 'indirectImpacts',
            type: 'array',
            title: 'Indirect impacts',
            of: [{type: 'titleBlock'}]
        },
        {
            name: 'preparedness',
            type: 'array',
            title: 'Preparedness',
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