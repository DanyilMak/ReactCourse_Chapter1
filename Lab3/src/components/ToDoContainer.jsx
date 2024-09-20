import { useState } from 'react'
import Search from './Search'
import Add from './Add'
import Table from './Table'

const ToDoContainer = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'delectus aut autem' },
    { id: 2, title: 'quis ut nam facilis et officia qui' },
  ])
  const [newTodo, setNewTodo] = useState('')
  const [search, setSearch] = useState('')

  const addTodo = () => {
    if (newTodo.trim() === '') return
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1
    setTodos([...todos, { id: newId, title: newTodo }])
    setNewTodo('')
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <Add newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <Table todos={filteredTodos} removeTodo={removeTodo} />
    </div>
  )
}

export default ToDoContainer
