import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'trustIcon',
  title: 'Trust Icons',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(4),
    }),
    defineField({
      name: 'iconType',
      title: 'Icon Type',
      type: 'string',
      options: {
        list: [
          { title: 'Checkmark', value: 'checkmark' },
          { title: 'Document', value: 'document' },
          { title: 'Lightning', value: 'lightning' },
          { title: 'People', value: 'people' },
        ],
      },
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
