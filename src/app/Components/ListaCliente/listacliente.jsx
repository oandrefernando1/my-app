import React from "react";
import "./listacliente.css";

function ListaClientes(){

  return <table className="table table-hover table-bordered">
        <thead className="table-secondary">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
          </tbody>
      </table>
}

export default ListaClientes