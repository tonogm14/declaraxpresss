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
  return (
    <section className="pasos">
      <div className="container pasos-inner">
        <h2 className="pasos-title">3 simples pasos para <em>trabajar juntos</em>.</h2>
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
      </div>
    </section>
  );
}
