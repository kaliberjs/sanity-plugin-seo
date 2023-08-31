import { definePlugin } from 'sanity'
import { buildSchema } from './schema'

export { SeoAnalysis } from './components/SeoAnalysis'

export const seo = definePlugin(({ resolvePublishedUrl, resolvePreviewUrl }) => ({
  name: 'sanity-plugin-seo',
  schema: {
    types: (prev, context) => prev.concat(buildSchema({ resolvePublishedUrl, resolvePreviewUrl }))
  },
}))

export function typeHasSeo({ schema, schemaType }) {
  return schema.get(schemaType).fields.some(x => x.name === 'seo')
}
