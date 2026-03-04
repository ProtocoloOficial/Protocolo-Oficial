import React from 'react';
import './PaginaVendas.css';
import Livro3D from '../../assets/img/Livro3D.png';

const Oferta = () => {
  return (
    <section className="oferta-section-final" id="oferta">
      {/* Background igual ao Hero para consistência total */}
      <div className="hero-ray"></div> 

      <div className="container oferta-container">
        <h2 className="oferta-headline">
          Recupere seu foco em <span className="highlight-green">21 dias</span> – mesmo se você passar horas no celular
        </h2>

        <div className="oferta-main-content">
          {/* Imagem do E-book com o Blush Verde */}
          <div className="oferta-visual-box">
            <div className="blush-light"></div>
            <img src={Livro3D} alt="E-book Protocolo 21 Dias" className="oferta-ebook-img" />
          </div>

          {/* Bloco de Preço e Ação */}
          <div className="oferta-action-box">
            <div className="price-wrapper">
              <span className="price-old">De R$ 97</span>
              <div className="price-new">
                por apenas <span className="price-value">R$ 47</span>
              </div>
              <p className="urgencia-red">Oferta por tempo limitado!</p>
            </div>

            <a href="https://pay.cakto.com.br/35mjinm_793023" className="btn-oferta-outline">
              Garanta agora seu protocolo
            </a>

            {/* Início da alteração: Container para as informações de rodapé */}
            <div className="oferta-footer-info">
              <div className="garantia-footer-text">
                🛡️ Garantia de satisfação de 7 dias – sem risco!
              </div>
              <div className="garantia-footer-text">
                📩 Envio Imediato por E-mail
              </div>
            </div>
            {/* Fim da alteração */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oferta;