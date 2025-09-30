"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mx-auto grid md:grid-cols-2 gap-10 items-center py-16" style={{ padding: '0 1.5rem' }}>
      {/* Texto con animación */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Soluciones digitales <span className="text-blue-600">eficientes</span>
        </h1>
        <p className="text-lg text-gray-600">
          Automatización, scraping y desarrollo web que convierten.
        </p>
        <div className="flex gap-4">
          <a href="/servicios" className="px-5 py-3 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Ver servicios
          </a>
          <a href="/contacto" className="px-5 py-3 rounded border font-medium hover:bg-gray-100 transition">
            Contáctanos
          </a>
        </div>
      </motion.div>

      {/* Imagen ilustrativa */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative aspect-square"
      >
        <Image
          src="/coding.jpg" // cámbiala por tu propia imagen
          alt="Automatización y desarrollo web"
          fill
          className="rounded-xl object-cover shadow-lg"
          priority
        />
      </motion.div>
    </section>
  );
}
