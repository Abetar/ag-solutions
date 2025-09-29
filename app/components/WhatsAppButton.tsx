"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const phone = "523346209165"; // 👈 tu número con LADA sin +
  const message = "Hola, me gustaría más información sobre sus servicios."; 
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip (solo visible en desktop) */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.2 }}
          className="hidden sm:block bg-gray-800 text-white text-sm px-3 py-1 rounded-lg shadow-md"
        >
          Escríbenos
        </motion.div>
      )}

      {/* Botón flotante */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </motion.div>
  );
}
