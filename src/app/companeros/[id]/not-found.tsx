import Link from "next/link";

export default function CompaneroNotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8 md:p-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col min-h-[calc(100vh-8rem)]">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-center max-w-lg mx-auto bg-zinc-900/50 backdrop-blur-md p-10 sm:p-14 rounded-3xl border border-zinc-800 shadow-2xl">
            <div className="w-20 h-20 bg-zinc-800/80 rounded-3xl flex items-center justify-center mx-auto mb-8 text-zinc-500 shadow-inner">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <h1 className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 mb-2">
              404
            </h1>
            <h2 className="text-2xl font-bold text-white mb-4">
              Compañero no encontrado
            </h2>

            <p className="text-zinc-400 font-light mb-8 text-lg">
              No hemos encontrado un perfil con ese identificador en el directorio actual.
              Revisa la URL o vuelve al listado general para seguir navegando.
            </p>

            <Link
              href="/companeros"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_-10px_rgba(37,99,235,0.6)] group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver a Compañeros
            </Link>
          </div>
        </div>

        {/* Cada página gestiona su propio pie de página, sin footer global (requisito técnico). */}
        <footer className="mt-12 border-t border-zinc-800/80 pt-10 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>© 2024 Interamplify Directory. <span className="text-zinc-300">Expertise that Scales.</span></p>
          <div className="flex items-center gap-6">
            <Link href="/companeros" className="hover:text-blue-400 transition-colors">Compañeros</Link>
            <Link href="/tecnologias" className="hover:text-blue-400 transition-colors">Tecnologías</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
