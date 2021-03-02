import React from 'react';

function Card(props) {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12">
               <div className="card">
                  <div className="card-body">Esse é o corpo do meu card!</div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-12">
               <div className="card" style={{ width: '20rem' }}>
                  <div className="card-body">
                     <h4 className="card-title">Título do Cartão</h4>
                     <h6 className="card-subtitle text-muted">
                        Subtítulo do cartão
                     </h6>
                     <p className="card-text">
                        Testo que vai entrar no cartão e vamos continuar falando
                        pelo cartão aque estamos usando aqui no bootstrap!
                     </p>
                     <a href="#" className="card-link">
                        Link do Cartão
                     </a>
                     <a href="#" className="card-link">
                        Outro Link
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-12">
               <div className="card" style={{ width: '20rem' }}>
                  <img src="img/carrossel1.png" className="card-body" />
                  <div className="card-body">
                     <h4 className="card-title">Título do Cartão</h4>
                     <h6 className="card-subtitle text-muted">
                        Subtítulo do cartão
                     </h6>
                     <p className="card-text">
                        Testo que vai entrar no cartão e vamos continuar falando
                        pelo cartão aque estamos usando aqui no bootstrap!
                     </p>
                     <a href="#" className="card-link">
                        Link do Cartão
                     </a>
                     <a href="#" className="card-link">
                        Outro Link
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Card;
