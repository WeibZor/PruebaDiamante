export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Neyndra Commerce</h2>
            <p className="max-w-sm text-slate-400 leading-7">
              Una experiencia de compra premium con catálogo real, filtros inteligentes y diseño pensado para equipos modernos.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Enlaces</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a href="/gallery" className="hover:text-white transition-colors">Productos</a>
              </li>
              <li>
                <a href="/cart" className="hover:text-white transition-colors">Carrito</a>
              </li>
              <li>
                <a href="/login" className="hover:text-white transition-colors">Iniciar sesión</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Contacto</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>soporte@neyndra.com</p>
              <p>+57 300 000 0000</p>
              <p>Cali, Colombia</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <span>© 2026 Neyndra Commerce. Todos los derechos reservados.</span>
          <span>Diseñado para experiencias de comercio digital modernas.</span>
        </div>
      </div>
    </footer>
  );
}
