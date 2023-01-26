import React, { useEffect, useState } from "react";
import "./listacliente.css";
import { db } from '../../Config/firebase'
//import clientes from '../../Dados/clientes'

import {collection, getDocs} from 'firebase/firestore'

export default function ListaClientes(){

  const [clientes, setClientes] = useState([]);
  
  useEffect(function(){
    getClientes()
  }, []);

  useEffect(function(){
    console.log(clientes)
  },[clientes])

  function getClientes(){
    const clienteCollectionRef = collection(db, 'usuario')
      getDocs(clienteCollectionRef)
        .then(resposta => {
          const cliente = resposta.docs.map(doc => ({
            id: doc.id,
            nome: doc.data().Nome,
            email: doc.data().Email,
            fone: doc.data().Fone,
          }))
          setClientes(cliente)
      }).catch(error => console.log(error.message))

  }


  return <div className="table-responsive-sm"> 
  <table className="table table-hover table-bordered table-lg">
        <thead>
          <tr className="table-secondary">
            <th scope="col" className="codigo">Codigo</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Fone</th>
          </tr>
        </thead>
        <tbody>

            {
              clientes.map((cliente) => {
                return <tr key={cliente.id}>
                <th scope="row">{cliente.id}</th>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.fone}</td>
              </tr>
              })
            }

        </tbody>
      </table>
    </div>
}

