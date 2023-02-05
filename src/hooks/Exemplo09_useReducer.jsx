import { useReducer } from "react";

export function Exemplo09_useReducer() {
  const funcao = (state, action) => {
    switch (action) {
      case "incrementar":
        return state + 1;
      case "decrementar":
        return state - 1;
      default:
        return 0;
    }
  };

  const [contador, executarFuncao] = useReducer(funcao, 0);

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={(e) => executarFuncao("incrementar")}>
        Incrementar
      </button>
      <button onClick={(e) => executarFuncao("decrementar")}>
        Decrementar
      </button>
    </div>
  );
}
