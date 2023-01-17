import React from "react";

function Menu(){
  return   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">

  <a class="navbar-brand" href="#">
    <img src="" alt="Imagens/logo.png" height="28" />
  </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Clientes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Planos e Precos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Contato</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
}

export default Menu


