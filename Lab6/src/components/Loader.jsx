const Loader = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          position: 'fixed',
          width: '100%',
          top: 0,
          left: 0,
          zIndex: 10,
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

  return <>{children}</>
}

export default Loader
