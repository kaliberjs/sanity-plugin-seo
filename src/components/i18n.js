import Jed from 'jed' // Jed is used by Yoast SEO for internationalization
import { nlJed } from './jedLanguages/nl'
import { enJed } from './jedLanguages/en'

export function i18n(language) {
  return new Jed({
    domain: 'js-text-analysis',
    debug: true,
    locale_data: {
      'js-text-analysis': (
        language === 'nl' ? nlJed :
        language === 'en' ? enJed :
        enJed
      )
    },
  })
}
