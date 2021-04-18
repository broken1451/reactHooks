import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./effect.css";

export const FormWithCustomHook = () => {
//   const {inputChange,values} = useForm({
//     name: "",
//     email: "",
//     password: "",
//   });
  const [stateForm, inputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { email, name, password } = stateForm;

  useEffect(() => {
    console.log("Email cambio");
  }, [email]);

  const submit = (e) => {
    e.preventDefault();
    console.log(stateForm);
  };

  return (
    <form onSubmit={submit}>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          id=""
          className="form-control"
          placeholder="Nombre"
          autoComplete="off"
          value={name}
          onChange={inputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          id=""
          className="form-control"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={inputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          id=""
          className="form-control"
          placeholder="*********"
          value={password}
          onChange={inputChange}
        />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
