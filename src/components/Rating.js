import React from 'react'
import cx from 'classnames'
import { FaHeart, FaBug, FaComment, FaLightbulb, FaTimesCircle, FaQuestion } from 'react-icons/fa'
import styles from './Rating.css'

export function RatingError() {
  return <RatingBase className={styles.componentError} icon={FaBug} label='Error' />
}

export function RatingFeedback() {
  return <RatingBase className={styles.componentFeedback} icon={FaComment} label='Feedback' />
}

export function RatingBad() {
  return <RatingBase className={styles.componentBad} icon={FaTimesCircle} label='Niet goed' />
}

export function RatingOk() {
  return <RatingBase className={styles.componentOk} icon={FaLightbulb} label='OK' />
}

export function RatingGood() {
  return <RatingBase className={styles.componentGood} icon={FaHeart} label='Goed!' />
}

export function RatingUnknown() {
  return <RatingBase className={styles.componentUnknown} icon={FaQuestion} label='Onbekend' />
}


function RatingBase({ className, icon: Icon, label }) {
  return (
    <span className={cx(styles.componentBase, className)}>
      <Icon />
      <span className={styles.label}>{label}</span>
    </span>
  )
}
