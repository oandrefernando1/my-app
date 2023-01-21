import React from "react";

function Features(){
  return <section id="features">
    <div className="container text-center ">
      <div id="features-box" className="row align-items-start ">
          <div className="col">
            <img className="rounded" src="https://grafocapital.com.br/wp-content/uploads/2022/02/fixa-thumb.jpg" alt="" />
            <h2>Renda fixa</h2>
        </div>
        <div className="col">
          <img className="rounded" src="https://grafocapital.com.br/wp-content/uploads/2022/02/investimento-thumb.jpg" alt="" />
          <h2>Fundos de investimento</h2>
        </div>
        <div className="col">
          <img className="rounded" src="https://grafocapital.com.br/wp-content/uploads/2022/02/fundos-thumb.jpg" alt="" />
          <h2>Fundos Imobiliários</h2>
        </div> 
        <div className="col">
          <img className="rounded" src="https://grafocapital.com.br/wp-content/uploads/2022/02/acoes.jpg" alt="" />
          <h2>Ações</h2>
        </div>
        <div className="col">
          <img  className="rounded" src="https://grafocapital.com.br/wp-content/uploads/2022/02/esg-thumb.jpg" alt="" />
          <h2>ESG</h2>
        </div>
        
      </div>
</div>

  </section>

}

export default Features