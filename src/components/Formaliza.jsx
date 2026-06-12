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
      <div className="container sec-head-wrap">
        <div className="sec-head sec-head--light">
          <h2>Constituye tu empresa</h2>
        </div>
      </div>
      <div className="container formaliza-inner">
        <div className="formaliza-img">
          <img src="/assets/empresa.jpg" alt="Constituye tu empresa hoy" />
        </div>
        <div className="formaliza-r">
          <h3 className="sec-sub">Formaliza fácil y rápido sin moverte de tu negocio.</h3>
          <p className="formaliza-precio">Desde <strong>S/ 370</strong> — Te asesoramos en:</p>
          <ul className="formaliza-list">
            {items.map(item => (
              <li key={item}><CheckIcon />{item}</li>
            ))}
          </ul>
          <a className="btn btn-coral formaliza-cta" href="#contacto">Solicitar Asesoría</a>
        </div>
      </div>
    </section>
  );
}
