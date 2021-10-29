import schema from 'part:@sanity/base/schema'
import { seo } from './schema/objects/seo'

export { SeoAnalysis } from './components/SeoAnalysis'

export function withSeo() {
  return schema => ({
     ...schema,
     fields: schema.fields.concat({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      options: {
        collapsible: true,
        collapsed: true,
      },
    })
  })
}

export function typeHasSeo(type) {
  return schema.get(type).fields.some(x => x.name === 'seo')
}

export const objects = [seo]
