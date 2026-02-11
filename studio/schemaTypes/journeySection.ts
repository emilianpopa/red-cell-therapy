import { defineType } from 'sanity'

export default defineType({
  name: 'journeySection',
  title: 'Journey Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'e.g., "Our Journey"',
    },
    {
      name: 'partnerName',
      title: 'Partner Name',
      type: 'string',
      description: 'e.g., "Powered by Expand Health - Africa\'s Leading Longevity Clinic"',
    },
    {
      name: 'partnerLogo',
      title: 'Partner Logo',
      type: 'image',
      description: 'Partner company logo image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Main description text for this section',
    },
    {
      name: 'image',
      title: 'Section Image',
      type: 'image',
      description: 'Main image for this section (e.g., building photo)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageCaption',
      title: 'Image Caption',
      type: 'string',
      description: 'Caption for the section image',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'e.g., "Our Advisory Board"',
    },
  ],
})
