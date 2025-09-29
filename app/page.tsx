
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Proyectos from "./components/Proyectos";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import TeaserNosotros from "./components/TeaserNosotros";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Servicios />
      <Proyectos />
      <TeaserNosotros />
      <CTA />
      <Footer />
    </>
  );
}
