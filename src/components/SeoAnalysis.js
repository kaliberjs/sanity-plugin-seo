import React from 'react'
import { useSchema } from 'sanity'
import { Paper, SeoAssessor, ContentAssessor, interpreters, string, helpers } from 'yoastseo'
import CornerstoneSeoAssessor from 'yoastseo/src/cornerstone/seoAssessor'
import CornerstoneContentAssessor from 'yoastseo/src/cornerstone/contentAssessor'
import SerpPreview from 'react-serp-preview'
import { RatingError, RatingFeedback, RatingBad, RatingOk, RatingGood, RatingUnknown } from './Rating'
import styles from './SeoAnalysis.css'
import { i18n } from './i18n'


const ratingRenderers = {
  error: RatingError,
  feedback: RatingFeedback,
  bad: RatingBad,
  ok: RatingOk,
  good: RatingGood,
  default: RatingUnknown
}

export function SeoAnalysis({ document: { displayed: document }, schemaType, options }) {
  
  const { mainContentSelector = 'main' } = useSeoOptions({ schemaType })
  const { canonicalUrl, assessmentUrl } = useUrls({ document, options })

  return (canonicalUrl && assessmentUrl) 
    ? <SeoAnalysisImpl {...{ document, canonicalUrl, assessmentUrl, mainContentSelector, options }} /> 
    : null
}

function SeoAnalysisImpl({ document, mainContentSelector, canonicalUrl, assessmentUrl, options }) {
  const { seo, content, meta } = useSeo({ assessmentUrl, canonicalUrl, mainContentSelector, document, options })
  
  const hasContent = Boolean(document?._id)

  return (
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

function Summary({ seo, seoScore, contentScore }) {
  const seoRating = interpreters.scoreToRating(seoScore)
  const SeoRating = ratingRenderers[seoRating] ?? ratingRenderers.default
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

function Result({ score, html }) {
  const rating = interpreters.scoreToRating(score)
  const Rating = ratingRenderers[rating ?? 'default']
  return (
    <div className={styles.componentResult}>
      <div className={styles.rating}><Rating /></div>
      <div className={styles.label} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

function Heading({ children }) {
  return <h3 className={styles.componentHeading}>{children}</h3>
}

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
    [document, assessmentUrl, canonicalUrl, mainContentSelector]
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
  meta: null
}
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
    titleWidth: helpers.measureTextWidth(title),
    locale,
    permalink: url,
  })

  const [seoAssessor, contentAssessor] = cornerstone
    ? [new CornerstoneSeoAssessor(i18n), new CornerstoneContentAssessor(i18n)]
    : [new SeoAssessor(i18n), new ContentAssessor(i18n)]

  seoAssessor.assess(paper)
  contentAssessor.assess(paper)

  return {
    seo: getResultsAndScore(seoAssessor),
    content: getResultsAndScore(contentAssessor),
    meta: { url, description, title }
  }

  function getResultsAndScore(assessor) {
    return {
      results: assessor.getValidResults().sort(sortByScore).map(textAsHtml),
      score: assessor.calculateOverallScore()// / 10 - TODO: hier stond gedeeld door 10, maar volgens mij gaan er dan dingen stuk
    }

    function sortByScore(a, b) { return a.score - b.score }

    function textAsHtml({ text: html, ...rest }) {
      return { ...rest, html }
    }
  }
}

function useUrls({ document, options }) {
  const { resolvePublishedUrl, resolvePreviewUrl, getClient, reportError } = options
  const [urls, setUrls] = React.useState({ canonicalUrl: null, assessmentUrl: null })

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
    [document, schema, getClient, resolvePublishedUrl, resolvePreviewUrl]
  )

  return urls
}

function useSeoOptions({ schemaType }) {
  return React.useMemo(
    () => schemaType.fields.find(x => x.name === 'seo').type.options,
    [schemaType]
  )
}

async function getHtml(url) {
  const response = await fetch(url)
  return response.text()
}
