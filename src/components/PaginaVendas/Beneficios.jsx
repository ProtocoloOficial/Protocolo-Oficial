import React from 'react';
import './PaginaVendas.css';
import { FiTarget, FiTrendingUp, FiClock, FiCheckCircle, FiZap } from 'react-icons/fi';

const Beneficios = () => {
  const listaBeneficios = [
    {
      titulo: "Foco Restaurado",
      descricao: "Concentre-se nos estudos, trabalhos ou projetos sem se perder em redes sociais.",
      icon: <FiTarget />
    },
    {
      titulo: "Mais Produtividade",
      descricao: "Cada hora que você gastaria no celular se transforma em resultados reais.",
      icon: <FiTrendingUp />
    },
    {
      titulo: "Controle do Seu Tempo",
      descricao: "Aprenda a organizar seu dia e eliminar o ciclo de distração infinita.",
      icon: <FiClock />
    },
    {
      titulo: "Menos Culpa",
      descricao: "Sinta satisfação ao cumprir suas metas e deixar a frustração de lado.",
      icon: <FiCheckCircle />
    },
    {
      titulo: "Clareza Mental",
      descricao: "Tome decisões rápidas e enfrente tarefas complexas com confiança.",
      icon: <FiZap />
    }
  ];

  return (
    <section className="beneficios-section">
      <div className="container">
        <header className="beneficios-header">
          <h2 className="beneficios-headline">
            <span className="highlight-green">Recupere seu foco</span> e transforme suas horas perdidas em resultados reais
          </h2>
          <p className="beneficios-subheadline">
            Siga o protocolo de 21 dias e veja como suas manhãs, estudos e projetos fluem 
            sem distrações do celular. Transforme cada hora em produtividade e resultados concretos.
          </p>
        </header>

        <div className="beneficios-grid">
          {listaBeneficios.map((ben, index) => (
            <div key={index} className="beneficio-card">
              <div className="beneficio-icon-wrapper">
                {ben.icon}
              </div>
              <h3 className="beneficio-card-title">{ben.titulo}</h3>
              <p className="beneficio-card-desc">{ben.descricao}</p>
            </div>
          ))}
        </div>

        {/* Novo botão adicionado conforme solicitado */}
        <div className="beneficios-cta-container">
          <a href="#oferta" className="hero-cta">
            COMECE A RECUPERAR SEU FOCO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;