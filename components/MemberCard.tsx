import Link from "next/link";
import type { Coworker } from "../lib/data";

interface MemberCardProps {
  coworker: Coworker;
}

// Recibe un coworker tipado mediante props y renderiza una tarjeta con su información.
// Cada tarjeta incluye un Link que permite navegar a la página de detalle del compañero.
export default function MemberCard({ coworker }: MemberCardProps) {
  return (
    <li className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:bg-zinc-800/80 hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:scale-[1.02] hover:-translate-y-1 z-0 focus-within:z-20 hover:z-20">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-500/0 to-indigo-500/0 group-hover:from-blue-600/50 group-hover:via-blue-500/50 group-hover:to-indigo-500/50 transition-all duration-300 rounded-t-2xl opacity-0 group-hover:opacity-100" />
      
      <div className="flex flex-col h-full relative z-10 pointer-events-none">
        <h3 className="text-xl font-bold text-zinc-100 mb-1 group-hover:text-blue-400 transition-colors">
          {coworker.nombre}
        </h3>

        <p className="text-sm font-medium text-zinc-400 mb-6 flex-grow">
          {coworker.rol}
        </p>

        <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 group-hover:text-blue-400 transition-colors mt-auto">
          Ver perfil
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
      
      {/* Truco accesible: Link que cubre toda la tarjeta */}
      <Link href={`/companeros/${coworker.id}`} className="absolute inset-0 z-20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-950">
        <span className="sr-only">Ver perfil de {coworker.nombre}</span>
      </Link>
    </li>
  );
}