import React, { useContext } from "react";
import { UserContex } from "./UserContex";

const HomeScreen = () => {
  const { user } = useContext(UserContex);
  console.log({ user });

  return (
    <>
      <h1>Home Screen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};

export default HomeScreen;
