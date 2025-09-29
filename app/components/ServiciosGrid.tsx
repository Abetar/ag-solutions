"use client";

import { motion } from "framer-motion";
import { Zap, Code, Globe, Database, Smartphone, Rocket } from "lucide-react";
import Link from "next/link";

const servicios = [
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "Automatización",
    desc: "Creamos bots y scripts para optimizar flujos de trabajo, reducir errores y ahorrar tiempo.",
  },
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Scraping de datos",
    desc: "Extraemos y estructuramos información clave desde la web para análisis y toma de decisiones.",
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Desarrollo web",
    desc: "Sitios modernos, rápidos y responsivos con enfoque en experiencia de usuario y conversión.",
  },
  {
    icon: <Database className="w-8 h-8 text-blue-600" />,
    title: "Integración de sistemas",
    desc: "Conectamos tus plataformas (ERP, CRM, APIs) para un flujo de datos centralizado y eficiente.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: "Aplicaciones móviles",
    desc: "Desarrollo de apps multiplataforma ligeras y personalizadas para necesidades específicas.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    title: "Landing pages",
    desc: "Diseño de páginas enfocadas en captar leads y maximizar conversiones con mensajes claros.",
  },
];

export default function ServiciosGrid() {
  return (
    <>
      {/* Título */}
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-3"
      >
        <h1 className="text-3xl md:text-4xl font-bold">Servicios</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Descubre cómo nuestras soluciones pueden ayudarte a crecer y optimizar
          tus procesos.
        </p>
      </motion.header>

      {/* Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-xl shadow-md p-6 space-y-4 hover:shadow-lg transition"
          >
            {s.icon}
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA final */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-center pt-10"
      >
        <Link
          href="/contacto"
          className="px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Solicitar propuesta
        </Link>
      </motion.section>
    </>
  );
}
