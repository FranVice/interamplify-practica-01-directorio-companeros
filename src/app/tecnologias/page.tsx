import type { Metadata } from "next";
import Link from "next/link";
import BuscadorTecnologias from "../../components/BuscadorTecnologias";
import { coworkers } from "../../lib/data";

// RF-04: metadatos estáticos de la página índice de tecnologías.
export const metadata: Metadata = {
  title: "Stack Tecnológico | Interamplify Team",
  description:
    "Explora todas las tecnologías que usa el equipo de Interamplify y encuentra a los especialistas de cada herramienta.",
};

export default function TecnologiasPage() {
  // RF-04: lista única de tecnologías derivada del dataset, sin duplicados y ordenada alfabéticamente.
  const todasLasTecs = Array.from(
    new Set(coworkers.flatMap((c) => c.tecnologias))
  ).sort((a, b) => a.localeCompare(b, "es"));

  // RF-04: mapa de conteo de compañeros por tecnología, derivado del mismo dataset.
  const conteoTecnologias = coworkers.reduce<Record<string, number>>(
    (acc, companero) => {
      companero.tecnologias.forEach((tech) => {
        acc[tech] = (acc[tech] ?? 0) + 1;
      });
      return acc;
    },
    {}
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-14 pointer-events-none z-0" />

      <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto pt-16">
        <div className="mb-16">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-sm group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Inicio
          </Link>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-6">
            Stack <span className="text-blue-600">Tecnológico</span>
          </h1>
          <p className="text-blue-50 text-lg md:text-xl max-w-xl font-light leading-relaxed">
            Explora las herramientas y frameworks que utilizamos para construir soluciones digitales de alto impacto.
          </p>
        </div>

        <div className="mb-20">
          {/* Buscador con autocompletado para acceso rápido al detalle de cada tecnología (punto extra). */}
          <BuscadorTecnologias />
        </div>

        {/*
          RF-04: cada tarjeta enlaza a su página dinámica /tecnologias/[tech]
          y muestra el contador de compañeros que usan esa tecnología.
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-16">
          {todasLasTecs.map((tech) => {
            const count = conteoTecnologias[tech];
            return (
              <Link
                key={tech}
                href={`/tecnologias/${encodeURIComponent(tech)}`}
                className="group flex flex-col items-center gap-2 p-6 bg-zinc-900 shadow-xl border border-zinc-800 rounded-2xl hover:border-blue-500/50 hover:bg-zinc-800/80 transition-all hover:-translate-y-1 text-center"
              >
                <span className="text-zinc-300 font-medium group-hover:text-blue-400 transition-colors">
                  {tech}
                </span>
                <span className="text-xs text-zinc-500 group-hover:text-blue-500/70 transition-colors">
                  {count} {count === 1 ? "compañero" : "compañeros"}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Cada página gestiona su propio pie de página, sin footer global (requisito técnico). */}
        <footer className="border-t border-zinc-800/80 pt-10 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>© 2024 Interamplify Directory. <span className="text-zinc-300">Expertise that Scales.</span></p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-blue-400 transition-colors">Inicio</Link>
            <Link href="/companeros" className="hover:text-blue-400 transition-colors">Compañeros</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
