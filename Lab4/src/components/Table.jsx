const Table = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ padding: '10px 0' }}>
          {todo.title}{' '}
          <button
            onClick={() => removeTodo(todo.id)}
            style={{
              padding: '6px 10px',
              fontSize: '0.9rem',
              cursor: 'pointer',
            }}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Table
