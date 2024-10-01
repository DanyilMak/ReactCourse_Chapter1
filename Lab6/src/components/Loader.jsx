const Loader = ({ isLoading, children }) => {
  return (
    <>
      {isLoading && (
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
      )}
      <div style={{ display: isLoading ? 'none' : 'block' }}>{children}</div>
    </>
  )
}

export default Loader
