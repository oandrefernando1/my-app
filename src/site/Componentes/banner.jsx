import React from "react";

function Banner(){
  return <section id="banner">
    <div className="container">
      <div className="row">

          <div className="col-lg-6">
            <h1>Conectando você ao que realmente importa</h1>
            <h2>Por que <span id="grafo">Grafo</span>?</h2>
            <h4>Teorema dentro da matemática com objetivo de resolver problemas complexos de maneira mais simplificada, através de conexões entre vértices e arestas.</h4>
            <a href="/#" className="btn btn-dark btn-lg btn-banner" >Seja um Acessor</a>
            <a href="/app" className="btn btn-dark btn-lg btn-banner">Fazer Login</a>

          </div>

          <div className="col-lg-6">
            <img src="Images/screenshot-crm.png" alt="screenshot"/>
          </div>


      </div>
    </div>

  </section>

}

export default Banner