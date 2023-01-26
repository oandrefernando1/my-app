import React from "react";
import ListaClientes from "../Components/ListaCliente/listacliente";
import Navbar from "../Components/Navbar/navbar";
import "./home.css"

function Home(){
  return <div >
    <Navbar/>
    <div className="container-fluid titulo">
      <h1>Casdastro de Clientes</h1>
      <ListaClientes/>
    </div>
    
  </div>
}

export default Home