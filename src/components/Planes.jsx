const waNumber = import.meta.env.VITE_WA_NUMBER || '51999999999';
const waUrl = (msg) => `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const plans = [
  {
    cls: 'plan-empr',
    name: 'Emprendedor Inicial',
    tag: 'Negocios con ventas anuales de hasta S/ 100,000. Máximo 50 comprobantes por mes.',
    price: '170',
    cta: { label: 'Elegir plan', cls: 'btn-ghost', msgEnv: 'VITE_WA_MSG_EMPR' },
    meta: 'Ventas anuales hasta S/100,000',
    features: [
      'Sólo Régimen Especial',
      'Proceso y registro de comprobantes de compra y venta en sistema contable',
      'Informe mensual de cálculo de IGV / I.R.',
      'Elaboración y presentación PDT 621 IGV – I.R.',
      'Incluye facturas, boletas, notas de crédito y débito (emitidas y recibidas)',
    ],
  },
  {
    cls: 'plan-plata',
    name: 'Emprendedor Avanzado',
    tag: 'Negocios con ventas anuales de hasta S/ 250,000. Máximo 150 comprobantes por mes.',
    price: '270',
    cta: { label: 'Elegir plan', cls: 'btn-navy', msgEnv: 'VITE_WA_MSG_PLATA' },
    meta: 'Ventas anuales hasta S/250,000',
    features: [
      'Todos los Regímenes Tributarios',
      'Proceso y registro de comprobantes de compra y venta en sistema contable',
      'Informe mensual de cálculo de IGV / I.R.',
      'Elaboración y presentación PDT 621 IGV – I.R.',
      'Presentación mensual de Libros Electrónicos (PLE) de Compra y Venta',
      'Declaración de Recibos por Honorarios vía PDT 601 PLAME',
      'Revisión semanal de buzón electrónico SUNAT y SUNAFIL',
      'Incluye facturas, boletas, notas de crédito y débito, y recibos por honorarios',
    ],
  },
  {
    cls: 'plan-oro',
    badge: 'Más popular ★',
    name: 'MYPE Oro',
    tag: 'Negocios con ventas anuales de hasta S/ 350,000. Máximo 250 comprobantes por mes.',
    price: '370',
    cta: { label: 'Elegir plan', cls: 'btn-coral', msgEnv: 'VITE_WA_MSG_ORO' },
    meta: 'Ventas anuales hasta S/350,000',
    features: [
      'Todos los Regímenes Tributarios',
      'Proceso y registro de comprobantes de compra y venta en sistema contable',
      'Informe mensual de cálculo de IGV / I.R.',
      'Elaboración y presentación PDT 621 IGV – I.R.',
      'Presentación mensual de Libros Electrónicos (PLE) de Compra y Venta',
      'Declaración de Recibos por Honorarios vía PDT 601 PLAME',
      'Revisión semanal de buzón electrónico SUNAT y SUNAFIL',
      'Elaboración de Planilla, PDT 601 y AFPnet — un (01) trabajador',
      'Incluye facturas, boletas, notas de crédito y débito, y recibos por honorarios',
    ],
  },
  {
    cls: 'plan-diam',
    name: 'MYPE Diamante',
    tag: 'Negocios con ventas anuales de hasta S/ 500,000. Máximo 400 comprobantes por mes.',
    price: '700',
    cta: { label: 'Elegir plan', cls: 'btn-navy', msgEnv: 'VITE_WA_MSG_DIAM' },
    meta: 'Ventas anuales hasta S/500,000',
    features: [
      'Todos los Regímenes Tributarios',
      'Proceso y registro de comprobantes de compra y venta en sistema contable',
      'Informe mensual de cálculo de IGV / I.R.',
      'Elaboración y presentación PDT 621 IGV – I.R.',
      'Presentación mensual de Libros Electrónicos (PLE) de Compra y Venta',
      'Declaración de Recibos por Honorarios vía PDT 601 PLAME',
      'Revisión diaria de buzón electrónico SUNAT y SUNAFIL',
      'Elaboración de Planilla, PDT 601 y AFPnet — dos (02) trabajadores',
      'Registro y conciliación bancaria mensual, máximo tres (03) cuentas, incluye cuenta detracción Banco de la Nación',
      'Registro de provisiones contables y operaciones con no domiciliados',
      'Incluye facturas, boletas, notas de crédito y débito, y recibos por honorarios',
    ],
  },
];

function PlanCard({ plan }) {
  const { cls, badge, name, tag, price, cta, meta, features } = plan;
  const msg = import.meta.env[cta.msgEnv] || `Hola, estoy interesado en el plan ${name}`;
  return (
    <article className={`plan ${cls}`}>
      {badge && <span className="badge">{badge}</span>}
      <header>
        <div className="plan-name">{name}</div>
        <p className="plan-tag">{tag}</p>
        <div className="plan-price">
          <span className="cur">S/</span>
          <span className="amt">{price}</span>
          <span className="per">/mes</span>
        </div>
      </header>
      <ul className="plan-features">
        {features.map(f => (
          <li key={f}><CheckIcon />{f}</li>
        ))}
      </ul>
      <div className="cta-row">
        <a className={`btn ${cta.cls}`} href={waUrl(msg)} target="_blank" rel="noopener noreferrer">{cta.label}</a>
        <p className="plan-meta">{meta}</p>
      </div>
    </article>
  );
}

const ArrowIcon = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Planes() {
  return (
    <section className="planes" id="planes">
      <div className="planes-band">
        <div className="planes-band-inner container">
          <h2>Elige tu <em>Plan Contable</em></h2>
          <p>Tenemos planes acordes a cada empresa. Consulta por tu plan.</p>
        </div>
      </div>
      <div className="planes-grid">
        {plans.map(p => <PlanCard key={p.name} plan={p} />)}
      </div>
    </section>
  );
}
