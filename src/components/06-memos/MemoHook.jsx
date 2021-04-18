import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";
import "../01-usestate/counter.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(100);
  const [show, setShow] = useState(true);
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]); // si algo cambia parecdo a los efectos []dependencia si algo cambia ejecuta/quiero memorizar el nuevo resultado

  return (
    <div>
      <h1>
        MemoHook counter <small>{counter}</small>
      </h1>
      <hr />
      <p>{memoProcesoPesado}</p>
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
