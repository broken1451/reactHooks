import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ state, hamdleDelete, toggle  }) => {
  // console.log(state);
  return (
    <>
      <ul className="list-group list-group-flush">
        {state.map((todo, i) => {
          return (
            <TodoListItem key={todo.id} todo={todo} i={i} hamdleDelete={hamdleDelete} toggle={toggle}/>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
