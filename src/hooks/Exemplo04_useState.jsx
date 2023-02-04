import { useState } from "react";

export function Exemplo04_useState() {
  const modelo = {
    nome: "",
    email: "",
    cidade: "",
  };

  const [formulario, setFormulario] = useState(modelo);

  const evento = (e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    setFormulario({ ...formulario, [nome]: valor });
  };

  return (
    <div>
      <input
        type="text"
        name="nome"
        placeholder="Informe o nome"
        onChange={evento}
      />
      <input
        type="text"
        name="email"
        placeholder="Informe o e-mail"
        onChange={evento}
      />
      <input
        type="text"
        name="cidade"
        placeholder="Informe a cidade"
        onChange={evento}
      />

      <p>{formulario.nome}</p>
      <p>{formulario.email}</p>
      <p>{formulario.cidade}</p>

      <p>{JSON.stringify(formulario)}</p>
    </div>
  );
}
