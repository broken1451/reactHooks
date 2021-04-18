import React, { useRef } from "react";
import "../02-userEffect/effect.css";

export const FocusScreen = () => {

  const ref = useRef()

  const handleClick = () => {
    // document.querySelector("input").select();
    ref.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={ref} type="text" className="form-control" placeholder="Su nombre" />

      <button onClick={handleClick} className="btn btn-primary mt-3">
        Focus
      </button>
    </div>
  );
};
