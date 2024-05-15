import React from 'react'
import useFetch from '../hooks/useFetch'
import Emoji from './Emoji'

export default function EmojiResults({ searchTerm }) {
  const url = 'https://www.pgm.gent/pgm-4/data/emojis.json'
  const { data: emojis, isLoading, error } = useFetch(url)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Something went wrong: {error.message}</p>

  const filteredEmojis = emojis.filter(emoji =>
    emoji.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emoji.symbol.includes(searchTerm) ||
    emoji.keywords && emoji.keywords.includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredEmojis.map((emoji, index) => (
         <Emoji key={index} emoji={emoji} />
        ))}
      </ul>
    </div>
  )
}
