import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ComoTrabajamos from "../components/ComoTrabajamos";

export const metadata: Metadata = {
  title: "Cómo trabajamos | AG Solutions",
  description:
    "Proceso claro y sin sorpresas: diagnóstico, propuesta e implementación. Conoce cómo trabajamos en AG Solutions.",
  alternates: { canonical: "/como-trabajamos" },
};

export default function ComoTrabajamosPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-14 space-y-10">
        <header className="text-center space-y-3 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Cómo trabajamos</h1>
          <p className="text-gray-600">
            Proceso simple, entregables claros y comunicación constante. Así evitamos
            sorpresas y aseguramos resultados.
          </p>
        </header>

        <ComoTrabajamos />

        <section className="text-center pt-6">
          <a
            href="/contacto"
            className="inline-block px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Cuéntanos tu proyecto
          </a>
          <p className="text-xs text-gray-500 mt-3">
            Respuesta típica en 24–48 hrs con siguientes pasos claros.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
