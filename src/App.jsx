import React, { useState } from 'react';
import Perguntas from './components/Quiz/Perguntas';
import Carregando from './components/Carregando/Carregando';
import PaginaVendas from './components/PaginaVendas/PaginaVendas';
import './App.css';

function App() {
  // Estados: 'quiz', 'loading', 'sales'
  const [fase, setFase] = useState('quiz');

  const finalizarQuiz = () => {
    setFase('loading');
  };

  const mostrarVendas = () => {
    setFase('sales');
  };

  return (
    <div className="App">
      {fase === 'quiz' && <Perguntas onFinish={finalizarQuiz} />}
      
      {fase === 'loading' && <Carregando onComplete={mostrarVendas} />}
      
      {fase === 'sales' && <PaginaVendas />}
    </div>
  );
}

export default App;