import React from 'react'

const TodoListItem = ({todo, i ,hamdleDelete, toggle}) => {
  return (
    <li  className="list-group-item">
    <p
      onClick={() => {
        toggle(todo);
      }}
      className={`${todo.done ? "complete" : ""}`}
    >
      {i + 1}- {todo.todo}
    </p>
    <button
      onClick={() => hamdleDelete(todo)}
      className="btn btn-danger"
    >
      Borrar
    </button>
  </li>
  )
}

export default TodoListItem
