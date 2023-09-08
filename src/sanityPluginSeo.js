import { definePlugin } from 'sanity'
import { buildSchema } from './schema'

export { SeoAnalysis } from './components/SeoAnalysis'

export const sanityPluginSeo = definePlugin(
  () => ({
    name: 'sanity-plugin-seo',
    schema: {
      types: (prev, context) => prev.concat(buildSchema())
    },
  })
)

export function typeHasSeo({ schema, schemaType }) {
  return schema.get(schemaType).fields.some(x => x.name === 'seo')
}
