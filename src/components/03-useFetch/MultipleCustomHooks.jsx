// import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-userEffect/effect.css";

const MultipleCustomHooks = () => {

   const {counter,increment}= useCounter(1)

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const state = useFetch(url);
  const { data, error, loading } = state;
  // const { author,quote } = !!data && data[0]; // si esto es true extrae la data en la posicion 0
  const inf = (data ? data[0] : null)

  return (
    <div>
      <h1>Breaking Bad</h1>
      <hr />

      {loading ? (
        <div className="alertt alert-info text-center">Loading ....</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{inf.quote}</p>
          <footer className="blockquote-footer mt-2">{inf.author}</footer>
        </blockquote>
      )}

    <button onClick={increment} type="button" className="btn btn-primary"> siguiente frase </button>

    </div>
  );
};

export default MultipleCustomHooks;
