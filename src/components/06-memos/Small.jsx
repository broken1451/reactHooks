import React, { memo } from "react";

// export const Small = memo(({value}) => {
export const Small = React.memo(({ value }) => {
  // solo se dipara si las props cambian y se renderiza, else usa su version memorizada cuando tenga q redibujar algo , memo es para memorizar
  console.log("Me volvi a llamar");
  return (
    <div>
      <small>{value}</small>
    </div>
  );
});
