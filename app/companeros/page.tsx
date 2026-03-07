import Link from "next/link";
import { coworkers } from "../../lib/data";
import CompanerosClient from "../../components/CompanerosCliente";

export default function CompanerosPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_2px,transparent_2px),linear-gradient(to_bottom,#8b5cf6_2px,transparent_2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none z-0" />
      

      
      <div className="relative max-w-5xl mx-auto pt-10">
        <div className="flex flex-col items-center text-center mb-12">
          <Link
            href="/"
            className="mb-6 inline-flex border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors items-center gap-2 backdrop-blur-sm"
          >
            ← Volver al inicio
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-500 tracking-tight">
            Directorio del Equipo
          </h1>

          <p className="text-lg max-w-2xl text-zinc-100 font-medium">
            Encuentra y conoce a los miembros del departamento de Desarrollo.
          </p>
        </div>

        <div className="w-full">
          <CompanerosClient coworkers={coworkers} />
        </div>
      </div>
    </main>
  );
}