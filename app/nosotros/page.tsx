import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MisionVision from "../components/MisionVision";

export const metadata: Metadata = {
  title: "Nosotros | AG Solutions",
  description:
    "Nuestra misión, visión y valores en AG Solutions: crear soluciones digitales claras, eficientes y accesibles.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-14 space-y-12">
        <header className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">Nosotros</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce qué nos motiva y cómo ayudamos a transformar procesos en
            soluciones digitales de impacto.
          </p>
        </header>

        <MisionVision />
      </main>
      <Footer />
    </>
  );
}
