export default function HeroB() {
  return (
    <header className="hero hero--b" id="top">
      <div
        className="hero-bg-zoom"
        style={{ backgroundImage: 'url(/assets/hero-declara.jpg)' }}
      ></div>
      <div className="hero-overlay"></div>

      <div className="hero-topbar">
        <div className="container hero-topbar-inner">
          <img src="/assets/declara-xpress-logo.png" alt="Declara Xpress" className="hero-topbar-logo" />
          <a href="mailto:info@declaraxpress.com" className="hero-topbar-email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            info@declaraxpress.com
          </a>
        </div>
      </div>

      <div className="hero-content">
        <div className="container">
          <h1>Contabilidad Optimizada con IA para las Micro y Pequeñas empresas, Emprendedores y profesionales independientes.</h1>
          <p className="hero-subtitle">En DeclaraXpress.com tenemos planes de servicios contables para tu negocio desde <strong>S/170 al mes</strong>, incluido IGV.</p>
          <a className="btn btn-coral hero-cta-btn" href="#planes">Elegir mi plan</a>
        </div>
      </div>
    </header>
  );
}
