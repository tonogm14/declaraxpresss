import Analytics from './components/Analytics';
import HeroA from './components/HeroA';
import HeroB from './components/HeroB';
import Hero from './components/Hero';
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
  const path = window.location.pathname;
  if (path.startsWith('/b')) return <HeroB />;
  if (path.startsWith('/a')) return <HeroA />;
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
