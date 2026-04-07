import { SanityDocument, Schema, SanityClient } from 'sanity'

type getClient = SanityClient['withConfig']

export type Options = {
  multiLanguage: {
    languages: {
      [language: string]: {
        icu: string,
        title: string,
      }
    },
    defaultLanguage: string,
  },
  reportError(e: Error): void,
  resolvePublishedUrl(props:  { document: SanityDocument, schema: Schema, getClient: getClient }): Promise<null | string>,
  resolvePreviewUrl(props:  { document: SanityDocument, schema: Schema, getClient: getClient }): Promise<null | string>,
  getClient: getClient,
}

export type SeoDocumentSchemaType = {
  fields: {
    name: string,
    type: {
      options?: {
        mainContentSelector?: string
      }
    }
  }[]
}
