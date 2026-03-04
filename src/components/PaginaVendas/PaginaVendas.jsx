import React, { useEffect } from 'react';
import './PaginaVendas.css';

// Importando os módulos
import Hero from './Hero';
import Problema from './Problema';
import Beneficios from './Beneficios';
import Metodo from './Metodo';
import Testemunhos from './Testemunhos';
import Oferta from './Oferta';
import Garantia from './Garantia';
import PerguntasFrequentes from './PerguntasFrequentes';
import Rodape from './Rodape';

const PaginaVendas = () => {
  
  // Script para scroll suave se algum link interno for clicado
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="lp-container">
      {/* 1. Dobra Principal */}
      <Hero />

      {/* 2. O Problema (Agitação) */}
      <Problema /> 

      {/* 3. Benefícios */}
      <Beneficios /> 

      {/* 4. O Método / Como funciona */}
      {<Metodo /> }

      {/* 5. Prova Social */}
      <Testemunhos />

      {/* 6. A Oferta Irresistível */}
      <Oferta />

      {/* 7. Garantia de Risco Zero */}
      {<Garantia />}

      {/* 8. FAQ */}
      {<PerguntasFrequentes />}

      {/* 9. Rodape */}
      {<Rodape/>}

      {/* Footer Simples */}
      <footer className="lp-footer">
        <p>&copy; 2026 Protocolo Foco Absoluto. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
};

export default PaginaVendas;