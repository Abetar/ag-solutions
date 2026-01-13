"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonios = [
  {
    quote:
      "AG Solutions nos ayudó a estructurar y presentar nuestra clínica de forma profesional. El sitio transmite confianza y ha facilitado que los pacientes nos contacten.",
    name: "Dr. Adrián Hernández López",
    role: "Director médico",
    company: "Clínica Capillarte",
  },
  {
    quote:
      "El trabajo fue claro, ordenado y enfocado en lo que necesitábamos como consultora. La comunicación fue constante y el resultado superó nuestras expectativas.",
    name: "Ulises Gómez",
    role: "Director",
    company: "PU Consulting",
  },
];

export default function Testimonios() {
  return (
    <section className="container mx-auto px-6 py-20 space-y-12">
      <motion.h3
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-center"
      >
        Lo que dicen nuestros <span className="text-blue-600">clientes</span>
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonios.map((t, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white border rounded-xl p-6 shadow-sm space-y-4 relative"
          >
            <Quote className="w-8 h-8 text-blue-600 absolute -top-4 -left-4 bg-white rounded-full p-1" />

            <p className="text-gray-700 italic leading-relaxed">
              “{t.quote}”
            </p>

            <footer className="pt-2">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">
                {t.role} · {t.company}
              </p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
