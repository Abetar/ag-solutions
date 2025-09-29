// components/TeaserNosotros.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TeaserNosotros() {
  return (
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border bg-white p-8 md:p-12 shadow-sm grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">¿Quiénes somos?</h2>
          <p className="text-gray-600">
            En AG Solutions construimos soluciones digitales claras y
            eficientes: automatización, scraping y sitios que convierten.
            Transparencia, cercanía y resultados medibles.
          </p>
          <div className="flex gap-3">
            <Link
              href="/nosotros"
              className="px-5 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Conoce más
            </Link>
            <Link
              href="/proyectos"
              className="px-5 py-3 rounded border font-semibold hover:bg-gray-100 transition"
            >
              Ver proyectos
            </Link>
          </div>
        </div>

        <div className="rounded-xl bg-gray-50 p-6">
          <ul className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <li>• +6 años en soporte, QA y dev</li>
            <li>• Entregas en 1–3 semanas</li>
            <li>• Integraciones con APIs/ERP</li>
            <li>• Sitios rápidos y accesibles</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
