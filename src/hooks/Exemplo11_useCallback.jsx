import { useCallback, useEffect, useState } from "react";

export function Exemplo11_useCallback() {
  const [cor, setCor] = useState("blue");
  const [numero, setNumero] = useState(0);

  const alteraCor = () => {
    setCor(cor === "blue" ? "gray" : "blue");
  };

  const listaNumeros = useCallback(() => {
    return [numero - 1, numero, numero + 1];
  }, [numero]);

  return (
    <div style={{ backgroundColor: cor }}>
      <button onClick={alteraCor}>Alterar cor</button>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(parseInt(e.target.value))}
      />

      <ListarNumeros lista={listaNumeros} />
    </div>
  );
}

function ListarNumeros({ lista }) {
  const [vetor, setVetor] = useState([]);

  useEffect(() => {
    console.log("Componente criado!");
    setVetor(lista);
  }, [lista]);

  return (
    <ul>
      {vetor.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  );
}
