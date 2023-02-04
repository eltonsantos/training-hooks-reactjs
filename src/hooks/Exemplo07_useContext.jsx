import {} from "react";

export function Exemplo07_useContext() {
  let texto = "Enviando informações";
  return <Camada1 texto={texto} />;
}

function Camada1({ texto }) {
  return (
    <div
      style={{
        backgroundColor: "red",
        width: "500px",
        height: "500px",
        display: "inline-block",
      }}
    >
      <Camada2 texto={texto} />
    </div>
  );
}

function Camada2({ texto }) {
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
      <Camada3 texto={texto} />
    </div>
  );
}

function Camada3({ texto }) {
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
