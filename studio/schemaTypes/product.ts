import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'One Product - Done Properly',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      initialValue: 'We chose to focus on one product - because quality comes from focus not variety',
    }),
    defineField({
      name: 'manualStandImage',
      title: 'Manual Stand Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'motorizedStandImage',
      title: 'Motorized Stand Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'specsDocumentUrl',
      title: 'Full Specs Document URL',
      type: 'url',
    }),
  ],
})
