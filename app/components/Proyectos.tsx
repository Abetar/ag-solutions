"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const proyectos = [
  {
    img: "/proyectos/PU_Consulting_card.png",
    title: "PU Consulting",
    desc: "Sitio institucional desarrollado para una firma de consultoría técnica en construcción, con enfoque en dirección externa, eficiencia operativa y toma de decisiones estratégicas.",
    link: "https://pu-consulting-site.vercel.app/",
  },
  {
    img: "/proyectos/Casa_Cora_Logo.png",
    title: "Casa Cora",
    desc: "Sitio institucional desarrollado para una Fundación de psicoterapia económica. Acompañamiento psicológico accesible con enfoque integrativo, terapias alternativas y comunidad.",
    link: "https://www.casacora.org",
  },
  {
    img: "/proyectos/CAPILLARTE_LOGO.png",
    title: "Capillarte.com",
    desc: "Página especializada en injerto capilar con técnica FUE Zafiro. Muestra casos reales, video hero, galería optimizada y diseño responsivo con énfasis en confianza y resultados.",
    link: "https://www.capillarte.com",
  },
];

export default function Proyectos() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center"
        >
          Proyectos <span className="text-blue-600">Recientes</span>
        </motion.h2>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-3 gap-8">
          {proyectos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col"
            >
              {p.img && (
                <div className="relative h-48">
                  <Image src={p.img} alt={p.title} fill className="object-cover" />
                </div>
              )}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 mt-4 rounded bg-black text-white text-sm font-medium hover:bg-gray-800 transition w-max"
                >
                  Ver más
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA general */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center gap-4 pt-10"
        >
          <Link
            href="/proyectos"
            className="px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Ver todos los proyectos
          </Link>
          <Link
            href="/servicios"
            className="px-6 py-3 rounded border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            Explorar servicios
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
