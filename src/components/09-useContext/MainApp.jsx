import React, { useState } from "react";
import AppRouter from "./AppRouter";
import { UserContex } from "./UserContex";

const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    //   para proveer informacion en contexto y no por props y sirve para proveer informacion a lo largo de todos sus componentes hijos todo lo q este dentro de el
    // mandar mas argumentos en el contex  <UserContex.Provider value={ { user,setuser} }>
    <UserContex.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContex.Provider>
  );
};

export default MainApp;
