import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'coverImage',
  title: 'Cover Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
    }),
  ],
})
