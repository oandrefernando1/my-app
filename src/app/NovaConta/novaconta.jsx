import React, { useState } from "react";
import {Link, Navigate} from 'react-router-dom';
import "./novaconta.css"

import firebase from '../Config/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function NovaConta(){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState('');


  function cadastrarUsuario(){
    setMensagem('')

    if (!email || !senha){
      setMensagem('Informe todos os campos')
      return;
    }

    const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, senha).then((resultado) => {
        setSucesso('S')
      }).catch(error => {
        setSucesso('n')

        if (error.message === 'auth/email-already-in-use).'){
           setMensagem('Esse e-mail ja esta em uso por outra conta');

        }else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
        setMensagem('A senha deve ter pelo menos 6 caracteres');
        }
        else if (error.message === 'Firebase: Error (auth/invalid-email).'){
        setMensagem('O e-mail não é valido');
        }
        else {
          setMensagem('Erro ao criar conta: ' + error.message);
        }

    })


  }  

  return <div className="d-flex align-items-center text-center form-container">
    <form className="form-signin">
      <Link to='/'>
        <img className="mb-4" src="/Images/logo-small.svg" />
      </Link>
      <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

      <div className="form-floating">
        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail"/>
        <label for="floatingInput">E-mail</label>
      </div>
      <div className="form-floating">
        <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
        <label for="floatingPassword">Senha</label>
      </div>

      <button onClick={cadastrarUsuario} className="w-100 btn btn-lg btn-primary" type="button">Criar conta</button>
      
      {mensagem.length > 0 ? <div className="alert alert-danger mt-4" role="alert">{mensagem}</div> : null}
      {sucesso === 'S' ? <Navigate to='/app/home'/>: null}

      <div className="login-links mt-5">
        <Link to="/app" className="mx-3">Ja tenho uma conta. </Link>
      </div>
      <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Andre</p>
    </form>
  </div>
}

export default NovaConta