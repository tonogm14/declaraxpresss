import Analytics from './components/Analytics';
import Hero from './components/Hero';
import HeroB from './components/HeroB';
import HeroC from './components/HeroC';
import Somos from './components/Somos';
import Planes from './components/Planes';
import Pasos from './components/Pasos';
import Cita from './components/Cita';
import OtrosServicios from './components/OtrosServicios';
import Formaliza from './components/Formaliza';
import Sunat from './components/Sunat';
import Testimonios from './components/Testimonios';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';

function getHero() {
  const p = window.location.pathname;
  if (p.startsWith('/b')) return <HeroB />;
  if (p.startsWith('/c')) return <HeroC />;
  return <Hero />;
}

export default function App() {
  return (
    <>
      <Analytics />
      {getHero()}
      <Somos />
      <Planes />
      <Pasos />
      <Cita />
      <OtrosServicios />
      <Formaliza />
      <Sunat />
      <Testimonios />
      <CtaBand />
      <Footer />
    </>
  );
}
