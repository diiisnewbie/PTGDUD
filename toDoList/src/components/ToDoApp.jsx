import React, { useState, useEffect, useMemo, useReducer, useRef } from "react";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      dispatch({ type: "LOAD_TODOS", todos: storedTodos });
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const filteredTodos = useMemo(() => {
    return {
      completed: todos.filter(todo => todo.completed),
      incomplete: todos.filter(todo => !todo.completed),
    };
  }, [todos]);

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      dispatch({ type: "ADD_TODO", text: input });
      setInput(""); 
      inputRef.current.focus(); 
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", id });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  return (
    <div className="todo-app">
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <h3>Incomplete Tasks</h3>
      <ul>
        {filteredTodos.incomplete.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Completed Tasks</h3>
      <ul>
        {filteredTodos.completed.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
