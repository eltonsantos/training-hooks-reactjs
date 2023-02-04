import { useRef } from "react";

export function Exemplo08_useRef() {
  const elemento = useRef();

  const acao = () => {
    elemento.current.focus();
    elemento.current.style.backgroundColor = "red";
    elemento.current.value = "Digite algo...";
  };

  return (
    <div>
      <input type="text" ref={elemento} />
      <input type="button" value="Clique aqui" onClick={acao} />
    </div>
  );
}
