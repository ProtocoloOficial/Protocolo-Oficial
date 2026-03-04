import React from 'react';
import './PaginaVendas.css';
import { FiCheckCircle, FiLock, FiZap, FiLayout } from 'react-icons/fi';

const Bonus = () => {
  return (
    <section className="bonus-section-v2">
      <div className="container">
        
        <div className="bonus-header-v2">
          <span className="bonus-tag">OFERTA ESPECIAL</span>
          <h2 className="bonus-headline-v2">
            BÔNUS EXCLUSIVOS <br />
            <span className="text-neon-green">PROTOCOLO 21D</span>
          </h2>
          <p className="bonus-sub">Ferramentas de elite para quem não aceita menos que o foco total.</p>
        </div>

        <div className="bonus-list-wrapper">
          
          {/* BÔNUS 1 */}
          <div className="bonus-row">
            <div className="bonus-icon-side">
              <FiCheckCircle />
            </div>
            <div className="bonus-text-side">
              <h3>Checklist Diário de <span className="text-green">Execução</span></h3>
              <p>Aplique o protocolo todos os dias com clareza. Defina prioridades e transforme <span className="text-white">disciplina</span> em padrão automático.</p>
            </div>
          </div>

          {/* BÔNUS 2 */}
          <div className="bonus-row">
            <div className="bonus-icon-side">
              <FiLock />
            </div>
            <div className="bonus-text-side">
              <h3>Guia Técnico de <span className="text-green">Blindagem</span></h3>
              <p>Configure seu smartphone para bloquear estímulos desnecessários. O <span className="text-white">controle</span> total do seu tempo na palma da mão.</p>
            </div>
          </div>

          {/* BÔNUS 3 */}
          <div className="bonus-row">
            <div className="bonus-icon-side">
              <FiZap />
            </div>
            <div className="bonus-text-side">
              <h3>Método Reset <span className="text-green">5 Minutos</span></h3>
              <p>Perdeu o foco? Use o protocolo rápido para <span className="text-white">recuperar</span> a concentração e retomar o controle imediatamente.</p>
            </div>
          </div>

          {/* BÔNUS 4 */}
          <div className="bonus-row">
            <div className="bonus-icon-side">
              <FiLayout />
            </div>
            <div className="bonus-text-side">
              <h3>Guia de Ambiente <span className="text-green">Alta Performance</span></h3>
              <p>Organize seu espaço físico para favorecer o foco profundo. Ajustes que impulsionam seus <span className="text-white">resultados</span>.</p>
            </div>
          </div>

        </div>

        <div className="bonus-footer-v2">
          <p>⬇️ O acesso imediato a tudo isso está disponível logo abaixo.</p>
        </div>

      </div>
    </section>
  );
};

export default Bonus;