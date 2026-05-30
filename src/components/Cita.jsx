export default function Cita() {
  return (
    <section className="cita">
      <div className="container cita-inner">
        <div className="cita-l">
          <h2>Agenda una cita.</h2>
          <p className="cita-tagline">
            Resolvemos tus <span className="c-navy">dudas</span> y <span className="c-coral">consultas</span>.
          </p>
        </div>
        <div className="cita-r">
          <p className="cita-desc">
            Bríndanos tus datos para que un asesor se ponga en contacto contigo y pueda resolver todas tus dudas o consultas.
          </p>
          <a className="btn btn-navy cita-btn" href="#contacto">
            Agendar cita
          </a>
        </div>
      </div>
    </section>
  );
}
