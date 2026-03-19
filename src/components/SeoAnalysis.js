import React from 'react'
import { useSchema } from 'sanity'
import { Paper, SeoAssessor, ContentAssessor, interpreters, string, helpers } from 'yoastseo'
import CornerstoneSeoAssessor from 'yoastseo/src/cornerstone/seoAssessor'
import CornerstoneContentAssessor from 'yoastseo/src/cornerstone/contentAssessor'
import { SerpPreview } from './serp-preview/SerpPreview'
import { RatingError, RatingFeedback, RatingBad, RatingOk, RatingGood, RatingUnknown } from './Rating'
import styles from './SeoAnalysis.css'
import { i18n } from './i18n'
/** @import { SanityDocument } from 'sanity' */
/** @import { Options, SeoDocumentSchemaType } from '../types.ts' */
/** @import { ReactNode } from 'react' */

/**
 * @typedef {(
 *   SanityDocument &
 *   { language?: string } &
 *   {
 *     seo?: {
 *       keyphrase?: string,
 *       synonyms?: string,
 *     },
 *   }
 * )} MultiLanguageSeoSanityDocument
 */

/** @type {Record<string, () => JSX.Element> & { default: () => JSX.Element }} */
const ratingRenderers = {
  error: RatingError,
  feedback: RatingFeedback,
  bad: RatingBad,
  ok: RatingOk,
  good: RatingGood,
  default: RatingUnknown
}

/**
 * @arg {{
 *   document: { displayed: MultiLanguageSeoSanityDocument },
 *   schemaType: SeoDocumentSchemaType,
 *   options: Options,
 * }} props
 */
export function SeoAnalysis({ document: { displayed: document }, schemaType, options }) {

  const { mainContentSelector = 'main' } = useSeoOptions({ schemaType }) || {}
  const { canonicalUrl, assessmentUrl } = useUrls({ document, options })

  return (canonicalUrl && assessmentUrl)
    ? <SeoAnalysisImpl {...{ document, canonicalUrl, assessmentUrl, mainContentSelector, options }} />
    : null
}

/**
 * @arg {{
 *   document: MultiLanguageSeoSanityDocument,
 *   mainContentSelector: string,
 *   canonicalUrl: string,
 *   assessmentUrl: string,
 *   options: Options,
 * }} props
 */
function SeoAnalysisImpl({ document, mainContentSelector, canonicalUrl, assessmentUrl, options }) {
  const { seo, content, meta } = useSeo({ assessmentUrl, canonicalUrl, mainContentSelector, document, options })

  const hasContent = Boolean(document?._id)

  return (
    // eslint-disable-next-line @kaliber/naming-policy
    <div className={styles.component}>
      <Summary seo={document?.seo} seoScore={seo.score} contentScore={content.score} />

      <Heading>Preview</Heading>

      {meta && (
        <div className={styles.serp}>
          <SerpPreview
            title={meta.title}
            metaDescription={meta.description}
            url={meta.url}
          />
        </div>
      )}

      {hasContent
        ? (
          <>
            <Results title="SEO analyse" results={seo.results} />
            <Results title="Content analyse" results={content.results} />
          </>
        )
        : <p>Er is nog geen content om te analyseren!</p>
      }
    </div>
  )
}

/**
 * @arg {{
 *   seo?: MultiLanguageSeoSanityDocument['seo'],
 *   seoScore: number,
 *   contentScore: number,
 * }} param0
 */
function Summary({ seo, seoScore, contentScore }) {
  // @ts-ignore
  const seoRating = interpreters.scoreToRating(seoScore)
  const SeoRating = ratingRenderers[seoRating] ?? ratingRenderers.default
  // @ts-ignore
  const contentRating = interpreters.scoreToRating(contentScore)
  const ContentRating = ratingRenderers[contentRating] ?? ratingRenderers.default

  return (
    <div className={styles.componentSummary}>
      <dl className={styles.summaryList}>
        <dt>Keyphrase</dt>
        <dd>{seo?.keyphrase ?? '-'}</dd>
        <dt>Synonyms</dt>
        <dd>{seo?.synonyms ?? '-'}</dd>
        <dt>SEO score</dt>
        <dd><SeoRating /></dd>
        <dt>Content score</dt>
        <dd><ContentRating /></dd>
      </dl>
    </div>
  )
}

