import React, { useCallback, useEffect, useState } from "react";
import "../01-usestate/counter.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // const incremet =()=>{
  //     setCounter(counter+1)
  // }
//   useCallback cuando se le manda una funcion a un componente hijo y el componente esta memorizado
  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );
 

  useEffect((num) => {
    setCounter((c) => c + num);
  }, [increment])

  return (
    <div>
      <h1>User Callbac hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
