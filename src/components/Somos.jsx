const items = [
  'Registros contables y tributarios al día',
  'Información en línea',
  'Informe de impuestos mensuales',
  'Declaración oportuna de impuestos SUNAT',
  'ERP contable con IA y sistema SIRE con certificación de ciberseguridad',
  'Honorarios a la medida de tu negocio',
  'Te ayudamos a evitar sanciones y multas de SUNAT.',
];

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Somos() {
  return (
    <section className="somos" id="somos">
      <div className="container">
        <div className="sec-head">
          <h2>¿Qué hacemos?</h2>
        </div>
        <div className="somos-grid">
          <div className="somos-photo">
            <img className="somos-photo-img" src="/assets/team-photo.png" alt="Equipo Declara Xpress" />
            <div className="somos-card-floating">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="t">Tu equipo asignado</p>
                <p className="d">Especialistas MYPE · Lima</p>
              </div>
            </div>
          </div>

          <div className="somos-r">
            <p className="body">
              En Declara Xpress.com queremos colaborar con tu empresa y ser parte de tu éxito. Te aseguramos una contabilidad optimizada con IA en tus operaciones y una oportuna declaración de impuestos.
            </p>
            <ul className="somos-items">
              {items.map(item => (
                <li key={item}><CheckIcon />{item}</li>
              ))}
              <li><CheckIcon />Nuestros planes son ideados para cualquier tipo de empresa, desde las más pequeñas hasta empresas medianas.</li>
            </ul>
            <a className="btn btn-coral somos-cta" href="#contacto">Solicitar Asesoría</a>
          </div>
        </div>
      </div>
    </section>
  );
}
