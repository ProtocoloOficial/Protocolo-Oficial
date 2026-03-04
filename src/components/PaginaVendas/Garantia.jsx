import React from 'react';
import './PaginaVendas.css';

const Garantia = () => {
  return (
    <section className="garantia-section">
      <div className="container garantia-container">
        
        {/* Selo de 7 Dias Estilizado */}
        <div className="garantia-seal-wrapper">
          <div className="garantia-circle">
            <span className="garantia-number">7</span>
            <span className="garantia-label">DIAS DE<br/>GARANTIA</span>
          </div>
        </div>

        <div className="garantia-content">
          <h2 className="garantia-headline">
            Garantia de satisfação de 7 dias – <span className="highlight-green">sem risco!</span>
          </h2>
          
          <p className="garantia-description">
            Se você não estiver satisfeito com o protocolo dentro de 7 dias, 
            devolvemos seu dinheiro sem perguntas e sem burocracia. 
            O risco é todo nosso.
          </p>

          <div className="garantia-cta">
            <a href="#oferta" className="btn-outline-green">
              QUERO COMEÇAR SEM RISCO
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Garantia;