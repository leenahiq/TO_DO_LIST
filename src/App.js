import React from "react";

import "./App.css";
import Input from "./compnents/Input";

const App = () => {
  // created hooks to set value
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");
  // functions to store value on display and after editing and stop diappering on refresh
  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);
  //function to add item in list
  // id is good practice when have multyple item in array
  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }
  // function for delete button
  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  //function complete check button
  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  // function for  Edit and  update value  button
  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div>
      {/* input component imported from Input.jsx */}
      <Input
        handleSubmit={handleSubmit}
        setTodo={setTodo}
        todos={todos}
        todo={todo}
        toggleComplete={toggleComplete}
        todoEditing={todoEditing}
        setEditingText={setEditingText}
        submitEdits={submitEdits}
        setTodoEditing={setTodoEditing}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
