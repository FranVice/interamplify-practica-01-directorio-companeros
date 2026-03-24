import Link from "next/link";

// RF-01: landing page de producto con hero, características y CTAs al directorio y tecnologías.
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8 relative overflow-hidden selection:bg-blue-500/30">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-14 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto pt-24 md:pt-32">
        {/* RF-01: Hero section — eyebrow, titular, subtítulo y CTAs */}
        <div className="flex flex-col items-center text-center space-y-8 mb-24">
          {/* Eyebrow: badge decorativo que introduce el hero */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Equipo Interamplify
          </div>

          {/* Titular principal del hero */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] animate-fade-in-up text-white">
            Expertos que <br />
            <span className="text-blue-600">Escalan tu Éxito</span>
          </h1>

          {/* Subtítulo descriptivo del hero */}
          <p className="text-blue-50 text-lg md:text-xl max-w-2xl font-light leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Descubre a los profesionales certificados en SEO, Desarrollo y Estrategia detrás de los proyectos digitales más ambiciosos.
          </p>

          {/* RF-01: CTA principal a /companeros y enlace secundario a /tecnologias. */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up [animation-delay:400ms]">
            <Link
              href="/companeros"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group"
            >
              Explorar Directorio
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/tecnologias"
              className="px-6 py-4 bg-zinc-700 hover:bg-zinc-500 text-white rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group"
            >
              Tecnologías
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up [animation-delay:600ms]">
          <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl backdrop-blur-sm group hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Filtrado Avanzado</h3>
            <p className="text-amber-50 text-sm leading-relaxed">
              Encuentra al especialista ideal filtrando por nombre o por su stack tecnológico específico.
            </p>
          </div>

          <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl backdrop-blur-sm group hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-indigo-600/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-500 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Perfiles Verificados</h3>
            <p className="text-amber-50 text-sm leading-relaxed">
              Profesionales con experiencia real en herramientas líderes del sector como Ahrefs o Next.js.
            </p>
          </div>

          <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl backdrop-blur-sm group hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Alta Performance</h3>
            <p className="text-amber-50 text-sm leading-relaxed">
              Navegación instantánea gracias a la tecnología de Next.js App Router y renderizado optimizado.
            </p>
          </div>
        </div>

        {/* Cada página gestiona su propio pie de página, sin footer global (requisito técnico). */}
        <footer className="mt-32 pt-12 border-t border-zinc-900 pb-12 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-400 text-sm">
          <p>© 2024 Interamplify Directory. <span className="text-zinc-300">Expertise that Scales.</span></p>
          <div className="flex gap-8">
            <Link href="/companeros" className="hover:text-blue-400 transition-colors">Directorio</Link>
            <Link href="/tecnologias" className="hover:text-blue-400 transition-colors">Tecnologías</Link>
            <a href="#" className="hover:text-blue-500 transition-colors">Privacidad</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
