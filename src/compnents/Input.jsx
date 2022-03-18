// destructure hooks and all function
const Input = ({
  handleSubmit,
  setTodo,
  todos,
  todo,
  toggleComplete,
  todoEditing,
  setEditingText,
  submitEdits,
  setTodoEditing,
  deleteTodo,
}) => {
  return (
    <div>
      <div className="wrap">
        <div id="todo-list">
          <div>
            {/* heading */}
            <h1>To Do List</h1>
            {/* ADD task input field */}
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
          
          {todos.map((todo) =>(
            <div key={todo.id} className="todo">
              <div className="todo-text">
                
                <input
                  type="checkbox"
                  id="completed"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                {todo.id === todoEditing ? (
                  <input
                    type="text"
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                ) : (
                  <div>{todo.text}</div>
                )}
              </div>
              {/* edit button */}
              <div className="todo-actions">
                {todo.id === todoEditing ? (
                  <button onClick={() => submitEdits(todo.id)}>
                    Submit Edits
                  </button>
                ) : (
                  <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
                )}

                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Input;
