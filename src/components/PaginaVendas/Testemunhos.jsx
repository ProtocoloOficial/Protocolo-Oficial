import React from 'react';
import './PaginaVendas.css';

// Importando as imagens da sua pasta assets
import IM1 from '../../assets/img/im1.jpeg'; // Larissa
import IM2 from '../../assets/img/im2.jpeg'; // Cauã
import IM3 from '../../assets/img/im3.jpeg'; // Mateus

const Testemunhos = () => {
  const depoimentos = [
    {
      foto: IM1,
      nome: "Larissa Garcia",
      texto: "Antes eu me sentia perdida, sem foco para estudos ou trabalho. Com esse método, finalmente consigo organizar meu dia e cumprir tudo sem culpa. Só tenho a agradecer por ter encontrado isso!"
    },
    {
      foto: IM2,
      nome: "Cauã Machado",
      texto: "Eu passava horas no celular. Isso não estava me fazendo bem! Agora aplicando o protocolo, consigo me concentrar nos estudos e nas tarefas que realmente importam. Valeu demais!"
    },
    {
      foto: IM3,
      nome: "Mateus Silva",
      texto: "Nunca imaginei que um método tão simples pudesse fazer tanta diferença. Estou mais focado, produtivo e minha rotina melhorou completamente. Gratidão total!"
    }
  ];

  return (
    <section className="testemunhos-section">
      <div className="container">
        <h2 className="testemunhos-title">
          Depoimentos reais de quem teve <span className="highlight-green"> seu foco restaurado</span>
        </h2>
        
        <div className="testemunhos-grid">
          {depoimentos.map((item, index) => (
            <div key={index} className="testemunho-card">
              <div className="testemunho-header">
                <div className="testemunho-info">
                  <h3 className="testemunho-nome">{item.nome}</h3>
                  <div className="testemunho-stars">⭐⭐⭐⭐⭐</div>
                </div>
                <img src={item.foto} alt={item.nome} className="testemunho-img" />
              </div>
              <p className="testemunho-texto">"{item.texto}"</p>
            </div>
          ))}
        </div>

        {/* Adição do Botão Estratégico */}
        <div className="testemunhos-cta">
          <a href="#oferta" className="btn-discreto">
            Também quero esse resultado
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testemunhos;