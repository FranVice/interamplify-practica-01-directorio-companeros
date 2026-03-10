import Link from "next/link";

export default function Home() {
  return (
    /* Contenedor principal: Adaptable a modo claro/oscuro mediante variables de globals.css */
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 relative overflow-hidden transition-colors duration-500">
      
      {/* Elementos decorativos de fondo: Cuadrícula lila más intensa (Vibrant Violet) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 dark:opacity-60 pointer-events-none z-0" />

      {/* Hero Section: Jerarquía visual clara y tipografía impactante */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
          Interamplify <span className="text-blue-600 dark:text-blue-400">Team</span>
        </h1>

        <p className="mb-12 text-lg md:text-xl text-zinc-100 font-light leading-relaxed max-w-xl">
          El directorio centralizado de expertos en SEO, Marketing Digital y Tecnología. 
          Conectando el motor de amplificación de nuestra organización.
        </p>

        {/* Call-to-Action (CTA): Botón principal con transición suave y efecto de brillo */}
        <Link
          href="/companeros"
          className="group relative inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white text-xl font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(37,99,235,0.6)]"
        >
          <span className="relative z-10 flex items-center gap-3">
            Explorar Directorio
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </div>

      {/* Sección de Características: Grid responsivo de 3 tarjetas */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-6xl mx-auto w-full">
        {/* Tarjeta 1: Directorio Centralizado (Fondo Zinc-950 para total integración con el negro) */}
        <div className="group p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
          <div className="w-12 h-12 bg-blue-600/10 dark:bg-blue-400/20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Directorio Interamplify</h3>
          <p className="text-zinc-100 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
            Accede al talento que impulsa las estrategias de SEO y Link Building más potentes del mercado.
          </p>
        </div>

        {/* Tarjeta 2: Perfiles Detallados */}
        <div className="group p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2">
          <div className="w-12 h-12 bg-indigo-600/10 dark:bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-500 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m15 5l-5-5m5 5l-5 5" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Perfiles Detallados</h3>
          <p className="text-zinc-200 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
            Consulta habilidades, proyectos actuales y el rol específico de cada compañero en la organización.
          </p>
        </div>

        {/* Tarjeta 3: Gestión Tecnológica */}
        <div className="group p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2">
          <div className="w-12 h-12 bg-emerald-600/10 dark:bg-emerald-600/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Gestión Tecnológica</h3>
          <p className="text-zinc-200 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
            Explora las herramientas y stacks tecnológicos que definen nuestro departamento de desarrollo.
          </p>
        </div>
      </div>

      {/* Footer: Navegación de alto contraste sobre fondo Zinc-950 */}
      <footer className="relative z-10 mt-32 pb-12 w-full max-w-6xl mx-auto border-t border-zinc-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-100 text-sm">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p>© 2024 Interamplify. Todos los derechos reservados.</p>
          <p className="text-zinc-500 italic font-medium">Expertise that Scales.</p>
        </div>

        {/* Enlaces: Texto blanco/zinc para máxima visibilidad en el pie de página */}
        <div className="flex items-center gap-8">
          <Link 
            href="/tecnologias" 
            className="text-white hover:text-blue-400 transition-colors flex items-center gap-2 group font-semibold"
          >
            Stack Tecnológico
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </Link>
          <Link href="/companeros" className="text-zinc-300 hover:text-white transition-colors font-medium">Compañeros</Link>
          <Link href="/" className="text-zinc-300 hover:text-white transition-colors font-bold">Inicio</Link>
        </div>
      </footer>
    </main>
  );
}