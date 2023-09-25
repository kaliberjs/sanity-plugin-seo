# Kaliber Sanity SEO Plugin

Yoast SEO Analysis.

## Installation

```
> yarn add @kaliber/sanity-plugin-seo
```

`admin/sanity.json`

```json
{
  "plugins": [
    "@kaliber/sanity-plugin-seo",
    ...
  ],
  ...
}
```

## Usage

`admin/deskStructure.js`

```js
import multiLanguageConfig from 'config:@kaliber/sanity-plugin-multi-language'
import { SeoAnalysis, typeHasSeo } from '@kaliber/sanity-plugin-seo'

export function getDefaultDocumentNode({ schemaType }) {
  return S.document().views([
    S.view.form(),
    ...(typeHasSeo(schemaType) ? [S.view.component(SeoAnalysis).options({ multiLanguage: multiLanguageConfig }).title('SEO')] : []),
  ])
}
```

`schema/documents/pagina.js`

```js
import { withSeo } from '@kaliber/sanity-plugin-seo'

export const pagina = withSeo()({
  type: 'document',
  name: 'pagina',
  title: 'Pagina',
  fields: [
    ...
  ],
})
```

## Development

```
> yarn
> yarn link
> yarn watch
```

```
admin/> yarn link @kaliber/sanity-plugin-seo
```

## Publish

```
yarn publish
git push
git push --tags
```
