import { definePlugin } from 'sanity'
import { buildSchema } from './schema'

/** @typedef {{ resolvePublishedUrl: Resolve, resolvePreviewUrl: Resolve }} Options */

/**
 * @typedef {(props: {
 *     document: import('sanity').SanityDocument,
 *     schema: import('sanity').Schema,
 *     getClient: (options: import('sanity').SourceClientOptions) => import('sanity').SanityClient,
 *   }) => Promise<string | null>
 * } Resolve
 */

export { SeoAnalysis } from './components/SeoAnalysis'

export const SanityPluginSeo = definePlugin(
  /** @type {import('sanity').PluginFactory<Options>} */
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
