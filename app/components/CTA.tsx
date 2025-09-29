"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="container mx-auto py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-blue-600 text-white rounded-2xl p-10 space-y-6 shadow-lg"
      >
        <h2 className="text-3xl font-bold">¿Listo para empezar?</h2>
        <p className="text-lg">
          Agenda una consulta gratuita y descubre cómo podemos ayudarte a crecer.
        </p>
        <Link
          href="/contacto"
          className="px-6 py-3 rounded bg-white text-blue-600 font-semibold hover:bg-gray-100 transition"
        >
          Contáctanos
        </Link>
      </motion.div>
    </section>
  );
}
