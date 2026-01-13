"use client";
import { motion } from "framer-motion";
import { Code, Zap, Globe } from "lucide-react";
import Link from "next/link";

const servicios = [
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "Automatización de procesos",
    desc:
      "Eliminamos tareas manuales y repetitivas para que tu equipo ahorre horas cada semana, reduzca errores y se enfoque en lo importante.",
  },
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Extracción y análisis de datos (Scraping)",
    desc:
      "Convertimos información dispersa de la web en datos estructurados y accionables para análisis, reportes y toma de decisiones.",
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Desarrollo web orientado a conversión",
    desc:
      "Diseñamos sitios rápidos y claros que generan confianza, comunican tu valor y convierten visitas en contactos reales.",
  },
];

export default function Servicios() {
  return (
    <section className="container mx-auto py-20 px-6 space-y-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center"
      >
        Nuestros <span className="text-blue-600">Servicios</span>
      </motion.h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Soluciones prácticas para optimizar procesos, aprovechar datos y
        construir presencia digital que sí genera resultados.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {servicios.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white border rounded-xl shadow-md p-6 space-y-4 hover:shadow-lg transition"
          >
            {s.icon}
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA único */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center pt-6"
      >
        <Link
          href="/contacto"
          className="inline-block px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Cuéntanos tu caso
        </Link>
      </motion.div>
    </section>
  );
}
