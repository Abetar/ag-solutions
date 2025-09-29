"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbqdjbj";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json?.error || "No se pudo enviar el formulario.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Ocurrió un error de red. Intenta de nuevo.");
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-2xl"
    >
      <form onSubmit={onSubmit} className="bg-white border rounded-xl p-6 space-y-4 shadow-sm">
        {/* Honeypot anti-spam */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              required
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border rounded-lg px-3 py-2"
              placeholder="tunombre@correo.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="telefono">Teléfono (opcional)</label>
          <input
            id="telefono"
            name="telefono"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="+52 33 0000 0000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="message"
            required
            rows={5}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Cuéntame brevemente qué necesitas…"
          />
        </div>

        {/* Opcional: asunto visible en Formspree */}
        <input type="hidden" name="_subject" value="Nuevo mensaje desde agsolutions.dev" />

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full md:w-auto px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60"
        >
          {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        </button>

        {status === "ok" && (
          <p className="text-green-600 text-sm pt-2">
            ¡Gracias! Tu mensaje fue enviado. Te contactaré pronto.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm pt-2">
            {errorMsg || "No fue posible enviar el mensaje. Intenta nuevamente."}
          </p>
        )}
      </form>

      <p className="text-xs text-gray-500 mt-3">
        Al enviar aceptas que podamos contactarte respecto a tu solicitud.
      </p>
    </motion.section>
  );
}
