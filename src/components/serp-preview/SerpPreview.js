import { Truncate } from './Truncate'

const styles = /** @type const */ ({
  root: {
    fontFamily: 'arial,sans-serif',
  },
  title: {
    color: '#1a0dab',
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 1.2,

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  url: {
    height: 18,
    color: '#006621',
    fontSize: 14,
    lineHeight: '16px',

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  description: {
    color: '#545454',
    fontSize: 13,
    lineHeight: 1.4,

    wordWrap: 'break-word',
  },
})

/**
 * @arg {{
 *   title: string,
 *   metaDescription: string,
 *   url: string,
 * }} props
 */
export function SerpPreview({ title, metaDescription, url }) {
  return (
    <div style={{ ...styles.root }}>
      <Truncate style={styles.title}>
        {title}
      </Truncate>
      <div style={styles.url}>{url}</div>
      <Truncate maxChars={300} style={styles.description}>
        {metaDescription}
      </Truncate>
    </div>
  )
}

