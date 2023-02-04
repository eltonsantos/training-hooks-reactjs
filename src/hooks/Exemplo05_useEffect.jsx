import { useEffect, useState } from "react";

export function Exemplo05_useEffect() {
  const [texto, setTexto] = useState("Ola mundo");

  useEffect(() => {
    setInterval(() => {
      setTexto("Hello World");
    }, 5000);
  }, []);

  return <h1>{texto}</h1>;
}
