import {defineField , defineType} from 'sanity'

export default defineType({
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
           
          }),
defineField({
    name: 'image',
    title: 'image',
    type: 'image',
    options: {
      hotspot: true,
    },
  })
]
})
