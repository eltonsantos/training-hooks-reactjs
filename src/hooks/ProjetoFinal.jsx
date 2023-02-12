export function ProjetoFinal() {
  return (
    <>
      <form>
        <input type="text" placeholder="Nome" className="form-control" />
        <input type="text" placeholder="Idade" className="form-control" />
        <input type="text" placeholder="Cidade" className="form-control" />

        <input type="button" value="Cadastrar" className="btn btn-primary" />
        <input type="button" value="Alterar" className="btn btn-secondary" />
        <input type="button" value="Excluir" className="btn btn-danger" />
        <input type="button" value="Cancelar" className="btn btn-success" />
      </form>
      <Tabela />
    </>
  );
}

function Tabela() {
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
      <tbody></tbody>
    </table>
  );
}
