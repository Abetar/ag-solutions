"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, TrendingUp } from "lucide-react";

const puntos = [
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: "Entrega clara y rápida",
    desc: "Proyectos definidos desde el inicio, con tiempos reales y comunicación constante.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    title: "Enfoque en resultados",
    desc: "No solo desarrollamos: optimizamos procesos, conversiones y flujos de trabajo.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "Experiencia comprobada",
    desc: "Más de 6 años trabajando con sistemas, automatización y soluciones digitales reales.",
  },
];

export default function PruebaSocial() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto space-y-10">
        <motion.h3
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center"
        >
          ¿Por qué trabajar con <span className="text-blue-600">AG Solutions</span>?
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {puntos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white border rounded-xl p-6 space-y-3 shadow-sm hover:shadow-md transition"
            >
              {p.icon}
              <h4 className="font-semibold text-lg">{p.title}</h4>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
