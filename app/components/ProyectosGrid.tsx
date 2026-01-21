"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const proyectos = [
    {
    slug: "chatmock-tan",
    img: "/proyectos/ChatMock-Tan.png",
    title: "ChatMock Tan",
    desc: "Generador de chats ficticios para crear conversaciones realistas y personalizadas para marketing y entretenimiento.",
    url: "https://chatmock-tan.vercel.app/",
  },
  {
    slug: "once-upon-a-deck",
    img: "/proyectos/once_upon_a_deck.png",
    title: "Once Upon a Deck",
    desc: "Tienda TCG online enfocada en la venta de cartas coleccionables y experiencia de usuario clara y visual.",
    url: "https://once-upon-a-deck.vercel.app/",
  },
  {
    slug: "pu-consulting",
    img: "/proyectos/PU_Consulting_card.png",
    title: "PU Consulting",
    desc: "Sitio institucional para firma de consultoría técnica en construcción. Enfoque en eficiencia operativa y toma de decisiones.",
    url: "https://pu-consulting-site.vercel.app/",
  },
  {
    slug: "casa-cora",
    img: "/proyectos/Casa_Cora_Logo.png",
    title: "Casa Cora",
    desc: "Fundación de psicoterapia económica. Acompañamiento accesible con enfoque integrativo y terapias alternativas.",
    url: "https://www.casacora.org",
  },
  {
    slug: "capillarte",
    img: "/proyectos/CAPILLARTE_LOGO.png",
    title: "Capillarte.com",
    desc: "Clínica de injerto capilar FUE Zafiro. Video hero, galería optimizada y diseño orientado a confianza y resultados.",
    url: "https://www.capillarte.com",
  },
  {
    slug: "calculadora-de-salario-neto",
    img: "/proyectos/Calcula tu salario neto.png",
    title: "Calculadora de Salario Neto",
    desc: "Herramienta para calcular el salario neto de empleados en Argentina, considerando deducciones y aportes.",
    url: "https://play.google.com/store/apps/details?id=com.agsolutions.calculadora_sueldo",
  },
  {
    slug: "entre-cuentas",
    img: "/proyectos/Entre_Cuentas_Grafico_Funciones.png",
    title: "Entre Cuentas",
    desc: "Aplicación para la gestión de gastos compartidos. Facilita el seguimiento de cuentas y la división de gastos entre amigos.",
    url: "https://play.google.com/store/apps/details?id=com.agsolution.entrecuentas",
  },
  {
    slug: "entre-cuentas-tandas",
    img: "/proyectos/Entre cuentas Tandas.png",
    title: "Entre Cuentas - Tandas",
    desc: "Entre Cuentas: Tandas es una app diseñada para ayudarte a llevar un control sencillo, claro y sin complicaciones de las Tandas para Android.",
    url: "https://play.google.com/store/apps/details?id=com.agsolutions.tandas",
  },
];

export default function ProyectosGrid() {
  return (
    <>
      {/* Título */}
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-3"
      >
        <h1 className="text-3xl md:text-4xl font-bold">Proyectos</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Selección de trabajos recientes. Construimos sitios rápidos, claros y
          con foco en conversión.
        </p>
      </motion.header>

      {/* Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
          >
            {p.img && (
              <div className="relative h-48">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  priority={i === 0}
                />
              </div>
            )}

            <div className="p-6 flex flex-col gap-3 flex-1">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-sm text-gray-600">{p.desc}</p>

              <div className="mt-auto pt-2">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
                >
                  Visitar proyecto
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* CTA inferior */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-center pt-6"
      >
        <div className="inline-flex flex-wrap gap-4">
          <Link
            href="/servicios"
            className="px-6 py-3 rounded border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            Ver servicios
          </Link>
          <Link
            href="/contacto"
            className="px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Solicitar propuesta
          </Link>
        </div>
      </motion.section>
    </>
  );
}
