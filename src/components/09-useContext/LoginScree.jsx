import React, { useContext } from "react";
import { UserContex } from "./UserContex";

const LoginScree = () => {
  const { user, setUser } = useContext(UserContex);

  const usuario = {
    id: 123,
    name: "Adrian",
  };

  return (
    <>
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => setUser(usuario)}>
        Login
      </button>
    </>
  );
};

export default LoginScree;
