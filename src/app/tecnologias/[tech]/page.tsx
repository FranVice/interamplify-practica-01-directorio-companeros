import Link from "next/link";
import { notFound } from "next/navigation";
import { coworkers, type Coworker } from "../../../lib/data";
import MemberCard from "../../../components/MemberCard";

interface Props {
  params: {
    tech: string;
  };
}

export default function TecnologiaDetallePage({ params }: Props) {
  // 1. Decodificar el parámetro de la URL (por si tiene espacios, ej: "Next.js")
  const techName = decodeURIComponent(params.tech);

  // 2. Filtrar compañeros que tengan esta tecnología en su array
  const filteredCoworkers = coworkers.filter((coworker: Coworker) =>
    coworker.tecnologias.includes(techName)
  );

  // 3. Ejecutar 404 de Next.js si la tecnología no se usa por nadie
  if (filteredCoworkers.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans p-8 md:p-16 relative overflow-hidden">
      {/* Fondo sutil (matching con home/compañeros) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Navegación y Encabezado */}
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

        {/* Listado de compañeros filtrados */}
        <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCoworkers.map((coworker: Coworker) => (
            <MemberCard key={coworker.id} coworker={coworker} />
          ))}
        </ul>
      </div>
    </main>
  );
}
