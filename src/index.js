import {definePlugin} from 'sanity'
import { seo as schema } from './schema/objects/seo'

export {seoView} from './components/SeoAnalysis'

export const seo = definePlugin((config = {}) => ({
  name: 'sanity-plugin-seo',
  schema: {
    types: [schema]
  },
}))

export function typeHasSeo(type) {
  return schema.get(type).fields.some(x => x.name === 'seo')
}

export const objects = [schema]
