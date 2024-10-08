import React from 'react'

const Search = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: '100%',
        padding: '8px',
        boxSizing: 'border-box',
        marginBottom: '10px',
      }}
    />
  )
}

export default Search
