import React, { useState, useEffect } from 'react';
import './Carregando.css';

const Carregando = ({ onComplete }) => {
  const [texto, setTexto] = useState('Analisando suas respostas...');

  useEffect(() => {
    // Troca o texto após 2.5 segundos
    const textTimer = setTimeout(() => {
      setTexto('Preparando seu protocolo personalizado...');
    }, 2500);

    // Finaliza a tela após 5 segundos
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="potion-container">
        <div className="potion-flask">
          <div className="potion-liquid"></div>
        </div>
        <div className="potion-bubbles">
          <span></span><span></span><span></span>
        </div>
      </div>
      <h2 className="loading-text">{texto}</h2>
    </div>
  );
};

export default Carregando;