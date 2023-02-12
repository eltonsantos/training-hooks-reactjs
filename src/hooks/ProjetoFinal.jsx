export function ProjetoFinal({
  btnCadastrar,
  setNome,
  setIdade,
  setCidade,
  cadastrar,
  vetor,
  nome,
  idade,
  cidade,
  selecionar,
  alterar,
}) {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Nome"
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Idade"
          className="form-control"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cidade"
          className="form-control"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        {btnCadastrar ? (
          <input
            type="button"
            value="Cadastrar"
            className="btn btn-primary"
            onClick={cadastrar}
          />
        ) : (
          <div>
            <input
              type="button"
              value="Alterar"
              className="btn btn-secondary"
              onClick={alterar}
            />
            <input type="button" value="Excluir" className="btn btn-danger" />
            <input type="button" value="Cancelar" className="btn btn-success" />
          </div>
        )}
      </form>
      <Tabela vetor={vetor} selecionar={selecionar} />
    </>
  );
}

function Tabela({ vetor, selecionar }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Cidade</th>
          <th>Selecionar</th>
        </tr>
      </thead>
      <tbody>
        {vetor.map((obj, indice) => (
          <tr key={indice}>
            <td>{indice + 1}</td>
            <td>{obj.nome}</td>
            <td>{obj.idade}</td>
            <td>{obj.cidade}</td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => selecionar(indice)}
              >
                Selecionar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
