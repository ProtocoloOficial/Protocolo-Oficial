import React from 'react';
import './PaginaVendas.css';
// Importe ícones se estiver usando react-icons, ou usaremos spans estilizados
import { FiXCircle } from 'react-icons/fi'; 

const Problema = () => {
  const problemas = [
    "Horas perdidas em redes sociais",
    "Dificuldade em manter disciplina",
    "Sentimento constante de culpa e frustração",
    "Nunca consegue completar tarefas importantes"
  ];

  return (
    <section className="problema-section">
      <div className="container">
        <div className="problema-grid">
          
          <div className="problema-content">
            <h2 className="problema-headline">
              Você passa horas no celular e sente que <span className="highlight-green">nunca consegue se concentrar?</span>
            </h2>
            
            <p className="problema-subheadline">
              Você quer estudar, trabalhar ou produzir, mas sempre acaba distraído? 
              Sente culpa e frustração todos os dias ao ver o tempo escorrer pelas mãos?
            </p>

            <ul className="problema-list">
              {problemas.map((item, index) => (
                <li key={index} className="problema-item">
                  <span className="problema-icon">✕</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="problema-cta-wrapper">
              <a href="#oferta" className="btn-discreto">
                QUERO SAIR DESSE CICLO
              </a>
            </div>
          </div>

          <div className="problema-visual">
            {/* Ilustração abstrata de distração em SVG ou CSS */}
            <div className="abstract-distraction">
              <div className="circle-ring"></div>
              <div className="circle-ring-inner"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problema;