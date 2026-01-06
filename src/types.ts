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
  reportError(e: unknown): void,
  resolvePublishedUrl(props:  { document: SanityDocument, schema: Schema, getClient: getClient }): Promise<string>,
  resolvePreviewUrl(props:  { document: SanityDocument, schema: Schema, getClient: getClient }): Promise<string>,
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
