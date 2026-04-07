/** @import { Schema } from 'sanity' */

/** @arg {{ schema: Schema, schemaType: string }} props */
export function typeHasSeo({ schema, schemaType }) {
  const resolvedSchema = schema.get(schemaType)
  if (!resolvedSchema || !('fields' in resolvedSchema))
    return false

  return resolvedSchema.fields.some(x => x.name === 'seo')
}
