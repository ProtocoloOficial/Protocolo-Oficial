import React from 'react';
import './PaginaVendas.css'; // Usaremos o CSS centralizado da página de vendas

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Elemento decorativo do raio de fundo */}
      <div className="hero-ray"></div>

      <div className="hero-content">
        <h1 className="hero-headline">
          Recupere seu foco em <span className="highlight-green">21 dias</span> — mesmo se você passa horas no celular
        </h1>
        
        <p className="hero-subheadline">
          Siga nosso Sistema Anti-Dopamina Barata, um manual completo para jovens 
          que querem retomar foco, disciplina e produtividade todos os dias.
        </p>

        <a href="#oferta" className="hero-cta">
          Quero meu protocolo agora
        </a>
      </div>
    </section>
  );
};

export default Hero;