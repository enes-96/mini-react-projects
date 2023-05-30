import React, { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  const defineTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleTodo = (index) => {
    const updatedCompletedTodos = [...completedTodos];
    if (updatedCompletedTodos.includes(index)) {
      const indexToRemove = updatedCompletedTodos.indexOf(index);
      updatedCompletedTodos.splice(indexToRemove, 1);
    } else {
      updatedCompletedTodos.push(index);
    }
    setCompletedTodos(updatedCompletedTodos);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Enter") {
        addTodo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [addTodo]);

  return (
    <div className="">
      <section className=" p-4">
        <h1 className="text-3xl">TODO_LIST</h1>
        <input
          className="border-2 focus:outline-none"
          type="text"
          placeholder="Enter task"
          value={newTodo}
          onChange={defineTodo}
        />
        <button className="px-4 border-l-0 border-2" onClick={addTodo}>
          Add
        </button>
        <ul className="">
          {todos.map((todo, index) => (
            <li
              className={`flex items-center gap-5 cursor-pointer ${
                completedTodos.includes(index)
                  ? "line-through decoration-red-600"
                  : ""
              }`}
              key={index}
              onClick={() => toggleTodo(index)}
            >
              <p className="text-2xl"> {todo}</p>
              <button
                className="border-2 h-7 w-7 "
                onClick={() => removeTodo(index)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
