"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type FeaturedProject = {
  number: string;
  title: string;
  eyebrow: string;
  question: string;
  description: string;
  built: string;
  signal: string;
  url: string;
  accent?: "default" | "mystic";
};

type OtherProject = {
  title: string;
  desc: string;
  url: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    number: "01",
    title: "Cuenta Clara",
    eyebrow: "Producto · Reglas laborales · Cálculos",
    question: "¿Cuánto dinero está realmente en juego si salgo de mi trabajo?",
    description:
      "Una herramienta mexicana para entender una salida laboral antes de aceptar una oferta o firmar algo. El flujo traduce conceptos como finiquito, liquidación, sueldo variable y escenarios de salida en preguntas que una persona puede responder sin conocer la terminología.",
    built:
      "Diseñé un flujo guiado que captura el contexto laboral, aplica reglas y cálculos según las respuestas y convierte el resultado en información que puede entenderse y compararse.",
    signal:
      "Demuestra lógica de producto, manejo de reglas, cálculo y diseño de una experiencia para un problema sensible y poco claro.",
    url: "https://cuenta-clara-psi.vercel.app/",
  },
  {
    number: "02",
    title: "Mystic Studio",
    eyebrow: "Experiencia web · UI/UX · Interacción",
    question: "¿Cómo convertir una idea esotérica en una experiencia digital?",
    description:
      "Un estudio místico interactivo construido alrededor del tarot y distintas prácticas esotéricas. Combina una biblioteca completa de 78 cartas con lecturas, galletas del destino, limpias y un grimorio dentro de una experiencia visual coherente.",
    built:
      "Construí tanto la experiencia de exploración como la arquitectura de contenido detrás de las cartas y prácticas, procurando que cada parte se sienta como parte del mismo producto y no como herramientas independientes.",
    signal:
      "Es el proyecto que mejor demuestra frontend, dirección visual, interacción y capacidad para construir una identidad digital desde cero.",
    url: "https://mysticstudio-sable.vercel.app/",
    accent: "mystic",
  },
  {
    number: "03",
    title: "México en Números",
    eyebrow: "Datos públicos · Visualización · Producto",
    question: "¿Dónde estoy parado económicamente frente a otros mexicanos?",
    description:
      "Una experiencia interactiva que utiliza edad, ubicación e ingreso mensual para dar contexto a la situación económica de una persona frente a estadísticas de México.",
    built:
      "Transformé datos y métricas económicas en comparaciones más fáciles de interpretar, utilizando un flujo progresivo que primero captura contexto y después presenta los resultados desde distintos ángulos.",
    signal:
      "Demuestra trabajo con datos, modelado de comparaciones y diseño de información para convertir cifras abstractas en algo personal y comprensible.",
    url: "https://mexico-en-numeros.vercel.app/",
  },
  {
    number: "04",
    title: "Entre Farmacias",
    eyebrow: "Datos · Comparación · Normalización",
    question: "¿Dónde está más barato este medicamento?",
    description:
      "Un comparador mexicano que permite buscar medicamentos por marca o principio activo y revisar precios publicados por distintas cadenas de farmacias.",
    built:
      "Organicé medicamentos, principios activos, presentaciones, cadenas y precios para poder comparar productos que no siempre son publicados de la misma forma por cada farmacia.",
    signal:
      "Demuestra estructuración y normalización de datos alrededor de una necesidad extremadamente concreta: comparar opciones rápidamente.",
    url: "https://entre-farmacias.vercel.app/",
  },
  {
    number: "05",
    title: "¿Cuánto valía?",
    eyebrow: "Inflación · Datos históricos · Visualización",
    question: "¿Cuánto valdría hoy el dinero de otro año?",
    description:
      "Una herramienta interactiva para entender cómo ha cambiado el valor del dinero en México a través del tiempo, utilizando inflación y referencias de precios cotidianos.",
    built:
      "Construí una experiencia que permite seleccionar distintos años, ajustar cantidades y comparar el poder adquisitivo histórico con productos y precios de referencia.",
    signal:
      "Demuestra trabajo con datos históricos, transformación de información económica y diseño de una experiencia que vuelve tangible un concepto abstracto como la inflación.",
    url: "https://cuanto-valia.vercel.app/",
  },
];