/** @arg {{ title: string, results: { score: number, html: string }[] }} props  */
function Results({ title, results }) {
  return (
    <div className={styles.componentResults}>
      <Heading>{title}</Heading>

      <ul className={styles.resultsList}>
        {results && results.map(({ score, html }, i) => (
          <li key={[i, html].join('__')}>
            <Result {...{ score, html }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

/** @arg {{ score: number, html: string }} props  */
function Result({ score, html }) {
  // @ts-ignore
  const rating = interpreters.scoreToRating(score)
  const Rating = ratingRenderers[rating ?? 'default']
  return (
    <div className={styles.componentResult}>
      <div className={styles.rating}><Rating /></div>
      <div className={styles.label} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

/** @arg {{ children: ReactNode }} props */
function Heading({ children }) {
  return <h3 className={styles.componentHeading}>{children}</h3>
}

/**
 * @arg {{
 *   assessmentUrl: string,
 *   canonicalUrl: string,
 *   mainContentSelector: string,
 *   document: MultiLanguageSeoSanityDocument,
 *   options: Options,
 * }} props
 */
function useSeo({ assessmentUrl, canonicalUrl, mainContentSelector, document, options }) {
  const { multiLanguage, reportError } = options
  const [seoResult, setSeoResult] = React.useState(assess.defaultResult)

  React.useEffect(
    () => {
      if (!document?._id) return

      let valid = true
      const timeoutId = setTimeout(
        () => run().catch(reportError),
        500
      )

      async function run() {
        if (!valid) return
        const html = await getHtml(assessmentUrl)

        if (!valid) return

        const { seo, language = multiLanguage.defaultLanguage } = document
        const { icu } = multiLanguage.languages[language]
        const seoResult = assess({
          html,
          mainContentSelector,
          url: canonicalUrl,
          seo: seo ?? {},
          locale: icu
        })

        setSeoResult(seoResult)
      }

      return () => {
        valid = false
        clearTimeout(timeoutId)
      }
    },
    [document, assessmentUrl, canonicalUrl, mainContentSelector, multiLanguage, reportError]
  )

  return seoResult
}

assess.defaultResult = {
  seo: {
    score: 0,
    results: []
  },
  content: {
    score: 0,
    results: []
  },
  meta: /** @type {null | { url: string, description: string, title: string }} */ (null)
}
/**
 * @arg {{
 *   html: string,
 *   url: string,
 *   locale: string,
 *   mainContentSelector: string,
 *   seo: {
 *     keyphrase?: string,
 *     synonyms?: string,
 *     cornerstone?: boolean,
 *   }
 * }} props
 */
function assess({ html, url, locale, mainContentSelector, seo: { keyphrase = '', synonyms = '', cornerstone = false } }) {
  const doc = new DOMParser().parseFromString(string.removeHtmlBlocks(html), 'text/html')

  const { title } = doc
  const description = doc.querySelector('meta[name=description]')?.getAttribute('content') ?? doc.body.innerText
  const relevantHtml = (doc.querySelector(mainContentSelector) || doc.documentElement).outerHTML

  const paper = new Paper(relevantHtml, {
    keyword: keyphrase,
    synonyms,
    description,
    url,
    title,
    // @ts-ignore
    titleWidth: helpers.measureTextWidth(title),
    locale,
    permalink: url,
  })

  const [seoAssessor, contentAssessor] = cornerstone
    // @ts-ignore
    ? [new CornerstoneSeoAssessor(i18n), new CornerstoneContentAssessor(i18n)]
    // @ts-ignore
    : [new SeoAssessor(i18n), new ContentAssessor(i18n)]

  // @ts-ignore
  seoAssessor.assess(paper)
  // @ts-ignore
  contentAssessor.assess(paper)

  return {
    seo: getResultsAndScore(seoAssessor),
    content: getResultsAndScore(contentAssessor),
    meta: { url, description, title }
  }

  /** @arg {*} assessor */
  function getResultsAndScore(assessor) {
    return {
      results: assessor.getValidResults().sort(sortByScore).map(textAsHtml),
      score: assessor.calculateOverallScore()// / 10 - TODO: hier stond gedeeld door 10, maar volgens mij gaan er dan dingen stuk
    }

    /**
     * @arg {{ score: number }} a
     * @arg {{ score: number }} b
     */
    function sortByScore(a, b) { return a.score - b.score }

    /** @arg {Record<string, any> & { text: string }} props */
    function textAsHtml({ text: html, ...rest }) {
      return { ...rest, html }
    }
  }
}

/** @arg {{ document: MultiLanguageSeoSanityDocument, options: Options }} props */
function useUrls({ document, options }) {
  const { resolvePublishedUrl, resolvePreviewUrl, getClient, reportError } = options
  const [urls, setUrls] = React.useState({
    canonicalUrl: /** @type {null | string} */ (null),
    assessmentUrl: /** @type {null | string} */ (null)
  })

  const schema = useSchema()

  React.useEffect(
    () => {
      if (!document) return

      let valid = true

      Promise
        .all([
          resolvePublishedUrl({ document, schema, getClient }),
          resolvePreviewUrl({ document, schema, getClient })
        ])
        .then(([canonicalUrl, assessmentUrl]) => {
          if (!valid) return
          setUrls({ canonicalUrl, assessmentUrl })
        })
        .catch(reportError)

      return () => {
        valid = false
      }
    },
    [document, schema, getClient, resolvePublishedUrl, resolvePreviewUrl, reportError]
  )

  return urls
}

/**
 * @arg {{
 *   schemaType: SeoDocumentSchemaType
 * }} props
 */
function useSeoOptions({ schemaType }) {
  return React.useMemo(
    () => schemaType.fields.find(x => x.name === 'seo')?.type.options,
    [schemaType]
  )
}

/** @arg {string} url */
async function getHtml(url) {
  const response = await fetch(url)
  return response.text()
}
