import React from 'react'
import styles from './removeButton.module.css'

export default function RemoveButton({ onRemove }) {
  return (
    <button className={styles.removeButton} onClick={onRemove}>
        Remove
    </button>
  )
}
