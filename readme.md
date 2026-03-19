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

## Configuration

### Custom Share Image Field

By default, the plugin uses the standard Sanity `image` type with an alt text field for the share image. You can customize this to use a custom image type (e.g., `klbrImage`) or modify the field schema:

```js
sanityPluginSeo({
  shareImageField: {
    title: 'Share image',
    name: 'shareImage',
    type: 'klbrImage', // Use your custom image type
    // No alt field needed for klbrImage
  }
})
```

You can also extend the default field definition to customize specific properties:

```js
import { sanityPluginSeo, defaultShareImageField } from '@kaliber/sanity-plugin-seo'

sanityPluginSeo({
  shareImageField: {
    ...defaultShareImageField,
    fields: [] // Remove the alt text field while keeping other defaults
  }
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
