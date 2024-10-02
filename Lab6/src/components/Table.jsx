import TableRow from './TableRow'

const Table = ({ todos, removeTodo, updateTodo }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <TableRow
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  )
}

export default Table
