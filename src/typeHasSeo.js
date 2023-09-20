export function typeHasSeo({ schema, schemaType }) {
  return schema.get(schemaType).fields.some(x => x.name === 'seo')
}
