import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { coworkers } from "../../../lib/data";

interface PropiedadesPagina {
  params: Promise<{ id: string }>;
}

// Punto extra: prerenderiza en build una página estática por cada compañero del dataset.
export async function generateStaticParams() {
  return coworkers.map((companero) => ({ id: companero.id }));
}

// Punto extra: genera el <title> y description dinámicos según el compañero.
export async function generateMetadata({
  params,
}: PropiedadesPagina): Promise<Metadata> {
  const { id } = await params;
  const companero = coworkers.find((item) => item.id === id);

  if (!companero) {
    return { title: "Compañero no encontrado" };
  }

  return {
    title: `${companero.nombre} · Directorio de Compañeros`,
    description: `${companero.rol} - ${companero.bio}`,
  };
}

export default async function PaginaCompanero({
  params,
}: PropiedadesPagina) {
  const { id } = await params;
  const companero = coworkers.find((item) => item.id === id);

  // Si el id no corresponde a ningún compañero del dataset, Next.js renderiza el not-found.tsx.
  if (!companero) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-14 pointer-events-none z-0" />

      <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl pointer-events-none z-0" />

      {/* flex-col + min-h garantizan que el footer quede siempre al fondo aunque haya poco contenido */}
      <div className="relative z-10 max-w-4xl mx-auto pt-16 flex flex-col min-h-[calc(100vh-8rem)]">
        <div className="flex-1">{/* flex-1 empuja el footer hacia abajo ocupando el espacio sobrante */}
        <div className="relative w-full max-w-2xl mx-auto bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-500" />

          <Link
            href="/companeros"
            className="mb-8 inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-sm group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Compañeros
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8 pb-8 border-b border-zinc-800">
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold mb-2 text-blue-500 tracking-tight">
                {companero.nombre}
              </h1>
              <p className="text-xl font-medium text-zinc-300">
                {companero.rol}
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Sobre mí</h2>
            <p className="text-lg leading-relaxed text-zinc-300 font-light">
              {companero.bio}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Tecnologías</h2>
            <div className="flex flex-wrap gap-2">
              {companero.tecnologias.map((tecnologia) => (
                <span
                  key={tecnologia}
                  className="px-4 py-2 text-sm font-medium rounded-xl bg-blue-900/20 text-blue-300 border border-blue-800/30"
                >
                  {tecnologia}
                </span>
              ))}
            </div>
          </div>
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
