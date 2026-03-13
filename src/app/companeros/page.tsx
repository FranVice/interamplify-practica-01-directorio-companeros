import Link from "next/link";
import { coworkers } from "../../lib/data";
import CompanerosClient from "../../components/CompanerosCliente";

export default function CompanerosPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 relative overflow-hidden transition-colors duration-500">
      
      {/* Elementos decorativos de fondo: Cuadrícula lila para consistencia con el resto de páginas */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 dark:opacity-60 pointer-events-none z-0" />
      
      <div className="relative max-w-6xl mx-auto pt-16">

        {/* ── Encabezado ── Botón de vuelta, título y descripción */}
        <div className="flex flex-col items-center text-center mb-20">

          {/* Botón de navegación hacia atrás */}
          <Link
            href="/"
            className="mb-8 inline-flex border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all items-center gap-2 backdrop-blur-sm group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
          
          {/* Título principal con degradado de blanco a zinc */}
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
            Expertos <span className="text-blue-600 dark:text-blue-400">Interamplify</span>
          </h1>

          {/* Descripción breve del equipo */}
          <p className="text-lg md:text-xl max-w-2xl text-zinc-300 font-light leading-relaxed">
            Conoce al equipo que amplifica el éxito digital. Especialistas en SEO, 
            tecnología y crecimiento internacional.
          </p>
        </div>

        {/* pb-28 deja espacio para que el footer fijo no tape las últimas tarjetas */}
        <div className="w-full relative z-10 pb-28">
          {/* Componente de cliente: gestiona la búsqueda y filtrado en tiempo real */}
          <CompanerosClient coworkers={coworkers} />
        </div>
      </div>

      {/* ── Footer fijo (fixed) ──
           Siempre visible en la parte inferior de la pantalla.
           No incluye enlace a /companeros porque ya estamos en esa página. */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 w-full border-t border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-100 text-sm">

          {/* Lado izquierdo: copyright y eslogan */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© 2024 Interamplify. Todos los derechos reservados.</p>
            <p className="text-zinc-500 italic font-medium">Expertise that Scales.</p>
          </div>

          {/* Lado derecho: enlaces de navegación (todos excepto /companeros) */}
          <div className="flex items-center gap-8">

            {/* Enlace a Stack Tecnológico con icono de código */}
            <Link
              href="/tecnologias"
              className="text-white hover:text-blue-400 transition-colors flex items-center gap-2 group font-semibold"
            >
              Stack Tecnológico
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </Link>

            {/* Enlace a Inicio */}
            <Link
              href="/"
              className="text-zinc-300 hover:text-white transition-colors font-medium"
            >
              Inicio
            </Link>

          </div>
        </div>
      </footer>

    </main>
  );
}