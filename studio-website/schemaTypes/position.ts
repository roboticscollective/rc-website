import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'position',
  title: 'Position',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Position Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the position',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{type: 'text'}],
      description: 'List of key responsibilities for this position',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'currentHolder',
      title: 'Current Position Holder',
      type: 'reference',
      to: [{type: 'teamMember'}],
      description: 'Team member currently holding this position (optional)',
    }),
    defineField({
      name: 'isOpen',
      title: 'Position Open',
      type: 'boolean',
      initialValue: true,
      description: 'Is this position currently open for applications?',
    }),
    defineField({
      name: 'timeCommitment',
      title: 'Time Commitment',
      type: 'string',
      description: 'Expected time commitment (e.g., "5-10 hours/week")',
    }),
    defineField({
      name: 'legacyId',
      title: 'Legacy ID',
      type: 'string',
      description: 'Original ID from static data (for migration purposes)',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      currentHolder: 'currentHolder.name',
    },
    prepare({title, subtitle, currentHolder}) {
      return {
        title,
        subtitle: currentHolder ? `${subtitle} (Held by: ${currentHolder})` : subtitle,
      }
    },
  },
})