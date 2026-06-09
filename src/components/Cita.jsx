export default function Cita() {
  return (
    <section className="cita">
      <div className="container cita-inner">
        <div className="cita-l">
          <h3 className="cita-h">Agenda una <em>cita</em>.</h3>
          <p className="cita-tagline">
            Resolvemos tus dudas y consultas.
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
