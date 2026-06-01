import { useState, useRef, useEffect, useCallback } from 'react';

const testimonials = [
  {
    cls: 'c-1',
    quote: 'Tenemos una buena atención, puntualidad y responsabilidad. Siempre tenemos quien nos atienda y nos aportan soluciones rápidas ante cualquier consulta contable y tributaria. Les agradecemos el buen servicio recibido hasta la fecha.',
    author: 'Lizbeth Hurtado Dominguez',
    role: 'Contador General',
  },
  {
    cls: 'c-2',
    quote: 'Mi experiencia en cuanto a puntualidad y asesoramiento contable es la mejor. Su atención y seguimiento al cliente siempre es precisa, dando solución a consultas de manera efectiva. Muy agradecida por este gran servicio.',
    author: 'Miluska Alzamora Muñoz',
    role: 'Gerente General',
  },
  {
    cls: 'c-3',
    quote: 'Estamos muy satisfechos con el servicio contable. Han demostrado profesionalismo, cumplimiento y un buen nivel de asesoría, lo que nos permite enfocarnos en nuestro core de negocio con total confianza.',
    author: 'Ketty Retuerto',
    role: 'Gerente General · Welding Alloys',
  },
  {
    cls: 'c-4',
    quote: 'Damos nuestra recomendación por el servicio brindado. Esperamos seguir trabajando juntos. Deseándoles mejoras y éxito en su rubro.',
    author: 'Jackeline Banda Torres',
    role: 'Gerente General · Friser Perú',
  },
  {
    cls: 'c-1',
    quote: 'Llevamos más de 2 años trabajando juntos en los distintos ámbitos de la contabilidad y hemos creado un vínculo cordial y responsable que nos hace crecer y nos da la confianza para seguir avanzando.',
    author: 'David Valdez Ibañez',
    role: 'Gerente General',
  },
  {
    cls: 'c-2',
    quote: 'Ha sido una gran experiencia, siempre están atentos a mis necesidades, anticipándose y explicándome cuando no comprendo los procesos administrativos. Sé que cuento con ellos.',
    author: 'Innovación Educativa · TBox Perú',
    role: 'Representante',
  },
];

const VISIBLE = 3;

export default function Testimonios() {
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0);
  const wrapRef = useRef(null);
  const isMobile = () => window.innerWidth <= 640;
  const maxIdx = () => isMobile() ? testimonials.length - 1 : testimonials.length - VISIBLE;

  const calcStep = useCallback(() => {
    if (wrapRef.current) {
      const w = wrapRef.current.offsetWidth;
      const mobile = window.innerWidth <= 640;
      setStep(mobile ? w + 16 : (w - 32) / 3 + 16);
    }
  }, []);

  useEffect(() => {
    calcStep();
    window.addEventListener('resize', calcStep);
    return () => window.removeEventListener('resize', calcStep);
  }, [calcStep]);

  const prev = () => setIdx(i => Math.max(0, i - 1));
  const next = () => setIdx(i => Math.min(maxIdx(), i + 1));

  const touchStart = useRef(null);
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    touchStart.current = null;
  };

  return (
    <section className="testi">
      <div className="container">
      <div className="testi-head">
        <h3>¿Qué opinan <em>de nosotros</em>?</h3>
        <p>Conoce lo que dicen nuestros clientes sobre el servicio, el soporte y el éxito que han alcanzado.</p>
      </div>

      <div className="testi-carousel-wrap" ref={wrapRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          className="testi-carousel-track"
          style={{ transform: `translateX(-${idx * step}px)` }}
        >
          {testimonials.map(({ cls, quote, author, role }, i) => (
            <div key={i} className={`testi-card ${cls}`}>
              <div className="body">
                <p className="quote"><span className="qm">“</span>{quote}<span className="qm qm-close">”</span></p>
                <div className="author">{author}</div>
                <div className="role">{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testi-controls">
        <button className="testi-arrow" onClick={prev} disabled={idx === 0} aria-label="Anterior">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="testi-dots">
          {Array.from({ length: maxIdx() + 1 }).map((_, i) => (
            <button key={i} className={`testi-dot${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)} aria-label={`Ir a ${i + 1}`} />
          ))}
        </div>
        <button className="testi-arrow" onClick={next} disabled={idx === maxIdx()} aria-label="Siguiente">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      </div>
    </section>
  );
}
