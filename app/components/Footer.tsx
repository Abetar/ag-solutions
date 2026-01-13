import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-16 bg-gray-50">
      <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-sm text-gray-600">
        {/* Columna 1: Marca + SEO */}
        <div className="space-y-2">
          <p className="font-semibold text-gray-800">AG Solutions</p>
          <p>
            Automatización, scraping y desarrollo web orientado a resultados
            para empresas y profesionales en México.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} AG Solutions. Todos los derechos
            reservados.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <nav className="flex flex-col gap-2">
          <p className="font-semibold text-gray-800">Navegación</p>
          <Link href="/servicios" className="hover:underline">
            Servicios
          </Link>
          <Link href="/proyectos" className="hover:underline">
            Proyectos
          </Link>
          <Link href="/como-trabajamos" className="hover:underline">
            Cómo trabajamos
          </Link>
          <Link href="/nosotros" className="hover:underline">
            Nosotros
          </Link>
          <Link href="/contacto" className="hover:underline">
            Contacto
          </Link>
        </nav>

        {/* Columna 3: Confianza / Legal */}
        <div className="space-y-2">
          <p className="font-semibold text-gray-800">Información</p>
          <Link href="/preguntas-frecuentes" className="hover:underline">
            Preguntas frecuentes
          </Link>
          <br />
          <Link href="/privacidad" className="hover:underline">
            Aviso de privacidad
          </Link>
          <p className="text-xs text-gray-500 pt-2">
            Sitios rápidos, integraciones claras y soluciones sin humo.
          </p>
        </div>
      </div>
    </footer>
  );
}
