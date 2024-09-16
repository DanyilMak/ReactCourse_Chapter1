import { useState } from 'react'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "delectus aut autem" },
    { id: 2, title: "quis ut nam facilis et officia qui" },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [search, setSearch] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    setTodos([...todos, { id: newId, title: newTodo }]);
    setNewTodo("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", minHeight: "100vh" }}>
      <h1>ToDo App</h1>

      <input
        type="text"
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", fontSize: "1rem", width: "300px", marginRight: "10px", display: "flex", justifyContent: "center"}}
      />

      <div style={{ marginBottom: "20px", paddingTop: "5px"}}>
        <input
          type="text"
          placeholder="Add new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ padding: "8px", fontSize: "1rem", width: "300px", marginRight: "10px", display: "flex", justifyContent: "center"}}
        />
        <button onClick={addTodo} style={{ padding: "10px", fontSize: "0.9rem", cursor: "pointer"}}>Add</button>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id} style={{ padding: "10px 0"}}>
            {todo.title}{" "}
            <button onClick={() => removeTodo(todo.id)} style={{ padding: "6px 10px", fontSize: "0.9rem", cursor: "pointer" }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;