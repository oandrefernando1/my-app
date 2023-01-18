import React from "react";

function Menu(){
    return   <nav className="navbar navbar-expand-md navbar-dark">

  <div className="container">
        <a className="navbar-brand" href="#">
          <img src="Images/logo-small.svg" alt="" width="" height="35"/>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">INSTITUCIONAL</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">PRODUTOS</a>
            </li>
            <li className="nav-item">
              <a id="text1" className="nav-link" aria-current="page" href="#">SEJA UM ACESSOR</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">ENTRAR</a>
            </li>
          </ul>
        </div>
  </div>
</nav>
}

export default Menu


