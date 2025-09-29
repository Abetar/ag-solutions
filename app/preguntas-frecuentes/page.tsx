import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | AG Solutions",
  description:
    "Tiempos, alcances, precios y soporte. Resolvemos las dudas más comunes sobre nuestros servicios.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

const faqs = [
  {
    q: "¿Cuánto tarda un proyecto típico?",
    a: "Un landing o sitio institucional suele tardar entre 1 y 3 semanas; automatizaciones simples de 3 a 7 días. Depende del alcance y la velocidad de feedback.",
  },
  {
    q: "¿Trabajan por paquete o por hora?",
    a: "Manejamos paquetes cerrados para MVPs y sitios; y por hora para soporte o mejoras continuas.",
  },
  {
    q: "¿Incluyen hosting y dominio?",
    a: "Podemos administrarlos si lo requieres. Normalmente desplegamos en Vercel y te ayudamos a conectar tu dominio.",
  },
  {
    q: "¿Pueden integrarse con mis sistemas actuales?",
    a: "Sí. Hacemos integraciones con APIs, ERP/CRM y Google Sheets, entre otros.",
  },
  {
    q: "¿Ofrecen garantía y soporte?",
    a: "Sí. Incluimos correcciones post-lanzamiento y planes opcionales de soporte mensual.",
  },
];

export default function PreguntasFrecuentesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-14 space-y-10">
        <header className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">Preguntas frecuentes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre tiempos, precios, soporte e integraciones.
          </p>
        </header>

        <FAQ items={faqs} />

        <section className="text-center pt-6">
          <a
            href="/contacto"
            className="inline-block px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            ¿Tienes otra duda? Contáctanos
          </a>
        </section>

        {/* JSON-LD (opcional) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
      <Footer />
    </>
  );
}
