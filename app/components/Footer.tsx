export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto py-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} AG Solutions. Todos los derechos reservados.</p>
        <nav className="flex gap-4">
          <a href="/privacidad" className="hover:underline">Privacidad</a>
          <a href="/contacto" className="hover:underline">Contacto</a>
        </nav>
      </div>
    </footer>
  );
}
