import { useState } from "react";

export function Exemplo02_useState() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);

  return (
    <div>
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Idade"
        onChange={(e) => setIdade(e.target.value)}
      />

      <p>{nome}</p>
      <p>{idade}</p>
    </div>
  );
}
