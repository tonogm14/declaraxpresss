export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-bg">
        <img src="/assets/hero-new.jpg" alt="" className="hero-bg-img" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-inner">
        <h1>Contabilidad Optimizada con <em>IA</em> para MYPES, Emprendedores y Profesionales Independientes en Lima, Perú.</h1>
        <p className="hero-subtitle">En DeclaraXpress.com tenemos planes de servicios contables para tu negocio desde <strong>S/170 al mes</strong>, incluido IGV.</p>
        <a className="btn btn-coral hero-cta-btn" href="#planes">Elegir mi plan</a>
      </div>
    </header>
  );
}
