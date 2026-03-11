import Link from "next/link";

export default function TechNotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans p-8 md:p-16 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Fondo sutil (matching con home/compañeros) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0" />

      <div className="relative z-10 text-center max-w-lg mx-auto bg-zinc-900/50 backdrop-blur-md p-10 sm:p-14 rounded-3xl border border-zinc-800 shadow-2xl">
        <div className="w-20 h-20 bg-zinc-800/80 rounded-3xl flex items-center justify-center mx-auto mb-8 text-zinc-500 shadow-inner">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h1 className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 mb-2">
          404
        </h1>
        <h2 className="text-2xl font-bold text-white mb-4">
          Tecnología no encontrada
        </h2>
        
        <p className="text-zinc-400 font-light mb-8 text-lg">
          No hemos encontrado ningún compañero en la base de datos que utilice esta herramienta en su stack actual. 
          Es posible que la URL contenga algún error tipográfico.
        </p>
        
        <Link
          href="/tecnologias"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_-10px_rgba(37,99,235,0.6)] group"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a Tecnologías
        </Link>
      </div>
    </main>
  );
}
