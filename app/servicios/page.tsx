import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiciosGrid from "../components/ServiciosGrid";

export const metadata: Metadata = {
  title: "Servicios | AG Solutions",
  description:
    "Automatización, scraping y desarrollo web. Descubre cómo podemos ayudarte a optimizar tus procesos y potenciar tu negocio.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-14 space-y-12">
        <ServiciosGrid />
      </main>
      <Footer />
    </>
  );
}
