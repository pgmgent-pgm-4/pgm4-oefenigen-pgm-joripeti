import React, { useState } from 'react'
import styles from './addButton.module.css'

export default function AddButton({ onAdd }) {
    const [input, setInput] = useState('');
    const handleAdd = () => {
        if (input.trim()) {
            onAdd(input);
            setInput('');    
        }
    }

  return (
    <div>
        <input
            className={styles.input}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Add todo'
        />
        <button className={styles.addButton} onClick={handleAdd}>
            Add
        </button>
    </div>
  )
}
