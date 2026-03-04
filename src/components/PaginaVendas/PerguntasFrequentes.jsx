import React, { useState } from 'react';
import './PaginaVendas.css';
import { FiChevronDown } from 'react-icons/fi';

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (i) => {
    if (active === i) {
      return setActive(null);
    }
    setActive(i);
  };

  const perguntas = [
    {
      q: "Como eu recebo o acesso ao Protocolo 21D?",
      a: "Assim que o pagamento for confirmado, você receberá automaticamente um e-mail com o link de acesso imediato ao Protocolo 21D e a todos os bônus inclusos. Caso não encontre o e-mail na caixa de entrada, verifique também as pastas de spam ou promoções. O envio é feito no mesmo dia, de forma automática."
    },
    {
      q: "Quanto tempo leva para ver resultados com o protocolo?",
      a: "Você começará a perceber melhorias na concentração e foco já nos primeiros dias, e resultados completos em até 21 dias."
    },
    {
      q: "Preciso de algum equipamento especial?",
      a: "Não. Tudo o que você precisa é seguir nosso protocolo passo a passo, com materiais e dicas incluídos no manual digital."
    },
    {
      q: "E se eu não ficar satisfeito com minha compra?",
      a: "Sem problemas! Você tem 7 dias de garantia para pedir reembolso total, sem perguntas."
    },
    {
      q: "Posso fazer o protocolo se passo horas no celular?",
      a: "Sim! Nosso protocolo foi desenvolvido justamente para funcionar mesmo se você usa o celular constantemente."
    },
    {
      q: "O protocolo é indicado para qualquer idade?",
      a: "Sim! Ele foi pensado para jovens e adultos que querem recuperar foco e produtividade de forma prática."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container faq-container">
        <h2 className="faq-title">Perguntas <span className="highlight-green">Frequentes</span></h2>
        
        <div className="faq-list">
          {perguntas.map((item, i) => (
            <div key={i} className={`faq-item ${active === i ? 'active' : ''}`} onClick={() => toggle(i)}>
              <div className="faq-question">
                <h3>{item.q}</h3>
                <FiChevronDown className="faq-icon" />
              </div>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;