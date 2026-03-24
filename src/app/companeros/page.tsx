import type { Metadata } from "next";
import Link from "next/link";
import CompanerosCliente from "../../components/CompanerosCliente";
import { coworkers } from "../../lib/data";

// RF-02: metadatos estáticos de la sección About Us del equipo.
export const metadata: Metadata = {
  title: "Equipo Interamplify | Directorio de Compañeros",
  description:
    "Conoce a los especialistas en SEO, desarrollo y crecimiento digital que forman el equipo de Interamplify.",
};

// RF-02 + RF-03: página About Us del equipo con listado, ordenación y búsqueda por nombre.
export default function CompanerosPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-14 pointer-events-none z-0" />

      <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl pointer-events-none z-0" />

      <div className="relative max-w-6xl mx-auto pt-16">
        <div className="flex flex-col items-center text-center mb-20">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-sm group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Inicio
          </Link>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.05] text-white">
            Expertos <span className="text-blue-600 dark:text-blue-400">Interamplify</span>
          </h1>

          <p className="text-blue-50 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Conoce al equipo que amplifica el éxito digital. Especialistas en SEO, tecnología y crecimiento internacional.
          </p>
        </div>

        <div className="w-full relative z-10 pb-16">
          {/*
            RF-02: listado del equipo renderizado con MemberCard.
            RF-03: CompanerosCliente gestiona la búsqueda y ordenación A→Z / Z→A en el cliente.
          */}
          <CompanerosCliente companeros={coworkers} />
        </div>

        {/* Cada página gestiona su propio pie de página, sin footer global (requisito técnico). */}
        <footer className="border-t border-zinc-800/80 pt-10 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>© 2024 Interamplify Directory. <span className="text-zinc-300">Expertise that Scales.</span></p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-blue-400 transition-colors">Inicio</Link>
            <Link href="/tecnologias" className="hover:text-blue-400 transition-colors">Tecnologías</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
