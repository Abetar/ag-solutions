"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-14 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Automatización y desarrollo web para{" "}
            <span className="text-blue-600">ahorrar tiempo</span> y{" "}
            <span className="text-blue-600">convertir más</span>
          </h1>

          <p className="text-lg text-gray-600">
            Creamos sitios rápidos, scraping de datos e integraciones que reducen
            fricción y mejoran resultados. Sin humo: entregables claros y enfoque en negocio.
          </p>

          {/* Bullets de confianza */}
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
              <span>Entrega rápida (1–3 semanas)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
              <span>Enfoque en conversión</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
              <span>Integraciones con APIs/Sheets</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
              <span>Diseño limpio + SEO base</span>
            </li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contacto"
              className="px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-center"
            >
              Solicitar propuesta
            </Link>
            <Link
              href="/proyectos"
              className="px-6 py-3 rounded border font-semibold hover:bg-gray-100 transition text-center"
            >
              Ver proyectos
            </Link>
          </div>

          <p className="text-xs text-gray-500">
            Respuesta típica en 24–48 hrs. Puedes escribir directo por WhatsApp.
          </p>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative aspect-[4/3] md:aspect-square"
        >
          <Image
            src="/coding.jpg"
            alt="Automatización, scraping e implementación web"
            fill
            className="rounded-xl object-cover shadow-lg"
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
