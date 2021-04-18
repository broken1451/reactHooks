import React, { useEffect, useState } from "react";
import "./effect.css";
import { Messaje } from "./Messaje";

export const SimpleForm = () => {

  const [stateForm, setstateForm] = useState({
    name: "",
    email: "",
  });

  const { email, name } = stateForm;

  // ejecutar efectos secundarios cuando algo suceda en el componente
  useEffect(() => {
    console.log("Hey");
  }, []); // con el [] solo se dispara una vez

  useEffect(() => {
    console.log("stateForm cambio");
  }, [stateForm]); // con el [stateForm] solo se dispara una vez cuando solo queremos escuchar cambio  dentro de los []

  useEffect(() => {
    console.log("email cambio");
  }, [email]); // con el [stateForm] solo se dispara una vez cuando solo queremos escuchar cambio  dentro de los []


  const inputChange = ({ target }) => {
    // console.log(target.name);
    // console.log(target.value);
    setstateForm({
      ...stateForm,
      [target.name]: target.value, // computando, quiero q esta propiedad sea lo q venga en el objeto
    });
  };

  return (
    <>
      <h1>User Effect</h1>
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

        {/* {(name==='123') && <Messaje />} */}
        {name==='123' ?  <Messaje />: null }
      </div>
    </>
  );
};
