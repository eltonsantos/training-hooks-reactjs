import { useEffect, useState } from "react";

export function Exemplo06_useEffect() {
  const [vetor, setVetor] = useState([]);
  const [status, setStatus] = useState("Carregando...");

  useEffect(() => {
    obterDados();
  }, []);

  const obterDados = async () => {
    const dados = await fetch("https://jsonplaceholder.typicode.com/photos");
    const converter = await dados.json();
    setVetor(converter);
    setStatus("Dados carregados com sucesso");
  };

  return (
    <div>
      <h1>{status}</h1>
      <ul>
        {vetor.map((objeto) => (
          <li key={objeto.id}>{objeto.title}</li>
        ))}
      </ul>
    </div>
  );
}
