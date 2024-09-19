const Search = ({ search, setSearch }) => {
    return (
      <input
        type="text"
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '8px',
          fontSize: '1rem',
          width: '300px',
          marginRight: '10px',
          display: 'flex',
          justifyContent: 'center',
        }}
      />
    )
  }
  
  export default Search
  