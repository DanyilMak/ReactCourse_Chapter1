const Search = ({ search, setSearch }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <input
        type="text"
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '8px',
          fontSize: '1rem',
          width: '300px',
        }}
      />
    </div>
  )
}

export default Search
