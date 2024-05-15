import React from 'react'

export default function Emoji({ emoji, index }) {
  return (
    <li key={`emoji-${index}`}>
      {emoji.symbol} - {emoji.title}
    </li>
  )
}
