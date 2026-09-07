"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Project = {
  number: string;
  title: string;
  category: string;
  question: string;
  desc: string;
  link: string;
  featured?: boolean;
  accent?: "default" | "mystic";
};

const proyectos: Project[] = [
  {
    number: "01",
    title: "Cuenta Clara",
    category: "Producto · Reglas · Cálculos",
    question: "Entender una salida laboral antes de firmar.",
    desc: "Herramienta mexicana que traduce finiquito, liquidación y distintos escenarios laborales en un flujo claro y comprensible.",
    link: "https://cuenta-clara-psi.vercel.app/",
    featured: true,
  },
  {
    number: "02",
    title: "Mystic Studio",
    category: "Frontend · UI/UX · Experiencia",
    question: "Una experiencia digital alrededor del tarot.",
    desc: "Biblioteca de 78 cartas, lecturas, grimorio, limpias y distintas experiencias construidas dentro de una misma identidad visual.",
    link: "https://mysticstudio-sable.vercel.app/",
    featured: true,
    accent: "mystic",
  },
  {
    number: "03",
    title: "México en Números",
    category: "Datos · Visualización",
    question: "¿Dónde estoy parado económicamente?",
    desc: "Experiencia interactiva que contextualiza ingreso, edad y ubicación frente a estadísticas públicas de México.",
    link: "https://mexico-en-numeros.vercel.app/",
  },
  {
    number: "04",
    title: "Entre Farmacias",
    category: "Datos · Comparación",
    question: "¿Dónde está más barato este medicamento?",
    desc: "Comparador que organiza medicamentos, presentaciones y precios publicados por distintas cadenas de farmacias.",
    link: "https://entre-farmacias.vercel.app/",
  },
  {
    number: "05",
    title: "¿Cuánto valía?",
    category: "Datos · Inflación · Historia",
    question: "¿Cuánto valdría hoy el dinero de otro año?",
    desc: "Herramienta interactiva que compara el poder adquisitivo del dinero en México a través del tiempo usando inflación y referencias de precios cotidianos.",
    link: "https://cuanto-valia.vercel.app/",
  },
   {
    number: "06",
    title: "ChatMock",
    category: "Frontend · Herramienta · Contenido",
    question: "¿Cómo crear conversaciones ficticias de forma rápida?",
    desc: "Herramienta para generar conversaciones simuladas y personalizables, pensada para contenido, demostraciones y escenarios ficticios.",
    link: "https://chatmock-tan.vercel.app/",
  },
];

export default function Proyectos() {
  return (
    <section className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="grid gap-8 border-b border-gray-300 pb-10 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-gray-950 md:text-4xl lg:text-5xl">
              No construyo solamente sitios.
              <span className="block text-gray-400">
                Construyo productos para resolver problemas.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Proyectos principales */}
        <div className="grid border-b border-gray-300 lg:grid-cols-2">
          {proyectos.slice(0, 2).map((project, index) => {
            const isMystic = project.accent === "mystic";

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`group py-12 lg:py-16 ${
                  index === 0
                    ? "border-b border-gray-300 lg:border-b-0 lg:border-r lg:pr-12"
                    : "lg:pl-12"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <span
                    className={`text-xs font-semibold tracking-[0.18em] ${
                      isMystic ? "text-violet-600" : "text-gray-400"
                    }`}
                  >
                    {project.number}
                  </span>

                  <span
                    className={`text-right text-[11px] font-semibold uppercase tracking-[0.16em] ${
                      isMystic ? "text-violet-600" : "text-blue-600"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-12 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-xl text-xl font-medium leading-8 text-gray-900">
                  {project.question}
                </p>

                <p className="mt-5 max-w-xl text-sm leading-6 text-gray-600 md:text-base md:leading-7">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center border-b-2 pb-1 text-sm font-semibold transition-colors ${
                    isMystic
                      ? "border-violet-600 text-violet-700 hover:border-violet-400 hover:text-violet-600"
                      : "border-gray-950 text-gray-950 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  Explorar proyecto
                  <span
                    aria-hidden="true"
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Proyectos secundarios */}
        <div className="grid md:grid-cols-2">
          {proyectos.slice(2).map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className={`group py-10 md:py-12 ${
                index % 2 === 0
                  ? "border-b border-gray-300 md:border-r md:pr-10"
                  : "border-b border-gray-300 md:pl-10"
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-xs font-semibold tracking-[0.18em] text-gray-400">
                  {project.number}
                </span>

                <span className="text-right text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-950">
                {project.title}
              </h3>

              <p className="mt-4 text-lg font-medium leading-7 text-gray-900">
                {project.question}
              </p>

              <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center border-b border-gray-900 pb-1 text-sm font-semibold text-gray-900 transition-colors hover:border-blue-600 hover:text-blue-600"
              >
                Ver proyecto
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col gap-6 border-t border-gray-300 pt-10 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-sm font-semibold text-gray-950">
              Estos son sólo algunos proyectos seleccionados.
            </p>

            <p className="mt-1 text-sm text-gray-500">
              En el portafolio completo puedes ver más productos, sitios y
              aplicaciones.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/proyectos"
              className="inline-flex min-h-12 items-center justify-center bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
            >
              Ver todos los proyectos
            </Link>

            <Link
              href="/servicios"
              className="inline-flex min-h-12 items-center justify-center border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-950"
            >
              Explorar servicios
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}