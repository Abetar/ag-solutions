// app/proyectos/page.tsx
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProyectosGrid from "../components/ProyectosGrid";

export const metadata: Metadata = {
  title: "Proyectos | AG Solutions",
  description:
    "Casos reales: sitios institucionales, landing pages y soluciones de automatización.",
  alternates: { canonical: "/proyectos" },
};

export default function ProyectosPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-14 space-y-12">
        <ProyectosGrid />
      </main>
      <Footer />
    </>
  );
}
