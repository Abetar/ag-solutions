"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileText, Wrench } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList className="w-7 h-7 text-blue-600" />,
    title: "1) Diagnóstico",
    desc: "Entendemos tu objetivo, contexto y restricciones. Definimos qué problema resolver primero y el resultado esperado.",
    bullets: ["Reunión breve", "Objetivo medible", "Recomendación inicial"],
  },
  {
    icon: <FileText className="w-7 h-7 text-blue-600" />,
    title: "2) Propuesta clara",
    desc: "Recibes un plan con alcance, entregables y timeline. Transparencia total sobre lo que incluye y lo que no.",
    bullets: ["Alcance y entregables", "Timeline realista", "Estimación transparente"],
  },
  {
    icon: <Wrench className="w-7 h-7 text-blue-600" />,
    title: "3) Implementación y entrega",
    desc: "Construimos, iteramos contigo y entregamos con handoff claro. Si aplica, dejamos documentación y soporte.",
    bullets: ["Iteraciones cortas", "Control de calidad", "Entrega + soporte opcional"],
  },
];

export default function ComoTrabajamos() {
  return (
    <section className="max-w-5xl mx-auto space-y-10">
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition space-y-4"
          >
            <div className="flex items-center gap-3">
              {s.icon}
              <h2 className="text-lg font-semibold">{s.title}</h2>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>

            <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Banda de confianza */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border bg-gray-50 p-6 text-center"
      >
        <p className="text-gray-700 font-medium">
          Sin sorpresas: alcance definido, comunicación constante y entregables claros.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Ideal para sitios web, automatizaciones, scraping e integraciones.
        </p>
      </motion.div>
    </section>
  );
}
