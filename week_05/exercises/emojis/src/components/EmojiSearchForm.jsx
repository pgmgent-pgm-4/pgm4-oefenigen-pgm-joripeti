import React, { useState } from 'react'

export default function EmojiSearchForm({ onSearch }) {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <form>
      <label htmlFor='search'>Search for emojis: </label>
      <input
        id='search'
        type="text"
        placeholder='Search for emojis'
        value={searchTerm}
        onChange={handleInputChange}
        />
    </form>
  );
}
