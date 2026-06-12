const waNumber = import.meta.env.VITE_WA_NUMBER || '51999999999';
const waMsg = import.meta.env.VITE_WA_MSG_SUNAT || 'Hola, recibí una comunicación de SUNAT y necesito ayuda';
const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`;

const steps = [
  'Nuestros especialistas revisan tu caso de forma detallada.',
  'Revisamos la información y documentos del período indicado en las comunicaciones.',
  'Determinamos la incidencia tributaria y laboral.',
  'Diseñamos el plan de acción.',
  'Elaboramos el escrito de respuesta con el sustento y base legal.',
  'Presentación del escrito por mesa de partes virtual.',
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Sunat() {
  return (
    <section className="sunat-alert">
      <div className="container sec-head-wrap">
        <div className="sec-head">
          <h2>¿Recibiste una comunicación<br/>de SUNAT o de SUNAFIL?</h2>
        </div>
      </div>
      <div className="container sunat-inner">
        <div className="sunat-img">
          <img src="/assets/sunat.jpg" alt="Defensa tributaria SUNAT" />
        </div>
        <div className="sunat-r">
          <p className="sunat-intro">
            Y no sabes qué hacer o cómo responder cartas inductivas, órdenes de pago o coactivas. <strong>Evita problemas futuros.</strong>
          </p>
          <ul className="sunat-steps">
            {steps.map(s => (
              <li key={s}><CheckIcon />{s}</li>
            ))}
          </ul>
          <a className="btn btn-coral sunat-cta" href="#contacto">Solicitar Asesoría</a>
        </div>
      </div>
    </section>
  );
}
