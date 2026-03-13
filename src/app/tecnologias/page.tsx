/**
 * Página de Tecnologías: Muestra un catálogo de todas las herramientas utilizadas por el equipo.
 * Incluye un buscador con autocompletado y un footer fijo con navegación global.
 */

import Link from "next/link";
import { coworkers } from "../../lib/data";
import TechSearchBar from "../../components/TechSearchBar";

export default function TecnologiasPage() {
  
  /**
   * Generación del listado de tecnologías únicas a partir del dataset central.
   * Usamos Set para evitar duplicados.
   */
  const todasLasTecs = Array.from(
    new Set(coworkers.flatMap((c) => c.tecnologias))
  ).sort((a, b) => a.localeCompare(b, "es"));

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8 relative overflow-hidden">
      
      {/* ── Fondo decorativo ── Consistent Grid Design */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto pt-16">
        
        {/* ── Encabezado ── Botón de vuelta y títulos */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            Stack <span className="text-blue-500">Tecnológico</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl font-light">
            Explora las herramientas y frameworks que utilizamos para construir soluciones digitales de alto impacto.
          </p>
        </div>

        {/* ── Buscador Dinámico ── 
             Componente Client-Side con lógica de autocompletado. */}
        <div className="mb-20">
          <TechSearchBar />
        </div>

        {/* ── Grid de Tecnologías ── 
             Listado interactivo que lleva a las páginas de especialistas.
             pb-28 compensa la altura del footer fixed. */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-28">
          {todasLasTecs.map((tech) => (
            <Link
              key={tech}
              href={`/tecnologias/${encodeURIComponent(tech)}`}
              className="group p-6 bg-zinc-900 shadow-xl border border-zinc-800 rounded-2xl hover:border-blue-500/50 hover:bg-zinc-800/80 transition-all hover:-translate-y-1 text-center"
            >
              <span className="text-zinc-300 font-medium group-hover:text-blue-400 transition-colors">
                {tech}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Footer Fijo ──
           Diseño compacto y elegante siempre presente en la parte inferior.
           Excluye el enlace a Stack Tecnológico al ser la página actual. */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 w-full border-t border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-100 text-sm">
          
          {/* Copyright y Eslogan */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© 2024 Interamplify. Todos los derechos reservados.</p>
            <p className="text-zinc-500 italic font-medium">Expertise that Scales.</p>
          </div>

          {/* Navegación del Footer */}
          <div className="flex items-center gap-8">
            <Link
              href="/companeros"
              className="text-white hover:text-blue-400 transition-colors flex items-center gap-2 group font-semibold"
            >
              Directorio de Expertos
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
