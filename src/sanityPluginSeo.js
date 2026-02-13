import { definePlugin } from 'sanity'
import { schema, defaultShareImageField } from './schema'

export { SeoAnalysis } from './components/SeoAnalysis'
export { typeHasSeo } from './typeHasSeo'
export { defaultShareImageField }

/** @import { FieldDefinition } from 'sanity' */

export const sanityPluginSeo = definePlugin(
  /** @arg {{ shareImageField?: FieldDefinition }} [options] */
  (options = {}) => ({
    name: 'sanity-plugin-seo',
    schema: {
      types: (prev) => prev.concat(schema(options))
    },
  })
)
