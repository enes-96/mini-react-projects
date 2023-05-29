import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const defineTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-red-900">TODO_LIST</h1>
      <input
        className="border-2"
        type="text"
        placeholder="Enter task"
        value={newTodo}
        onChange={defineTodo}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li className="flex " key={index}>
            {todo}
            <button>del</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
