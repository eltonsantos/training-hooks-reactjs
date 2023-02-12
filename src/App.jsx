import { useState } from "react";
import { ProjetoFinal } from "./hooks/ProjetoFinal";

export function App() {
  const [indiceVetor, setIndiceVetor] = useState("");
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [vetor, setVetor] = useState([]);

  const cadastrar = () => {
    let obj = { nome, idade, cidade };
    setVetor([...vetor, obj]);

    setNome("");
    setIdade("");
    setCidade("");
  };

  const selecionar = (indice) => {
    setIndiceVetor(indice);

    setNome(vetor[indice].nome);
    setIdade(vetor[indice].idade);
    setCidade(vetor[indice].cidade);

    setBtnCadastrar(false);
  };

  const alterar = () => {
    let obj = { nome, idade, cidade };
    let copiaVetor = [...vetor];
    copiaVetor[indiceVetor] = obj;
    setVetor(copiaVetor);
    setNome("");
    setIdade("");
    setCidade("");
    setBtnCadastrar(true);
  };

  const remover = () => {
    let copiaVetor = [...vetor];
    copiaVetor.splice(indiceVetor, 1);
    setVetor(copiaVetor);
    setNome("");
    setIdade("");
    setCidade("");
    setBtnCadastrar(true);
  };

  return (
    <ProjetoFinal
      btnCadastrar={btnCadastrar}
      setNome={setNome}
      setIdade={setIdade}
      setCidade={setCidade}
      cadastrar={cadastrar}
      vetor={vetor}
      nome={nome}
      idade={idade}
      cidade={cidade}
      selecionar={selecionar}
      alterar={alterar}
      remover={remover}
    />
  );
}
