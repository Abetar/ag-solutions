"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png" // 👈 asegúrate de tenerlo en /public/logo.png
            alt="AG Solutions Logo"
            width={70}
            height={70}
            className="object-contain"
            priority
          />
          <span className="text-lg font-bold text-gray-900 hidden sm:inline">
            AG <span className="text-blue-600">SolutionsDev</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li><Link href="/servicios">Servicios</Link></li>
          <li><Link href="/proyectos">Proyectos</Link></li>
          <li><Link href="/nosotros">Nosotros</Link></li>
          <li><Link href="/preguntas-frecuentes">FAQ</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile nav - framer motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t"
          >
            <ul className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
              <li><Link href="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
              <li><Link href="/proyectos" onClick={() => setMenuOpen(false)}>Proyectos</Link></li>
              <li><Link href="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link></li>
              <li><Link href="/preguntas-frecuentes" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
              <li><Link href="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
