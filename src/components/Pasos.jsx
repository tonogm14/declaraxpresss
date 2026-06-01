import { useState } from 'react';

const pasos = [
  {
    num: '1',
    color: 'coral',
    title: 'Elige tu plan',
    desc: 'De acuerdo al monto de las ventas anuales de tu negocio y la cantidad de comprobantes de ventas, compras y honorarios. Nuestros planes se adaptan a tu negocio — escríbenos o llámanos con confianza.',
  },
  {
    num: '2',
    color: 'navy',
    title: 'Conversemos',
    desc: 'Dale clic al botón "Elegir plan" y te comunicará con un asesor vía WhatsApp que atenderá tus consultas y conocerá mejor tu empresa.',
  },
  {
    num: '3',
    color: 'coral',
    title: '¡A trabajar!',
    desc: 'Envía el voucher del primer depósito y comenzaremos a preparar tu declaración. ¡Ahora somos un equipo!',
  },
];

export default function Pasos() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => Math.max(0, i - 1));
  const next = () => setIdx(i => Math.min(pasos.length - 1, i + 1));
  const { num, color, title, desc } = pasos[idx];

  return (
    <section className="pasos">
      <div className="container pasos-inner">
        <h3 className="pasos-title">3 simples pasos para <em>trabajar juntos</em>.</h3>

        {/* Desktop — fila estática */}
        <div className="pasos-row">
          {pasos.map(({ num, color, title, desc }, i) => (
            <div key={num} className="paso">
              {i < pasos.length - 1 && <div className="paso-line" aria-hidden="true" />}
              <div className={`paso-circle paso-circle--${color}`}>{num}</div>
              <p className="paso-label">{title}</p>
              <p className="paso-desc">{desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile — slider */}
        <div className="pasos-slider">
          <div className="paso paso--slide">
            <div className={`paso-circle paso-circle--${color}`}>{num}</div>
            <p className="paso-label">{title}</p>
            <p className="paso-desc">{desc}</p>
          </div>
          <div className="pasos-slider-controls">
            <button className="testi-arrow" onClick={prev} disabled={idx === 0} aria-label="Anterior">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="testi-dots">
              {pasos.map((_, i) => (
                <button key={i} className={`testi-dot${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)} aria-label={`Paso ${i + 1}`} />
              ))}
            </div>
            <button className="testi-arrow" onClick={next} disabled={idx === pasos.length - 1} aria-label="Siguiente">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
