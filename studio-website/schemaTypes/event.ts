import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: () => '📅',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
      description: 'Rich text description of the event',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
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
      name: 'eventDate',
      title: 'Event Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date & Time',
      type: 'datetime',
      description: 'Optional end date for multi-day events',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        defineField({
          name: 'venue',
          title: 'Venue Name',
          type: 'string',
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
        }),
        defineField({
          name: 'isOnline',
          title: 'Online Event',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'onlineLink',
          title: 'Online Meeting Link',
          type: 'url',
          hidden: ({parent}) => !parent?.isOnline,
        }),
      ],
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Workshop', value: 'workshop'},
          {title: 'Meetup', value: 'meetup'},
          {title: 'Conference', value: 'conference'},
          {title: 'Hackathon', value: 'hackathon'},
          {title: 'Social Event', value: 'social'},
          {title: 'Training', value: 'training'},
          {title: 'Demo Day', value: 'demo'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Event Status',
      type: 'string',
      options: {
        list: [
          {title: 'Upcoming', value: 'upcoming'},
          {title: 'Ongoing', value: 'ongoing'},
          {title: 'Past', value: 'past'},
          {title: 'Cancelled', value: 'cancelled'},
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'upcoming',
    }),
    defineField({
      name: 'registrationInfo',
      title: 'Registration Information',
      type: 'object',
      fields: [
        defineField({
          name: 'isRequired',
          title: 'Registration Required',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'registrationLink',
          title: 'Registration Link',
          type: 'url',
          hidden: ({parent}) => !parent?.isRequired,
        }),
        defineField({
          name: 'registrationDeadline',
          title: 'Registration Deadline',
          type: 'datetime',
          hidden: ({parent}) => !parent?.isRequired,
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Event Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
      description: 'Photos from the event (usually added after the event)',
    }),
    defineField({
      name: 'highlights',
      title: 'Event Highlights',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
          ],
          lists: [],
          marks: {
            decorators: [
              {title: 'Accent', value: 'accent'},
            ],
            annotations: [],
          },
        },
      ],
      description: 'Key highlights as sentences with accent-colored parts. Use the "Accent" decorator to highlight important words.',
    }),
    defineField({
      name: 'eventPartners',
      title: 'Event Partners',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'partner'}],
        },
      ],
      description: 'Select specific partners for this event (if none selected, will show all active partners)',
    }),
    defineField({
      name: 'customRegistrationText',
      title: 'Registration Button Text',
      type: 'string',
      initialValue: 'Register Now',
      description: 'Custom text for the registration button',
    }),
    defineField({
      name: 'showInBanner',
      title: 'Show in Website Banner',
      type: 'boolean',
      initialValue: true,
      description: 'Should this event appear in the website banner and navigation notifications?',
    }),
    defineField({
      name: 'bannerPriority',
      title: 'Banner Priority',
      type: 'number',
      initialValue: 1,
      description: 'Higher numbers appear first in banner (if multiple events are eligible)',
      validation: (Rule) => Rule.min(1).max(10),
      hidden: ({parent}) => !parent?.showInBanner,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      eventDate: 'eventDate',
      media: 'featuredImage',
    },
    prepare({title, eventDate, media}) {
      const date = eventDate ? new Date(eventDate).toLocaleDateString() : 'No date'
      return {
        title,
        subtitle: date,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Event Date, Newest',
      name: 'eventDate',
      by: [{field: 'eventDate', direction: 'desc'}],
    },
    {
      title: 'Event Date, Oldest',
      name: 'eventDateAsc',
      by: [{field: 'eventDate', direction: 'asc'}],
    },
  ],
})