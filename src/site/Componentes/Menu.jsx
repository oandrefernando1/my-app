import React from "react";
import {Link} from 'react-router-dom';

function Menu(){
    return   <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container">
          <a className="navbar-brand" href="#">
            <img src="Images/logo-small.svg" height="35"/>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Institucional</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Produtos</a>
              </li>
              <li className="nav-item">
                <a id="text1" className="nav-link" aria-current="page" href="#">Seja um assessor</a>
              </li>
              <li className="nav-item">
                <Link to="/app" className="nav-link" aria-current="page">Fazer Login</Link>
              </li>
            </ul>
          </div>
    </div>
</nav>
}

export default Menu


