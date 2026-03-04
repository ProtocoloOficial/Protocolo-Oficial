import React from 'react';
import './PaginaVendas.css';
// Importando a imagem do seu diretório assets
import Livro3D from '../../assets/img/Livro3D.png'; 

const Metodo = () => {
  const etapas = [
    {
      titulo: "Diagnóstico do foco",
      desc: "Entenda exatamente onde você perde mais tempo e as ferramentas para recuperar o controle imediato."
    },
    {
      titulo: "Rotina diária de foco",
      desc: "Técnicas práticas e validadas para manter sua atenção blindada e uma disciplina inabalável."
    },
    {
      titulo: "Estratégias de produtividade",
      desc: "Métodos rápidos e neurocientíficos para otimizar seus estudos e aniquilar tarefas complexas."
    }
  ];

  return (
    <section className="metodo-section">
      <div className="container metodo-grid">
        
        {/* Lado Esquerdo: Conteúdo e Cards */}
        <div className="metodo-content">
          <h2 className="metodo-headline">
            Como funciona o <span className="highlight-green">Protocolo 21 Dias</span>: o passo a passo para <span className="highlight-green">recuperar seu foco</span>
          </h2>
          <p className="metodo-subheadline">
            Descubra o método simples e comprovado que transforma sua rotina, 
            mesmo que você hoje perca horas em distrações no celular.
          </p>

          <div className="etapas-container">
            {etapas.map((etapa, index) => (
              <div key={index} className="etapa-card">
                <span className="etapa-number">0{index + 1}</span>
                <div className="etapa-info">
                  <h3>{etapa.titulo}</h3>
                  <p>{etapa.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="metodo-cta-wrapper">
            <a href="#oferta" className="hero-cta">
              Quero meu protocolo agora
            </a>
          </div>
        </div>

        {/* Lado Direito: Imagem do Livro 3D */}
        <div className="metodo-visual">
          <img src={Livro3D} alt="E-book Protocolo 21 Dias" className="livro-mockup" />
          <div className="livro-shadow"></div>
        </div>

      </div>
    </section>
  );
};

export default Metodo;