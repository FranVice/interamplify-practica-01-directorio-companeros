import React from "react";
import Link from "next/link";
import type { Coworker } from "../lib/data";

// RF-02 + RF-05: MemberCard es el componente compartido que renderiza a cada compañero
// tanto en /companeros como en /tecnologias/[tech]. Está tipado con la interfaz Coworker.
interface MemberCardProps {
  companero: Coworker;
  className?: string;  // permite inyectar animaciones de entrada desde el padre
  style?: React.CSSProperties;  // permite inyectar animationDelay para el escalonado
}

export default function MemberCard({
  companero,
  className = "",
  style,
}: MemberCardProps) {
  return (
    <li
      className={`group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 transition-all duration-500 hover:bg-zinc-900/60 hover:border-blue-500/50 hover:-translate-y-2 ${className}`}
      style={style}
    >
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-400/40 to-indigo-500/0 group-hover:opacity-100 opacity-0 transition-opacity duration-500 rounded-t-3xl" />

      <div className="flex flex-col h-full relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {companero.nombre}
        </h3>

        <p className="text-sm font-semibold text-blue-400/80 mb-3 uppercase tracking-wider">
          {companero.rol}
        </p>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {companero.bio}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {companero.tecnologias.map((tecnologia) => (
            <span
              key={tecnologia}
              className="px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-xs font-medium rounded-lg"
            >
              {tecnologia}
            </span>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 text-sm font-bold text-zinc-100 group-hover:text-blue-400 transition-all mt-auto group-hover:gap-4">
          Ver Perfil Profesional
          <svg className="w-5 h-5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Enlace invisible superpuesto sobre toda la tarjeta para que sea clickable en su totalidad. */}
      <Link
        href={`/companeros/${companero.id}`}
        className="absolute inset-0 z-20 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-4 focus:ring-offset-zinc-950"
      >
        <span className="sr-only">Ver perfil de {companero.nombre}</span>
      </Link>
    </li>
  );
}
