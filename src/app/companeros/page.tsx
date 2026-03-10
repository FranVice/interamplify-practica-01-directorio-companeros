import Link from "next/link";
import { coworkers } from "../../lib/data";
import CompanerosClient from "../../components/CompanerosCliente";

export default function CompanerosPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 relative overflow-hidden transition-colors duration-500">
      
      {/* Elementos decorativos de fondo: Cuadrícula lila intensa para mantener consistencia con la landing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 dark:opacity-60 pointer-events-none z-0" />
      
      <div className="relative max-w-6xl mx-auto pt-16">
        {/* Encabezado de sección: Estética profesional 'About Us' con jerarquía clara */}
        <div className="flex flex-col items-center text-center mb-20">
          <Link
            href="/"
            className="mb-8 inline-flex border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all items-center gap-2 backdrop-blur-sm group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
            Expertos <span className="text-blue-600 dark:text-blue-400">Interamplify</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl text-zinc-300 font-light leading-relaxed">
            Conoce al equipo que amplifica el éxito digital. Especialistas en SEO, 
            tecnología y crecimiento internacional.
          </p>
        </div>

        <div className="w-full relative z-10">
          <CompanerosClient coworkers={coworkers} />
        </div>
      </div>
    </main>
  );
}