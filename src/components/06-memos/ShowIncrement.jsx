import React from "react";

export const ShowIncrement = React.memo(({ increment }) => { // memoriza este componente si los argumentos no cambian, si cambia vuelve a renderizar si no no hagas nada
    console.log('Me volvi a generar :(');
  return (
    <button
      onClick={() => {
        increment(5);
      }}
      className="btn btn-primary">
      Incrementar
    </button>
  );
});
