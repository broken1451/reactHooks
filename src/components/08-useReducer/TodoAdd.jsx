import React from "react";
import { useForm } from "../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const [formValue, inputChange, reset] = useForm({
    desc: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (formValue.desc.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      todo: formValue.desc,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar todo</h4>
      <hr />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="desc"
          placeholder="Aprender"
          className="form-control"
          autoComplete="off"
          id=""
          onChange={inputChange}
          value={formValue.desc}
        />
        <button type="submit" className="btn btn-primary mt-1 w-100 btn-block">
          Agregar
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
