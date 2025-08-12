export const schema = {
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    {
      title: 'Focus keyphrase',
      name: 'keyphrase',
      type: 'string',
    },
    {
      title: 'Synonyms',
      name: 'synonyms',
      type: 'string',
    },
    {
      title: 'Mark as cornerstone content',
      name: 'cornerstone',
      type: 'boolean',
    },
    {
      title: 'SEO title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Meta description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.max(156).warning('Try to limit the meta description to 156 characters.')
    },
    {
      title: 'Social',
      name: 'social',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'text'
        },
        {
          title: 'Share image',
          name: 'shareImage',
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              title: 'Alternative description',
              name: 'alt',
              type: 'string'
            },
          ]
        }
      ]
    },
    {
      title: 'Advanced',
      name: 'advanced',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          title: 'Canonical url',
          name: 'canonicalUrl',
          type: 'string',
        },
        {
          title: 'Allow indexation (noindex | index)',
          name: 'allowIndex',
          type: 'boolean',
          initialValue: true
        },
        {
          title: 'Allow following links (nofollow | follow)',
          name: 'allowFollow',
          type: 'boolean',
          initialValue: true
        },
      ]
    }
  ]
}
