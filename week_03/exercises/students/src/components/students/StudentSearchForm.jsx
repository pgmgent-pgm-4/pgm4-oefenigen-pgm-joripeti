import React from 'react'

export default function StudentSearchForm({inputSearch, setInputSearch}) {
    const handleChange = (e) => {
        setInputSearch(e.target.value);
    }
  return (
    <div>
        <h2>Search for a student</h2>
        <input id='search' type="text" placeholder="Search..." value={inputSearch} onChange={handleChange} />
        <label htmlFor='search'>Search</label>
    </div>
  )
}
