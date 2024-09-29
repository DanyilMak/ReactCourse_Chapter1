const Loader = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          Loading...
        </div>
      </div>
    )
  }

  return children
}

export default Loader
