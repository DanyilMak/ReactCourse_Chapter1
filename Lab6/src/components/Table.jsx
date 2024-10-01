import { useState } from 'react'

const Table = ({ todos, removeTodo, updateTodo }) => {
  const [editingId, setEditingId] = useState(null)
  const [newTitle, setNewTitle] = useState('')
  const [error, setError] = useState('')

  const handleEdit = (todo) => {
    setEditingId(todo.id)
    setNewTitle(todo.title)
    setError('')
  }

  const handleSave = (id) => {
    if (newTitle.trim() === '') {
      setError('Title is required')
      return
    }
    updateTodo(id, newTitle)
    setEditingId(null)
    setError('')
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}
        >
          <div style={{ flex: 1 }}>
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{
                    marginRight: '10px',
                    padding: '6px',
                    fontSize: '0.9rem',
                    border: error ? '1px solid red' : '1px solid #ccc',
                  }}
                />
                {error && (
                  <span style={{ color: 'red', marginLeft: '10px' }}>
                    {error}
                  </span>
                )}
              </>
            ) : (
              todo.title
            )}
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() =>
                editingId === todo.id ? handleSave(todo.id) : handleEdit(todo)
              }
              style={{
                padding: '6px 10px',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              {editingId === todo.id ? 'Save' : 'Edit'}
            </button>
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
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Table
