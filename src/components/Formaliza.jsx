const waNumber = import.meta.env.VITE_WA_NUMBER || '51999999999';
const waMsg = import.meta.env.VITE_WA_MSG_FORMALIZA || 'Hola, quiero formalizar mi empresa con Declara Xpress';
const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`;

const items = [
  'Escoger el tipo de empresa',
  'Escoger régimen tributario que más convenga para tu negocio',
  'Obligaciones tributarias e infracciones',
  'Reserva de nombre (razón social)',
  'Elaboración de minuta estándar',
  'Gastos notariales y registrales (SUNARP)',
  'Acompañamiento en toma de firmas en notaría',
  'Inscripción de RUC',
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Formaliza() {
  return (
    <section className="formaliza">
      <div className="container formaliza-inner">
        <div className="formaliza-img">
          <img src="/assets/team-photo.png" alt="Constituye tu empresa hoy" />
        </div>
        <div className="formaliza-r">
          <span className="eyebrow eyebrow--on-dark"><span className="dot"></span>Constitución de empresas</span>
          <h2>Constituye tu empresa <em>Hoy</em></h2>
          <p className="formaliza-sub">Formaliza fácil y rápido sin moverte de tu negocio.</p>
          <p className="formaliza-precio">Desde <strong>S/ 370</strong> — Te asesoramos en:</p>
          <ul className="formaliza-list">
            {items.map(item => (
              <li key={item}><CheckIcon />{item}</li>
            ))}
          </ul>
          <a className="btn btn-coral formaliza-cta" href={waUrl} target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.6-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4C8.6 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
            </svg>
            Formalizar mi empresa
          </a>
        </div>
      </div>
    </section>
  );
}
