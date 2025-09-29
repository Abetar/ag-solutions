"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

export default function MisionVision() {
  return (
    <section className="grid md:grid-cols-3 gap-10">
      {/* Misión */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white border rounded-xl p-8 shadow-sm space-y-4"
      >
        <Target className="w-10 h-10 text-blue-600" />
        <h2 className="text-xl font-semibold">Nuestra misión</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Impulsar a personas y empresas mediante soluciones digitales claras y
          accesibles, que ahorren tiempo, reduzcan costos y generen confianza.
        </p>
      </motion.div>

      {/* Visión */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-white border rounded-xl p-8 shadow-sm space-y-4"
      >
        <Eye className="w-10 h-10 text-blue-600" />
        <h2 className="text-xl font-semibold">Nuestra visión</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Ser un referente en México y LATAM en automatización y desarrollo web,
          reconocido por la innovación, la transparencia y el impacto positivo
          en la productividad de nuestros clientes.
        </p>
      </motion.div>

      {/* Valores */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white border rounded-xl p-8 shadow-sm space-y-4"
      >
        <Heart className="w-10 h-10 text-blue-600" />
        <h2 className="text-xl font-semibold">Nuestros valores</h2>
        <ul className="text-gray-600 text-sm leading-relaxed list-disc pl-5">
          <li>Transparencia y confianza</li>
          <li>Innovación constante</li>
          <li>Atención cercana y personalizada</li>
          <li>Compromiso con resultados</li>
        </ul>
      </motion.div>
    </section>
  );
}
