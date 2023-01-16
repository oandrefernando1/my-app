import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'; //rotas

//Importar páginas
import Site from "./site/site";
import Login from "./app/login";

function App(){
    return <BrowserRouter>
    <Routes>
    <Route path='/' element={<Site/>} exact/>
    <Route path='/app' element={<Login/>} exact/>
    </Routes>
    </BrowserRouter> 
  }

  export default App;