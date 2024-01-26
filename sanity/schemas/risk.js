
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
            name: 'riskType',
            type: 'string',
            title: 'Risk Type',
            options: {
                list: [
                    {title: 'Climate', value: 'climate'},
                    {title: 'AI and Innovation', value: 'aiAndInnovation'},
                    {title: 'Labor', value: 'labor'},
                    {title: 'Housing and commercial real estate / civic infrastructure', value: 'housingAndCommercial'},
                    {title: 'Other', value: 'other'}
                ]
            }
        },
        {
            name: 'riskSubType',
            type: 'string',
            title: 'Risk Subtype',
            options: {
                list: [
                    {title: 'National Security Threat', value: 'nationalSecurityThreat'},
                    {title: 'Climate Change and Environmental Impact', value: 'climateChange'},
                    {title: 'Economic and Market Dynamics', value: 'economicDynamics'},
                    {title: 'Societal and Community Welfare', value: 'societalWelfare'},
                    {title: 'Governance and Regulatory Challenges', value: 'governanceChallenges'},
                    {title: 'Political Stability', value: 'politicalStability'},
                    // {title: '', value: ''},
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
            of: [{type: 'titleBlock'}]
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
            of: [{type: 'titleBlock'}]
        },
        {
            name: 'intermediateSolutions',
            type: 'array',
            title: 'Intermediate solutions',
            of: [{type: 'titleBlock'}]
        },
        {
            name: 'thirdHorizonSolutions',
            type: 'array',
            title: 'Third Horizon Solutions',
            of: [{type: 'titleBlock'}]
        },
        {
            name: 'adjacentPossibilities',
            type: 'array',
            title: 'Adjacent Possibilities',
            of: [{type: 'titleBlock'}]
        },


    ]
}