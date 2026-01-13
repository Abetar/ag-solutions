"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function CTA() {
  return (
    <section className="container mx-auto py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-blue-600 text-white rounded-2xl p-10 md:p-12 space-y-6 shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Cuéntanos tu proyecto y recibe una propuesta clara en 48 hrs
        </h2>

        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Te ayudamos a automatizar procesos, aprovechar datos y construir una web que convierta.
          Sin humo: alcance, tiempos y entregables definidos.
        </p>

        <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-sm text-white/95">
          <div className="flex items-start justify-center gap-2">
            <CheckCircle2 className="mt-0.5 h-5 w-5" />
            <span>Diagnóstico rápido</span>
          </div>
          <div className="flex items-start justify-center gap-2">
            <CheckCircle2 className="mt-0.5 h-5 w-5" />
            <span>Alcance y timeline</span>
          </div>
          <div className="flex items-start justify-center gap-2">
            <CheckCircle2 className="mt-0.5 h-5 w-5" />
            <span>Estimación transparente</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/contacto"
            className="px-6 py-3 rounded bg-white text-blue-700 font-semibold hover:bg-gray-100 transition"
          >
            Solicitar propuesta
          </Link>

          <Link
            href="/servicios"
            className="px-6 py-3 rounded border border-white/60 text-white font-semibold hover:bg-white/10 transition"
          >
            Ver servicios
          </Link>
        </div>

        <p className="text-xs text-white/80">
          Respuesta típica en 24–48 hrs. Si prefieres, escríbenos por WhatsApp.
        </p>
      </motion.div>
    </section>
  );
}
