import { definePlugin } from 'sanity'
import { schema, defaultShareImageField } from './schema'

export { SeoAnalysis } from './components/SeoAnalysis'
export { typeHasSeo } from './typeHasSeo'
export { defaultShareImageField }

/**
 * @typedef {Object} SanityPluginSeoOptions
 * @property {Object} [shareImageField] - Custom share image field definition. Override this to use a custom image type like 'klbrImage'.
 * @property {string} [shareImageField.title] - Field title
 * @property {string} [shareImageField.name] - Field name
 * @property {string} [shareImageField.type] - Image type (e.g., 'image', 'klbrImage')
 * @property {Object} [shareImageField.options] - Field options (e.g., { hotspot: true })
 * @property {Array<Object>} [shareImageField.fields] - Nested fields (e.g., alt text field). Set to [] for no fields.
 */

/**
 * Sanity plugin for SEO management
 * @param {SanityPluginSeoOptions} [options] - Plugin configuration options
 * @returns {import('sanity').PluginOptions}
 */
export const sanityPluginSeo = definePlugin(
  (options = {}) => ({
    name: 'sanity-plugin-seo',
    schema: {
      types: (prev) => prev.concat(schema(options))
    },
  })
)
