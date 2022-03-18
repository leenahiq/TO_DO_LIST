import React from 'react'

const Input = ({setTodos,todos}) => {
  const [todo, setTodo] = React.useState("");
  
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

  return (
    <div>
       <h1>Todo List</h1>
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ADD YOUR TASK"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button type="submit">Add Todo</button>
    </form>
    </div>
  )
}

export default Input