import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';
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
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const recaptchaRef = useRef(null);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const submit = async (e) => {
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
    setSending(true);

    if (WEB3FORMS_KEY) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `Nueva consulta de ${form.nombre} — Declara Xpress`,
            name: form.nombre,
            email: form.email || 'sin-email@declaraxpress.com',
            whatsapp: form.whatsapp,
            ruc: form.ruc || '—',
            message: form.mensaje || '—',
          }),
        });
        const data = await res.json();
        if (data.success) {
          setSuccess(true);
          setForm({ nombre: '', email: '', mensaje: '', whatsapp: '', ruc: '' });
          setCaptchaToken('');
          recaptchaRef.current?.reset();
        } else {
          setError('No se pudo enviar. Intenta por WhatsApp.');
        }
      } catch {
        setError('Error de conexión. Intenta por WhatsApp.');
      }
    }

    setSending(false);
  };

  return (
    <section className="cta-band" id="contacto">
      <div className="container contacto-grid">

        {/* Columna izquierda — datos */}
        <div className="contacto-info">
          <h2 className="contacto-titulo">Contáctanos</h2>

          <ul className="contacto-datos">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Jr. Pucala Nº 292 — San Miguel, Lima — Perú
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L9.1 9.4a16 16 0 0 0 5.5 5.5l1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7A2 2 0 0 1 22 16.9z"/></svg>
              +51 933 668 448
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              info@declaraxpress.com
            </li>
          </ul>

          <div className="contacto-mapa-inline">
            <iframe
              title="Ubicación Declara Xpress"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.052!2d-77.09390!3d-12.07918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9b7c8a4b9b9%3A0x1!2sJr.+Pucala+292%2C+San+Miguel+15086%2C+Peru!5e0!3m2!1ses-419!2spe!4v1"
              width="100%" height="100%" style={{ border: 0, display: 'block', minHeight: '240px' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
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
            {success && <p className="form-success">¡Mensaje enviado! Te contactaremos pronto.</p>}

            <button type="submit" className="btn btn-coral form-submit" disabled={sending}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.6-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4C8.6 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
              </svg>
              {sending ? 'Enviando…' : 'Enviar'}
            </button>
          </form>
        </div>

      </div>


    </section>
  );
}
