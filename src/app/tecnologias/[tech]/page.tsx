import Link from "next/link";
import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { coworkers, type Coworker } from "../../../lib/data";
import TechFilterClient from "../../../components/TechFilterClient";

interface Props {
  params: Promise<{
    tech: string;
  }>;
}

// 1. Metadatos dinámicos - async porque params es una Promise en Next.js 15+
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tech } = await params;
  const techName = decodeURIComponent(tech);
  return {
    title: `${techName} | Especialistas en Interamplify`,
    description: `Descubre a los expertos en ${techName} del equipo de Interamplify.`,
  };
}

// 2. Generamos rutas estáticas (SSG) en tiempo de construcción
export function generateStaticParams() {
  const allTechs = new Set<string>();
  
  coworkers.forEach((coworker) => {
    coworker.tecnologias.forEach((tech) => {
      allTechs.add(tech);
    });
  });

  return Array.from(allTechs).map((tech) => ({
    tech: tech,
  }));
}

// 3. Componente de página - async porque params es una Promise en Next.js 15+
export default async function TecnologiaDetallePage({ params }: Props) {
  const { tech } = await params;
  const techName = decodeURIComponent(tech);

  const filteredCoworkers = coworkers.filter((coworker: Coworker) =>
    coworker.tecnologias.includes(techName)
  );

  if (filteredCoworkers.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans p-8 md:p-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-12">
          <Link
            href="/tecnologias"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6 font-medium"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Tecnologías
          </Link>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Especialistas en <span className="text-blue-500">{techName}</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            {filteredCoworkers.length === 1 
              ? `Hemos encontrado 1 compañero que trabaja con ${techName}.` 
              : `Hemos encontrado ${filteredCoworkers.length} compañeros que trabajan con ${techName}.`}
          </p>
        </div>

        <TechFilterClient coworkers={filteredCoworkers} techName={techName} />
      </div>
    </main>
  );
}
