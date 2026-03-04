import React from 'react';
import './PaginaVendas.css';
import { FiInstagram, FiMail, FiLock } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

const Rodape = () => {
  return (
    <footer className="rodape-section">
      <div className="container rodape-container">
        
        {/* Bloco de Contato e Redes */}
        <div className="rodape-contato">
          <div className="contato-item">
            <FiMail className="icon-verde" />
            <span>contato@protocolo21dias.com</span>
          </div>
          <div className="redes-sociais">
            <a href="https://instagram.com/protocolo21dias" target="_blank" rel="noreferrer">
              <FiInstagram /> @protocolo21dias
            </a>
            <a href="https://tiktok.com/@protocolo21dias" target="_blank" rel="noreferrer">
              <FaTiktok /> @protocolo21dias
            </a>
          </div>
        </div>

        {/* Garantia e Selos de Pagamento */}
        <div className="rodape-seguranca">
          <p className="seguranca-texto">
            Garantia de 7 dias de satisfação <span className="divisor">|</span> Pagamento 100% seguro
          </p>
          
          <div className="cartoes-icons">
            <div className="card-pill">VISA</div>
            <div className="card-pill">MASTERCARD</div>
            <div className="card-pill">ELO</div>
            <div className="card-pill">PIX</div>
            <div className="card-pill">BOLETO</div>
            <div className="card-pill">AMERICAN EXPRESS</div>
            <div className="card-pill ssl">
              <FiLock style={{marginRight: '5px'}} /> SSL SECURE
            </div>
          </div>
        </div>

        <hr className="rodape-divider" />

        {/* Direitos e Legal */}
        <div className="rodape-legal">
          <p>© 2026 Protocolo 21 Dias. Todos os direitos reservados.</p>
          <div className="legal-links">
            <a href="#">Políticas de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Rodape;