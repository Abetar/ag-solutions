"use client";
import { motion } from "framer-motion";
import { Code, Zap, Globe } from "lucide-react";

const servicios = [
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "Automatización",
    desc: "Bots y procesos que ahorran tiempo en tareas repetitivas.",
  },
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Scraping de datos",
    desc: "Obtén información clave de la web de manera estructurada.",
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Desarrollo web",
    desc: "Sitios rápidos, responsivos y optimizados para conversión.",
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

      <div className="grid md:grid-cols-3 gap-8">
        {servicios.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white border rounded-xl shadow-md p-6 space-y-4 hover:shadow-lg transition"
          >
            {s.icon}
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
