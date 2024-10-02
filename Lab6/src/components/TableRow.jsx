import { useState } from 'react'

const TableRow = ({ todo, removeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(todo.title)
  const [error, setError] = useState('')

  const handleEdit = () => {
    setIsEditing(true)
    setError('')
  }

  const handleSave = () => {
    if (newTitle.trim() === '') {
      setError('Title is required')
      return
    }
    updateTodo(todo.id, newTitle)
    setIsEditing(false)
  }

  return (
    <li style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
      <div style={{ flex: 1 }}>
        {isEditing ? (
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
          onClick={isEditing ? handleSave : handleEdit}
          style={{
            padding: '6px 10px',
            fontSize: '0.9rem',
            cursor: 'pointer',
          }}
        >
          {isEditing ? 'Save' : 'Edit'}
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
  )
}

export default TableRow
