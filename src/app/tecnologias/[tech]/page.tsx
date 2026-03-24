import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FiltroTecnologiaCliente from "../../../components/FiltroTecnologiaCliente";
import { coworkers, type Coworker } from "../../../lib/data";

interface PropiedadesPagina {
  params: Promise<{
    tech: string;
  }>;
}

// Punto extra: genera el <title> y description dinámicos según la tecnología.
export async function generateMetadata({
  params,
}: PropiedadesPagina): Promise<Metadata> {
  const { tech } = await params;
  const nombreTecnologia = decodeURIComponent(tech);

  return {
    title: `Expertos en ${nombreTecnologia} | Interamplify Team`,
    description: `Conoce a los especialistas de Interamplify expertos en ${nombreTecnologia}.`,
  };
}

// Punto extra: prerenderiza en build una página estática por cada tecnología del dataset.
export function generateStaticParams() {
  const todasLasTecnologias = new Set<string>();
  coworkers.forEach((companero) => {
    companero.tecnologias.forEach((tecnologia) => {
      todasLasTecnologias.add(tecnologia);
    });
  });
  return Array.from(todasLasTecnologias).map((tecnologia) => ({
    tech: tecnologia,
  }));
}

export default async function PaginaDetalleTecnologia({
  params,
}: PropiedadesPagina) {
  const { tech } = await params;
  const nombreTecnologia = decodeURIComponent(tech);

  // RF-05: filtra los compañeros que tienen esta tecnología en su stack.
  const companerosFiltrados = coworkers.filter((companero: Coworker) =>
    companero.tecnologias.includes(nombreTecnologia)
  );

  // RF-05: si ningún compañero usa esta tecnología, la URL no es válida → 404.
  if (companerosFiltrados.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans p-8 md:p-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-14 pointer-events-none z-0" />

      <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl pointer-events-none z-0" />

      {/* flex-col + min-h garantizan que el footer quede siempre al fondo aunque haya poco contenido */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col min-h-[calc(100vh-8rem)]">
        <div className="flex-1">{/* flex-1 empuja el footer hacia abajo ocupando el espacio sobrante */}
        <div className="mb-12">
          <Link
            href="/tecnologias"
            className="mb-6 inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-sm group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Tecnologías
          </Link>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Especialistas en <span className="text-blue-500">{nombreTecnologia}</span>
          </h1>

          <p className="text-zinc-400 text-lg max-w-2xl">
            {companerosFiltrados.length === 1
              ? `Hemos encontrado 1 compañero que trabaja con ${nombreTecnologia}.`
              : `Hemos encontrado ${companerosFiltrados.length} compañeros que trabajan con ${nombreTecnologia}.`}
          </p>
        </div>

        {/*
          RF-05: lista los compañeros especializados con MemberCard (mismo componente que en /companeros).
          Punto extra: FiltroTecnologiaCliente añade búsqueda por nombre en el cliente.
        */}
        <FiltroTecnologiaCliente
          companeros={companerosFiltrados}
          nombreTecnologia={nombreTecnologia}
        />
        </div>

        {/* Cada página gestiona su propio pie de página, sin footer global (requisito técnico). */}
        <footer className="mt-12 border-t border-zinc-800/80 pt-10 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>© 2024 Interamplify Directory. <span className="text-zinc-300">Expertise that Scales.</span></p>
          <div className="flex items-center gap-6">
            <Link href="/tecnologias" className="hover:text-blue-400 transition-colors">Tecnologías</Link>
            <Link href="/companeros" className="hover:text-blue-400 transition-colors">Compañeros</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
