import React from "react";
import Link from "next/link";
import type { Coworker } from "../lib/data";

interface MemberCardProps {
  coworker: Coworker;
  className?: string;
  style?: React.CSSProperties;
}

// Recibe un coworker tipado mediante props y renderiza una tarjeta con su información.
// Cada tarjeta incluye un Link que permite navegar a la página de detalle del compañero.
// MemberCard.tsx: Componente para mostrar la información básica de un compañero.
// Recibe un coworker tipado mediante la interfaz Coworker definida en data.ts.
export default function MemberCard({ coworker, className = "", style }: MemberCardProps) {
  return (
    <li className={`group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 transition-all duration-500 hover:bg-zinc-900/60 hover:border-blue-500/50 hover:-translate-y-2 ${className}`} style={style}>
      {/* Efecto de borde superior sutil al pasar el ratón */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-400/40 to-indigo-500/0 group-hover:opacity-100 opacity-0 transition-opacity duration-500 rounded-t-3xl" />
      
      <div className="flex flex-col h-full relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {coworker.nombre}
        </h3>

        <p className="text-sm font-semibold text-blue-400/80 mb-6 uppercase tracking-wider">
          {coworker.rol}
        </p>

        {/* Sección de Tecnologías: Badges cumpliendo el requisito de RF-02 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {coworker.tecnologias.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-xs font-medium rounded-lg"
            >
              {tech}
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
      
      {/* Enlace que cubre toda la tarjeta para mejorar la UX */}
      <Link 
        href={`/companeros/${coworker.id}`} 
        className="absolute inset-0 z-20 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-4 focus:ring-offset-zinc-950"
      >
        <span className="sr-only">Ver perfil de {coworker.nombre}</span>
      </Link>
    </li>
  );
}