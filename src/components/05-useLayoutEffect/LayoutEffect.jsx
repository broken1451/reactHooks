// import React from "react";
import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const state = useFetch(url);
  const { data } = state;
  // const { author,quote } = !!data && data[0]; // si esto es true extrae la data en la posicion 0
  const inf = data ? data[0] : null;

  const pRefTag = useRef();
  const [boxState, setboxState] = useState({});

  useLayoutEffect(() => {
    //para saber el tamano de elementos html despues q se rendericen los elementos
    console.log("hey");
    setboxState(pRefTag.current?.getBoundingClientRect());
  }, [inf]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      {inf ? (
        <blockquote className="blockquote text-right">
          <p ref={pRefTag} className="mb-0">
            {inf.quote}
          </p>
        </blockquote>
      ) : null}

      <pre>{JSON.stringify(boxState, null, 3)}</pre>

      <button onClick={increment} type="button" className="btn btn-primary">
        {" "}
        siguiente frase{" "}
      </button>
    </div>
  );
};

export default LayoutEffect;
