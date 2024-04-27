import React from 'react'
import styles from './todo.module.css'
import RemoveButton from './RemoveButton'

export default function Todo({ todo, onRemove }) {
  return (
        <li className={styles.todo}>
            {todo}
            <RemoveButton onRemove={onRemove} />
        </li>
  )
}
