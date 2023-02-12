import { useState } from "react";
import { ProjetoFinal } from "./hooks/ProjetoFinal";

export function App() {
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  return <ProjetoFinal btnCadastrar={btnCadastrar} />;
}
