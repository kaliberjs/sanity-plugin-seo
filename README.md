# Kaliber Sanity SEO Plugin

Yoast SEO Analysis.

## Installation

```
> yarn add @kaliber/sanity-plugin-seo
```

`sanity.config.js`

```js
import { sanityPluginSeo, SeoAnalysis, typeHasSeo } from '@kaliber/sanity-plugin-seo'

defineConfig({
  ...

  plugins: [
    deskTool({
      defaultDocumentNode: (S, context) => {
        const getClient = context.getClient.bind(context)

        const views = [
          S.view.form(),
          typeHasSeo(context) && S.view
            .component(SeoAnalysis)
            .options({ multiLanguage, resolvePublishedUrl, resolvePreviewUrl, getClient, reportError })
            .title('SEO'),
        ].filter(Boolean)

        return S.document().views(views)
      },
      ...
    }),
    sanityPluginSeo(),
    ...
  ]
})
```


## Usage

`schema/documents/pagina.js`

```js
export const pagina = {
  type: 'document',
  name: 'pagina',
  title: 'Pagina',
  fields: [
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo'
    },
    ...
  ],
}
```

## Development

```
> yarn
> yarn link
```

```
project/> yarn link @kaliber/sanity-plugin-seo
```

## Publish

```
yarn publish
git push
git push --tags
```
