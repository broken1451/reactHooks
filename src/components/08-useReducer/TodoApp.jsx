import React, { useEffect, useReducer } from "react";
import "./styles.css";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { todoReducer } from "./todoReducer";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     todo: "Aprender React",
//     done: false,
//   },
// ];

const init = () => {
  // se llama la funcion init y lo q sea q retorne init sera el initialstate
  return JSON.parse(localStorage.getItem("todos")) || [];
  //   return [
  //     {
  //       id: new Date().getTime(),
  //       todo: "Aprender React",
  //       done: false,
  //     },
  //   ];
};

export const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const hamdleDelete = (state) => {
    console.log(state);

    const action = {
      type: "delete",
      payload: state,
    };

    dispatch(action);
  };

  const toggle = (state) => {
    const action = {
      type: "toggle",
      payload: state,
    };
    dispatch(action);
  };


  const handleAddTodo = (newTodo) => {
    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
  };

  return (
    <div>
      <h1>TodoApp ({state.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList state={state} hamdleDelete={hamdleDelete} toggle={toggle} />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
