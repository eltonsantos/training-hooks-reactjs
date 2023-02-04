import { createContext, useContext } from "react";

const Contexto = createContext();

export function Exemplo07_1_useContext() {
  let texto = "Enviando informações";
  return (
    <Contexto.Provider value={{ texto }}>
      <Camada1 />
    </Contexto.Provider>
  );
}

function Camada1() {
  return (
    <div
      style={{
        backgroundColor: "red",
        width: "500px",
        height: "500px",
        display: "inline-block",
      }}
    >
      <Camada2 />
    </div>
  );
}

function Camada2() {
  return (
    <div
      style={{
        backgroundColor: "green",
        width: "400px",
        height: "400px",
        margin: "50px",
        display: "inline-block",
      }}
    >
      <Camada3 />
    </div>
  );
}

function Camada3() {
  const { texto } = useContext(Contexto);

  return (
    <div
      style={{
        backgroundColor: "yellow",
        width: "300px",
        height: "300px",
        margin: "50px",
      }}
    >
      <p>{texto}</p>
    </div>
  );
}
