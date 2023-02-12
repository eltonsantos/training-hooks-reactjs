import { useState } from "react";
import { ProjetoFinal } from "./hooks/ProjetoFinal";

export function App() {
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [vetor, setVetor] = useState([]);

  const cadastrar = () => {
    let obj = { 'nome' : nome, 'idade' : idade, 'cidade': cidade};
    setVetor([...vetor, obj])
  }

  return (
    <ProjetoFinal
      btnCadastrar={btnCadastrar}
      setNome={setNome}
      setIdade={setIdade}
      setCidade={setCidade}
      cadastrar={cadastrar}
    />
  );
}
