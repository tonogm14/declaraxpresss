const items = [
  'Elaboración y Presentación de Escrito SUNAT / SUNAFIL',
  'Análisis, Cálculo y Gradualidad de deuda Tributaria',
  'Fraccionamiento Tributario',
  'Inscripción en REMYPE Laboral',
  'Suspensión de 4° Categoría',
  'Suspensión de RUC',
  'Alta T-Registro',
  'Regularización Libros Electrónicos',
  'Regularización de declaraciones (PDT) mensuales y anuales',
  'Elaboración de Planilla de Trabajadores',
  'Elaboración de liquidación de beneficios sociales de personal',
  'Proyección de cálculo de 5° Categoría',
  'Administración de Nóminas',
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function OtrosServicios() {
  return (
    <section className="otros-serv" id="otros-servicios">
      <div className="container sec-head-wrap">
        <div className="sec-head">
          <h2>Otros Servicios Contables</h2>
        </div>
      </div>
      <div className="container otros-serv-inner">
        <div className="otros-serv-img">
          <img src="/assets/otros-servicios.jpg" alt="Otros Servicios Contables" />
        </div>
        <div className="otros-serv-r">
          <ul className="otros-serv-list">
            {items.map(item => (
              <li key={item}><CheckIcon />{item}</li>
            ))}
          </ul>
          <a className="btn btn-coral" href="#contacto" style={{ marginTop: '28px', display: 'inline-flex' }}>Solicitar Asesoría</a>
        </div>
      </div>
    </section>
  );
}
