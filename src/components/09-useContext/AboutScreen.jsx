import React, { useContext } from "react";
import { UserContex } from "./UserContex";

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContex);

  const logout = () => {
    setUser({});
  };

  return (
    <>
      <h1>About Screen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button onClick={logout} className="btn btn-warning">
        Logout
      </button>
    </>
  );
};

export default AboutScreen;
