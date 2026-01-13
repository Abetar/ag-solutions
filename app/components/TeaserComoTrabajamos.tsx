"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TeaserComoTrabajamos() {
  return (
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border bg-white p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="space-y-2 max-w-xl">
          <h3 className="text-2xl font-bold">Proceso claro, sin sorpresas</h3>
          <p className="text-gray-600">
            Diagnóstico, propuesta e implementación con entregables definidos y
            comunicación constante.
          </p>
        </div>

        <Link
          href="/como-trabajamos"
          className="inline-flex items-center gap-2 px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Ver cómo trabajamos
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
