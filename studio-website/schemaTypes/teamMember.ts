import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description or title (e.g., "Co-Founder / Internal Operations")',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'Longer biographical information',
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL (Migration)',
      type: 'object',
      fields: [
        defineField({
          name: 'url',
          title: 'Image URL',
          type: 'url',
        }),
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
      description: 'Temporary field for image migration - replace with actual image upload',
    }),
    defineField({
      name: 'isBoard',
      title: 'Board Member',
      type: 'boolean',
      initialValue: false,
      description: 'Is this person a board member?',
    }),
    defineField({
      name: 'memberType',
      title: 'Member Type',
      type: 'string',
      options: {
        list: [
          {title: 'Core Team', value: 'core'},
          {title: 'Community Member', value: 'community'},
        ],
      },
      initialValue: 'core',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Expertise Tags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Skills, expertise areas, etc. (e.g., "AI", "Machine Learning", "Web Development")',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'Email',
          type: 'email',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        }),
        defineField({
          name: 'github',
          title: 'GitHub URL',
          type: 'url',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'legacyId',
      title: 'Legacy ID',
      type: 'number',
      description: 'Original ID from static data (for migration purposes)',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})