import Link from "next/link";
import { coworkers } from "../../lib/data";

export default function TecnologiasPage() {
  // 1. Extraer y contar las tecnologías únicas dinámicamente
  const techCounts = coworkers.reduce((acc, coworker) => {
    coworker.tecnologias.forEach((tech) => {
      acc[tech] = (acc[tech] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  // 2. Convertir el objeto a un array para poder mapearlo e iterar sobre él
  const techList = Object.entries(techCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans p-8 md:p-16 relative overflow-hidden">
      {/* Fondo sutil (matching con home/compañeros) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              Tecnologías del <span className="text-blue-500">Equipo</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Explora el stack tecnológico que utilizan nuestros compañeros en su día a día.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-xl transition-all border border-zinc-800 hover:border-zinc-700 w-fit"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a inicio
          </Link>
        </div>

        {/* Grid de Tecnologías */}
        {techList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techList.map((tech) => (
              <Link
                key={tech.name}
                href={`/tecnologias/${tech.name}`}
                className="group relative flex flex-col p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl hover:border-blue-500/50 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Decoración superior sutil */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/50 group-hover:via-blue-400/50 group-hover:to-indigo-500/50 rounded-t-2xl transition-all duration-500" />
                
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </h2>
                
                <div className="mt-auto pt-4 flex items-center gap-2 text-sm text-zinc-400">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 font-medium text-xs border border-zinc-700">
                    {tech.count}
                  </span>
                  <span>{tech.count === 1 ? "compañero" : "compañeros"}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <p className="text-zinc-400 text-lg">No se encontraron tecnologías registradas.</p>
          </div>
        )}
      </div>
    </main>
  );
}
