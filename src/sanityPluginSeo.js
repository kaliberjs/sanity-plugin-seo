import { definePlugin } from 'sanity'
import { buildSchema } from './schema'

export { SeoAnalysis } from './components/SeoAnalysis'
export { typeHasSeo } from './typeHasSeo'

export const sanityPluginSeo = definePlugin(
  () => ({
    name: 'sanity-plugin-seo',
    schema: {
      types: (prev, context) => prev.concat(buildSchema())
    },
  })
)
