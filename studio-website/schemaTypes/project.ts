import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: () => '🚀',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      type: 'text',
      description: 'Brief project description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
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
      description: 'Rich text content for the project page',
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Featured Image URL (Migration)',
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
      name: 'galleryImages',
      title: 'Gallery Images',
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
    }),
    defineField({
      name: 'galleryImageUrls',
      title: 'Gallery Image URLs (Migration)',
      type: 'array',
      of: [
        {
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
        },
      ],
      description: 'Temporary field for gallery image migration - replace with actual image uploads',
    }),
    defineField({
      name: 'galleryVideos',
      title: 'Gallery Videos',
      type: 'array',
      of: [
        {
          type: 'file',
          options: {
            accept: 'video/*',
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'poster',
              type: 'image',
              title: 'Video Poster/Thumbnail',
              options: {hotspot: true},
              description: 'Thumbnail image shown before video plays',
            },
            {
              name: 'duration',
              type: 'number',
              title: 'Duration (seconds)',
              description: 'Video duration in seconds (optional)',
            },
          ],
        },
      ],
      description: 'Video files for the project gallery',
    }),
    defineField({
      name: 'galleryVideoUrls',
      title: 'Gallery Video URLs (Migration)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'url',
              title: 'Video URL',
              type: 'url',
              description: 'Direct video file URL or streaming URL',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
            defineField({
              name: 'posterUrl',
              title: 'Poster Image URL',
              type: 'url',
              description: 'Thumbnail image URL shown before video plays',
            }),
            defineField({
              name: 'duration',
              title: 'Duration (seconds)',
              type: 'number',
              description: 'Video duration in seconds (optional)',
            }),
            defineField({
              name: 'mimeType',
              title: 'MIME Type',
              type: 'string',
              options: {
                list: [
                  {title: 'MP4', value: 'video/mp4'},
                  {title: 'WebM', value: 'video/webm'},
                  {title: 'OGV', value: 'video/ogg'},
                ],
              },
              initialValue: 'video/mp4',
              description: 'Video format for browser compatibility',
            }),
          ],
        },
      ],
      description: 'Temporary field for video migration - replace with actual video uploads',
    }),
    defineField({
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          {title: 'Ongoing', value: 'ongoing'},
          {title: 'Finished', value: 'finished'},
          {title: 'Planned', value: 'planned'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
      description: 'Should this project be featured on the homepage?',
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
    defineField({
      name: 'pointOfContact',
      title: 'Point of Contact',
      type: 'reference',
      to: [{type: 'teamMember'}],
      description: 'Main person responsible for this project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contributors',
      title: 'Contributors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'teamMember'}],
        },
      ],
      description: 'Team members who contributed to this project',
    }),
    defineField({
      name: 'links',
      title: 'Project Links',
      type: 'object',
      fields: [
        defineField({
          name: 'github',
          title: 'GitHub URL',
          type: 'url',
        }),
        defineField({
          name: 'website',
          title: 'Website URL',
          type: 'url',
        }),
        defineField({
          name: 'documentation',
          title: 'Documentation URL',
          type: 'url',
        }),
      ],
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
      media: 'image',
    },
  },
})