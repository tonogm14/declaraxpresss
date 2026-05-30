import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';

const waNumber = import.meta.env.VITE_WA_NUMBER || '51999999999';

const necesidades = [
  'Declaraciones mensuales SUNAT',
  'Regularización de deuda',
  'Formalizar mi empresa',
  'Defensa ante SUNAT / SUNAFIL',
  'Planillas y nóminas',
  'Otro',
];

export default function CtaBand() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '', whatsapp: '', ruc: '' });
  const [captchaToken, setCaptchaToken] = useState('');
  const [error, setError] = useState('');
  const recaptchaRef = useRef(null);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.whatsapp) {
      setError('Por favor completa nombre y WhatsApp.');
      return;
    }
    if (RECAPTCHA_KEY && !captchaToken) {
      setError('Por favor completa el captcha.');
      return;
    }
    setError('');
    const lines = [
      `👋 Hola, me contacto desde la web de Declara Xpress.`,
      ``,
      `📋 *Datos de contacto*`,
      `• Nombre: ${form.nombre}`,
      form.email ? `• Email: ${form.email}` : null,
      `• WhatsApp: ${form.whatsapp}`,
      form.ruc ? `• RUC: ${form.ruc}` : null,
      form.mensaje ? `\n💬 *Mensaje*\n${form.mensaje}` : null,
    ].filter(l => l !== null).join('\n');
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(lines)}`, '_blank');
  };

  return (
    <section className="cta-band" id="contacto">
      <div className="container contacto-grid">

        {/* Columna izquierda — datos */}
        <div className="contacto-info">
          <span className="eyebrow eyebrow--on-dark"><span className="dot"></span>Contáctanos</span>
          <h2>¿Listo para crecer? <em>Hablemos.</em></h2>

          <ul className="contacto-datos">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Calle Enrique Palacios 360, Oficina 609<br/>Miraflores — Centro Empresarial Abril
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L9.1 9.4a16 16 0 0 0 5.5 5.5l1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7A2 2 0 0 1 22 16.9z"/></svg>
              +51 480 1383 &nbsp;·&nbsp; +51 946 758 200
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              info@tucontadormype.com
            </li>
          </ul>

          <div className="contacto-social">
            <a href="#" className="social-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.4a4 4 0 1 1-8.1 1 4 4 0 0 1 8.1-1z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              Seguir
            </a>
            <a href="#" className="social-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Seguir
            </a>
          </div>
        </div>

        {/* Columna derecha — formulario */}
        <div className="contacto-form-wrap">
          <h3>Solicita una asesoría</h3>
          <form className="contacto-form" onSubmit={submit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre y Apellido *</label>
                <input id="nombre" name="nombre" type="text" placeholder="Tu nombre completo" value={form.nombre} onChange={handle} />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" placeholder="tu@correo.com" value={form.email} onChange={handle} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="whatsapp">WhatsApp *</label>
                <input id="whatsapp" name="whatsapp" type="tel" placeholder="+51 999 999 999" value={form.whatsapp} onChange={handle} />
              </div>
              <div className="form-group">
                <label htmlFor="ruc">RUC a consultar</label>
                <input id="ruc" name="ruc" type="text" placeholder="20XXXXXXXXX" maxLength={11} value={form.ruc} onChange={handle} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={4} placeholder="Cuéntanos en qué podemos ayudarte..." value={form.mensaje} onChange={handle} />
            </div>

            {RECAPTCHA_KEY
              ? <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_KEY} onChange={setCaptchaToken} />
              : (
                <label className="captcha-check">
                  <input type="checkbox" onChange={e => setCaptchaToken(e.target.checked ? 'local' : '')} />
                  <span>No soy un robot</span>
                </label>
              )
            }

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="btn btn-coral form-submit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.6-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4C8.6 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
              </svg>
              Enviar
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
