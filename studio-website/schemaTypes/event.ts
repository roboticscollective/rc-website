import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
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
      name: 'organizer',
      title: 'Event Organizer',
      type: 'reference',
      to: [{type: 'teamMember'}],
      description: 'Primary organizer of this event',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'speakers',
      title: 'Speakers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'teamMember'}],
        },
      ],
      description: 'Speakers or presenters at this event',
    }),
    defineField({
      name: 'maxAttendees',
      title: 'Maximum Attendees',
      type: 'number',
      description: 'Maximum number of attendees (optional)',
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
      organizer: 'organizer.name',
      media: 'featuredImage',
    },
    prepare({title, eventDate, organizer, media}) {
      const date = eventDate ? new Date(eventDate).toLocaleDateString() : 'No date'
      return {
        title,
        subtitle: `${date} - Organized by ${organizer}`,
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