import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const ellipsis = '\u00A0…'

/** @arg {string} str */
function truncateWord(str) {
  return str.replace(/\s+\S+\s*$/, '')
}

/**
 * @arg {{
 *   maxWidth?: number,
 *   maxChars?: number,
 *   children: string,
 *   style: React.CSSProperties,
 * }} props
 */
export function Truncate({
  maxWidth,
  maxChars,
  children,
  style,
  ...otherProps
}) {
  const nodeRef = useRef(/** @type {HTMLDivElement | null} */ (null))
  const [truncatedChildren, setTruncatedChildren] = useState(children)

  // Truncate width
  useLayoutEffect(() => {
    if (!maxWidth) return
    if (!nodeRef.current) return

    /** @type HTMLElement */
    const node = nodeRef.current
    node.innerText = children

    if (node.scrollWidth > maxWidth) {
      node.innerText = children + ellipsis

      let newChildren = children
      while (
        node.scrollWidth > maxWidth &&
                newChildren !== truncateWord(newChildren)
      ) {
        newChildren = truncateWord(newChildren)
        node.innerText = newChildren + ellipsis
      }

      setTruncatedChildren(newChildren + ellipsis)
    } else {
      setTruncatedChildren(children)
    }
  }, [maxWidth, children])

  // Truncate chars
  useEffect(() => {
    if (!maxChars) return

    if (children.length > maxChars) {
      let newChildren = children
      while (
        (newChildren + ellipsis).length > maxChars &&
                newChildren !== truncateWord(newChildren)
      ) {
        newChildren = truncateWord(newChildren)
      }

      setTruncatedChildren(newChildren + ellipsis)
    } else {
      setTruncatedChildren(children)
    }
  }, [maxChars, children])

  // Set required styles
  let ownStyle = {}
  if (maxWidth) {
    ownStyle = {
      ...ownStyle,
      maxWidth,
      overflow: 'hidden',
    }
  }

  return (
    <div
      ref={nodeRef}
      style={{
        ...ownStyle,
        ...style,
      }}
      {...otherProps}
    >
      {truncatedChildren}
    </div>
  )
}
