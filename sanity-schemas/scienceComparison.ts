import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'scienceComparison',
  title: 'Science Comparison',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Red Light works when the science is applied correctly',
    }),
    defineField({
      name: 'brandsMissTitle',
      title: 'What Brands Miss - Title',
      type: 'string',
      initialValue: 'What most brands miss:',
    }),
    defineField({
      name: 'brandsMissPoints',
      title: 'What Brands Miss - Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'ourApproachTitle',
      title: 'Our Approach - Title',
      type: 'string',
      initialValue: 'Our Approach:',
    }),
    defineField({
      name: 'ourApproachPoints',
      title: 'Our Approach - Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'visualImage',
      title: 'Wavelength Visual Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bottomCopy',
      title: 'Bottom Copy',
      type: 'string',
      initialValue: 'Wavelength, distance, time, and frequency all change the biological effect',
    }),
  ],
})
