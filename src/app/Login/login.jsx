import React, { useState } from "react";
import {Link, Navigate} from 'react-router-dom';
import "./login.css"

import firebase from '../Config/firebase'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";


function Login(){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sucesso, setSucesso] = useState('');

  function LoginUsuario(){
     
    const auth = getAuth();
          signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      setSucesso('S');

    })
    .catch(function(error){
      setSucesso('N');
    });
  }

  function alterarEmail(event){
    setEmail(event.target.value);
  }

  function alterarSenha(event){
    setSenha(event.target.value);
  }

  return <div className="d-flex align-items-center text-center form-container">
    <form className="form-signin">
      <Link to='/'>
        <img className="mb-4" src="Images/logo-small.svg" />
      </Link>
      <h1 className="h3 mb-3 fw-normal">Login</h1>

      <div className="form-floating">
        <input onChange={alterarEmail} type="email" className="form-control" id="floatingInput" placeholder="E-mail"/>
        <label for="floatingInput">E-mail</label>
      </div>
      <div className="form-floating">
        <input onChange={alterarSenha} type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
        <label for="floatingPassword">Senha</label>
      </div>

      <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary" type="button">Entrar</button>

      {sucesso === 'N' ? <div className="alert alert-danger mt-4" role="alert">E-mail ou senha invalida.</div> : ''}
      {sucesso === 'S' ? <Navigate to='/app/home'/>: null}

      <div className="login-links mt-5">
        <Link to="/app/resetsenha" className="mx-3">Esqueci minha senha</Link>
        <Link to="/app/novaconta" className="mx-3">Criar uma Conta</Link>
      </div>
      <p className="mt-5 mb-3 text-muted barra">&copy; Desenvolvido por Andre</p>
    </form>
  </div>
}

export default Login