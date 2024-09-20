const Add = ({ newTodo, setNewTodo, addTodo }) => {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
        paddingTop: '5px',
      }}>
        <input
          type="text"
          placeholder="Add new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{
            padding: '8px',
            fontSize: '1rem',
            width: '300px',
            marginRight: '10px',
          }}
        />
        <button
          onClick={addTodo}
          style={{ padding: '10px', fontSize: '0.9rem', cursor: 'pointer' }}
        >
          Add
        </button>
      </div>
    )
  }
  
  export default Add
  