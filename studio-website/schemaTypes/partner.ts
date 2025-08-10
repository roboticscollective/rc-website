import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partner Organization',
  type: 'document',
  icon: () => '🤝',
  fields: [
    defineField({
      name: 'name',
      title: 'Organization Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'logoUrl',
      title: 'Logo URL (Migration)',
      type: 'object',
      fields: [
        defineField({
          name: 'url',
          title: 'Logo URL',
          type: 'url',
        }),
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
      description: 'Temporary field for logo migration - replace with actual logo upload',
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the partner organization',
    }),
    defineField({
      name: 'partnershipType',
      title: 'Partnership Type',
      type: 'string',
      options: {
        list: [
          {title: 'Academic Partner', value: 'academic'},
          {title: 'Industry Partner', value: 'industry'},
          {title: 'Research Institute', value: 'research'},
          {title: 'Sponsor', value: 'sponsor'},
          {title: 'Community Partner', value: 'community'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Active Partnership',
      type: 'boolean',
      initialValue: true,
      description: 'Is this partnership currently active?',
    }),
    defineField({
      name: 'partnershipStartDate',
      title: 'Partnership Start Date',
      type: 'date',
    }),
    defineField({
      name: 'contactPerson',
      title: 'Contact Person',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'email',
        }),
        defineField({
          name: 'role',
          title: 'Role/Title',
          type: 'string',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
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
      subtitle: 'partnershipType',
      media: 'logo',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle ? `${subtitle.charAt(0).toUpperCase()}${subtitle.slice(1)} Partner` : 'Partner',
        media,
      }
    },
  },
})