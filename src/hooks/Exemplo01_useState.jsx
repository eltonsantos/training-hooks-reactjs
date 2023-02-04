import { useState } from "react";

export function Exemplo01_useState() {
  const [texto, setTexto] = useState("Hello World!");

  const evento = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={evento} />
      <p>{texto}</p>
    </div>
  );
}
