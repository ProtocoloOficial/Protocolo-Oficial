import React, { useState } from 'react';
import './Perguntas.css';

const questions = [
  { id: 1, question: "Qual sua faixa etária?", options: ["Menos de 18 anos", "18 a 22 anos", "23 a 26 anos", "27 a 30 anos", "Mais de 30 anos"] },
  { id: 2, question: "Quanto tempo você passa no celular todos os dias?", options: ["Menos de 2 horas", "2 a 4 horas", "4 a 6 horas", "Mais de 6 horas"] },
  { id: 3, question: "Você consegue se concentrar nos estudos ou trabalho por mais de 1 hora sem distrações?", options: ["Sempre consigo", "Às vezes consigo", "Raramente consigo", "Nunca consigo"] },
  { id: 4, question: "Como você se sente quando percebe que passou horas no Instagram/TikTok sem produzir nada?", options: ["Levemente culpado", "Meio culpado", "Muito culpado", "Desesperado"] },
  { id: 5, question: "Qual seu nível de produtividade atualmente?", options: ["Muito bom, estou no controle", "Razoável, consigo produzir às vezes", "Baixo, me sinto sempre atrasado", "Muito baixo, nada sai como planejado"] },
  { id: 6, question: "Você já tentou algum método para se livrar da dopamina barata?", options: ["Sim, e funcionou", "Sim, mas não funcionou", "Já tentei algumas vezes", "Nunca tentei"] },
  { id: 7, question: "Você gostaria de ter um plano claro de 21 dias para recuperar foco e disciplina?", options: ["Sim, muito", "Sim, talvez", "Não tenho certeza", "Não, estou bem como está"] },
];

const Perguntas = ({ onFinish }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleOptionClick = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish(); // Chama a função que muda para o Carregamento
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="progress-bar-container">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      
      <div className="question-card">
        <span className="step-indicator">Pergunta {currentStep + 1} de {questions.length}</span>
        <h1>{questions[currentStep].question}</h1>
        
        <div className="options-grid">
          {questions[currentStep].options.map((option, index) => (
            <button key={index} className="option-button" onClick={handleOptionClick}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perguntas;