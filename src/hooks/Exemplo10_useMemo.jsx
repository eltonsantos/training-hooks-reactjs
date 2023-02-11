import { useMemo, useState } from "react";

export function Exemplo10_useMemo() {
  const [contador, setContador] = useState(0);
  const [nomes, setNomes] = useState(["Elton", "Rose", "Ericson", "João"]);

  const ListaSemRender = useMemo(() => {
    return <ListarNomes lista={nomes} />;
  }, [nomes]);

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={(e) => setContador(contador + 1)}>Incrementar</button>

      {ListaSemRender}
    </div>
  );
}

function ListarNomes({ lista }) {
  console.log("Componente ListarNomes criado!");
  return (
    <ul>
      {lista.map((nome) => (
        <li key={nome}>{nome}</li>
      ))}
    </ul>
  );
}
