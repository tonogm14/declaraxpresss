import Analytics from './components/Analytics';
import WhatsAppFloat from './components/WhatsAppFloat';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Somos from './components/Somos';
import Proceso from './components/Proceso';
import Pasos from './components/Pasos';
import Cita from './components/Cita';
import Sync from './components/Sync';
import Planes from './components/Planes';
import Formaliza from './components/Formaliza';
import Sunat from './components/Sunat';
import OtrosServicios from './components/OtrosServicios';
import Testimonios from './components/Testimonios';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Analytics />
      <Nav />
      <Hero />
      <Somos />
      <Cita />
      <Proceso />
      <Sync />
      <Planes />
      <Pasos />
      <Formaliza />
      <Sunat />
      <OtrosServicios />
      <Testimonios />
      <CtaBand />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
