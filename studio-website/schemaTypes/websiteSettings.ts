import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'websiteSettings',
  title: 'Website Settings',
  type: 'document',
  __experimental_singleton: true, // Only one instance allowed
  icon: () => '⚙️',
  fields: [
    defineField({
      name: 'eventControls',
      title: 'Event Controls',
      type: 'object',
      fields: [
        defineField({
          name: 'showEventBanner',
          title: 'Show Event Banner',
          type: 'boolean',
          initialValue: true,
          description: 'Controls the event notification banner at the top of the website',
        }),
        defineField({
          name: 'showEventNotificationBadge',
          title: 'Show Event Notification Badge',
          type: 'boolean',
          initialValue: true,
          description: 'Controls the event notification badge in the navbar',
        }),
        defineField({
          name: 'bannerShowDaysThreshold',
          title: 'Banner Show Days Threshold',
          type: 'number',
          initialValue: 30,
          description: 'How many days before the event should the banner appear',
          validation: (Rule) => Rule.min(1).max(365),
        }),
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),
    defineField({
      name: 'recruitingControls',
      title: 'Recruiting Controls',
      type: 'object',
      fields: [
        defineField({
          name: 'showRecruitingToast',
          title: 'Show Recruiting Toast',
          type: 'boolean',
          initialValue: true,
          description: 'Controls the recruiting toast notification',
        }),
        defineField({
          name: 'recruitingToastDelay',
          title: 'Recruiting Toast Delay (milliseconds)',
          type: 'number',
          initialValue: 3000,
          description: 'How long to wait before showing the recruiting toast',
          validation: (Rule) => Rule.min(0).max(10000),
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'globalAnnouncement',
      title: 'Global Announcement',
      type: 'object',
      fields: [
        defineField({
          name: 'isActive',
          title: 'Show Announcement',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'message',
          title: 'Announcement Message',
          type: 'string',
          hidden: ({parent}) => !parent?.isActive,
        }),
        defineField({
          name: 'link',
          title: 'Announcement Link (Optional)',
          type: 'url',
          hidden: ({parent}) => !parent?.isActive,
        }),
        defineField({
          name: 'type',
          title: 'Announcement Type',
          type: 'string',
          options: {
            list: [
              {title: 'Info', value: 'info'},
              {title: 'Warning', value: 'warning'},
              {title: 'Success', value: 'success'},
              {title: 'Error', value: 'error'},
            ],
          },
          initialValue: 'info',
          hidden: ({parent}) => !parent?.isActive,
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({
          name: 'github',
          title: 'GitHub URL',
          type: 'url',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter/X URL',
          type: 'url',
        }),
        defineField({
          name: 'discord',
          title: 'Discord Invite URL',
          type: 'url',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube Channel URL',
          type: 'url',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'Primary Email',
          type: 'email',
        }),
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        }),
        defineField({
          name: 'address',
          title: 'Physical Address',
          type: 'text',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Website Settings',
        subtitle: 'Global website configuration',
      }
    },
  },
})