import { useState } from 'react'
import Search from './Search'
import Add from './Add'
import Table from './Table'
import useGetAllToDo from '../hooks/useGetAllToDo'
import Loader from './Loader'

const ToDoContainer = () => {
  const { data: todos, setData: setTodos, isLoading } = useGetAllToDo()
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

  const updateTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    )
  }

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Loader isLoading={isLoading}>
      <div>
        <Search search={search} setSearch={setSearch} />
        <Add newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
        <Table
          todos={filteredTodos}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </Loader>
  )
}

export default ToDoContainer
