import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../01-usestate/counter.css";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Memorize:counter <Small value={counter} />
      </h1>
      <hr />
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="btn btn-primary"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
