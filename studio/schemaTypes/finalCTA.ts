import { defineType } from 'sanity'

export default defineType({
  name: 'finalCTA',
  title: 'Final CTA Section',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Small label above the heading (e.g., "Red Light Therapy")',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading (e.g., "What to expect from your session?")',
    },
    {
      name: 'description',
      title: 'Description Paragraphs',
      type: 'array',
      of: [
        {
          type: 'text',
          rows: 3,
        },
      ],
      description: 'Multiple paragraphs describing the experience',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'e.g., "SECURE YOUR EXPERIENCE"',
    },
    {
      name: 'ctaUrl',
      title: 'CTA URL',
      type: 'url',
      description: 'WhatsApp link or booking URL',
    },
  ],
})