const otherProjects: OtherProject[] = [
  {
    title: "Abraham Choel's Web Page",
    desc: "Sitio académico y profesional para organizar investigación, publicaciones, docencia y trayectoria.",
    url: "https://abrahamchoel.com",
  },
  {
    title: "ChatMock Tan",
    desc: "Generador de conversaciones ficticias personalizables para contenido y demostraciones.",
    url: "https://chatmock-tan.vercel.app/",
  },
  {
    title: "Once Upon a Deck",
    desc: "Experiencia de e-commerce enfocada en cartas coleccionables TCG.",
    url: "https://once-upon-a-deck.vercel.app/",
  },
  {
    title: "PU Consulting",
    desc: "Sitio institucional para una firma de consultoría técnica en construcción.",
    url: "https://pu-consulting-site.vercel.app/",
  },
  {
    title: "Casa Cora",
    desc: "Sitio para una fundación de psicoterapia accesible y acompañamiento psicológico.",
    url: "https://www.casacora.org",
  },
  {
    title: "Capillarte",
    desc: "Experiencia web para clínica especializada en injerto capilar FUE Zafiro.",
    url: "https://www.capillarte.com",
  },
  {
    title: "Calculadora de Salario Neto",
    desc: "Aplicación Android para estimar salario neto considerando deducciones y aportes.",
    url: "https://play.google.com/store/apps/details?id=com.agsolutions.calculadora_sueldo",
  },
  {
    title: "Entre Cuentas",
    desc: "Aplicación Android para controlar y dividir gastos compartidos.",
    url: "https://play.google.com/store/apps/details?id=com.agsolution.entrecuentas",
  },
  {
    title: "Entre Cuentas · Tandas",
    desc: "Aplicación Android para llevar el control de tandas de forma sencilla.",
    url: "https://play.google.com/store/apps/details?id=com.agsolutions.tandas",
  },
  {
    title: "Web Repository",
    desc: "Archivo de experimentos y proyectos desarrollados con distintas tecnologías web.",
    url: "https://web-components-repository.vercel.app/explore",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function ProyectosGrid() {
  return (
    <>
      {/* =========================================================
          INTRO
      ========================================================== */}
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl"
      >
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-gray-950 md:text-5xl lg:text-6xl">
          Productos digitales,
          <span className="block text-gray-400">no solamente páginas web.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">
          Diseño y desarrollo herramientas que convierten problemas, datos e
          ideas en productos que una persona realmente puede utilizar.
        </p>
      </motion.header>

      {/* =========================================================
          FEATURED PROJECTS
      ========================================================== */}
      <section className="mt-16 border-t border-gray-200 md:mt-24">
        {featuredProjects.map((project, index) => {
          const isMystic = project.accent === "mystic";

          return (
            <motion.article
              key={project.title}
              {...fadeUp}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.05, 0.15),
              }}
              className="group border-b border-gray-200 py-12 md:py-16 lg:py-20"
            >
              <div className="grid gap-8 md:grid-cols-[120px_minmax(0,1fr)] lg:grid-cols-[150px_minmax(0,1fr)]">
                {/* Número */}
                <div>
                  <span
                    className={`text-sm font-medium tracking-[0.18em] ${
                      isMystic ? "text-violet-600" : "text-gray-400"
                    }`}
                  >
                    {project.number}
                  </span>
                </div>

                {/* Contenido */}
                <div>
                  <div className="grid gap-10 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] xl:gap-20">
                    {/* Columna principal */}
                    <div>
                      <p
                        className={`mb-4 text-xs font-semibold uppercase tracking-[0.18em] ${
                          isMystic ? "text-violet-600" : "text-blue-600"
                        }`}
                      >
                        {project.eyebrow}
                      </p>

                      <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
                        {project.title}
                      </h2>

                      <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-gray-900 md:text-2xl md:leading-9">
                        {project.question}
                      </p>

                      <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
                        {project.description}
                      </p>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-8 inline-flex min-h-11 items-center border-b-2 pb-1 text-sm font-semibold transition-colors ${
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
                    </div>

                    {/* Qué demuestra */}
                    <aside className="xl:border-l xl:border-gray-200 xl:pl-10">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                          Qué construí
                        </p>

                        <p className="mt-3 text-sm leading-6 text-gray-700">
                          {project.built}
                        </p>
                      </div>

                      <div className="mt-8 border-t border-gray-200 pt-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                          Qué demuestra
                        </p>

                        <p className="mt-3 text-sm leading-6 text-gray-700">
                          {project.signal}
                        </p>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>

      {/* =========================================================
          OTHER WORK
      ========================================================== */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.5 }}
        className="mt-20 md:mt-28"
      >
        <div className="grid gap-6 border-b border-gray-950 pb-7 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Más trabajo
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">
              Otros proyectos
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500 md:text-right">
            Sitios, aplicaciones y experimentos desarrollados para clientes,
            productos propios y exploraciones personales.
          </p>
        </div>

        <div>
          {otherProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.35,
                delay: Math.min(index * 0.025, 0.15),
              }}
              className="group grid gap-3 border-b border-gray-200 py-6 transition-colors hover:border-gray-400 md:grid-cols-[minmax(220px,0.7fr)_minmax(0,1fr)_auto] md:items-center md:gap-8"
            >
              <h3 className="text-base font-semibold text-gray-950 transition-colors group-hover:text-blue-600">
                {project.title}
              </h3>

              <p className="max-w-2xl text-sm leading-6 text-gray-500">
                {project.desc}
              </p>

              <span className="flex items-center text-sm font-medium text-gray-400 transition-colors group-hover:text-gray-950">
                Visitar
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.5 }}
        className="mt-24 border-t border-gray-200 pt-16 md:mt-32 md:pt-20"
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              ¿Tienes una idea?
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Si el problema es real, podemos convertirlo en producto.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
              Desde una herramienta interna hasta una experiencia pública, puedo
              ayudarte a definir, diseñar y desarrollar la solución.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/servicios"
              className="inline-flex min-h-12 items-center justify-center border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-950"
            >
              Ver servicios
            </Link>

            <Link
              href="/contacto"
              className="inline-flex min-h-12 items-center justify-center bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
            >
              Hablemos
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
