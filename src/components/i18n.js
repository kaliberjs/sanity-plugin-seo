import Jed from 'jed'

export const i18n = new Jed({
  domain: 'js-text-analysis',
  // eslint-disable-next-line camelcase
  locale_data: {
    'js-text-analysis': {
      '': {
        'domain': 'js-text-analysis',
        'lang': 'en',
        'plural_forms' : 'nplurals=2; plural=(n != 1);'
      },
    },
  },
})
