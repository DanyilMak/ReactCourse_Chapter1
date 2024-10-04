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
            position: 'absolute',
            width: '100%',
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
