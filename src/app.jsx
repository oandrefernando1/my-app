import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'; //rotas

//Importar páginas
import Site from "./site/site";
import Login from "./app/Login/login";
import NovaConta from "./app/NovaConta/novaconta";
import ResetSenha from "./app/ResetSenha/resetsenha";
import Home from "./app/Home/home";
import NovoCliente from "./app/NovoCliente/novocliente";

function App(){
    return <BrowserRouter>
    <Routes>
    <Route path='/' element={<Site/>} exact/>
    <Route path='/app' element={<Login/>} exact/>
    <Route path='/App/novaconta' element={<NovaConta/>} exact/>
    <Route path='/App/resetsenha' element={<ResetSenha/>} exact/>
    <Route path='/App/home' element={<Home/>} exact/>
    <Route path='/App/novocliente' element={<NovoCliente/>} exact/>

    </Routes>
    </BrowserRouter> 
  }

  export default App;