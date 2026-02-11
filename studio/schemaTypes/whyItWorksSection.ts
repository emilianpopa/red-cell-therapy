import { defineType } from 'sanity'

export default defineType({
  name: 'whyItWorksSection',
  title: 'Why It Works Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'e.g., "Why Red Light Actually Works"',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Description paragraph shown after the cards',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'e.g., "Go deeper into the science"',
    },
  ],
})
