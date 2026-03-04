import React from 'react';
import './PaginaVendas.css';
// Importando a imagem do seu diretório assets
import Livro3D from '../../assets/img/Livro3D.png'; 

const Metodo = () => {
  const etapas = [
    {
      titulo: "Cérebro Superestimulado",
      desc: "Entenda exatamente por que sua mente perdeu a capacidade de foco profundo e como os estímulos rápidos estão sabotando sua motivação sem que você perceba."
    },
    {
      titulo: "Desintoxicação Neural",
      desc: "Um protocolo estruturado para reduzir a sobrecarga mental e restaurar sua sensibilidade natural ao foco e à disciplina."
    },
    {
      titulo: "Treinamento de Foco",
      desc: "Técnicas práticas e progressivas para reconstruir sua capacidade de concentração e manter atenção profunda por longos períodos."
    },
    {
      titulo: "Sistema Anti-Recaída",
      desc: "Um mecanismo estratégico para impedir que você volte aos antigos padrões de distração e procrastinação."
    },
    {
      titulo: "Consolidação de Hábito",
      desc: "Transforme esforço em identidade e construa um padrão mental estável que mantém seu foco no longo prazo."
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
              ESTOU PRONTO PARA COMEÇAR
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