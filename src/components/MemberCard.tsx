import React from "react";
import Link from "next/link";
import type { Coworker } from "../lib/data";

/**
 * Propiedades del componente MemberCard.
 */
interface MemberCardProps {
  coworker: Coworker;      // Datos del compañero a mostrar
  className?: string;       // Clases CSS adicionales
  style?: React.CSSProperties; // Estilos en línea opcionales (ej: para animaciones)
}

/**
 * MemberCard: Representación visual de un compañero en forma de tarjeta.
 * Muestra el nombre, rol, tecnologías (en forma de badges) y un enlace al perfil.
 * Utiliza efectos de hover con Framer Motion (o Tailwind transitions) para una sensación premium.
 */
export default function MemberCard({ coworker, className = "", style }: MemberCardProps) {
  return (
    <li 
      className={`group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 transition-all duration-500 hover:bg-zinc-900/60 hover:border-blue-500/50 hover:-translate-y-2 ${className}`} 
      style={style}
    >
      {/* Efecto de borde superior sutil (gradiente) que aparece al pasar el ratón */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-400/40 to-indigo-500/0 group-hover:opacity-100 opacity-0 transition-opacity duration-500 rounded-t-3xl" />
      
      <div className="flex flex-col h-full relative z-10">
        {/* Nombre del profesional */}
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {coworker.nombre}
        </h3>

        {/* Rol / Puesto en la empresa */}
        <p className="text-sm font-semibold text-blue-400/80 mb-6 uppercase tracking-wider">
          {coworker.rol}
        </p>

        {/* Listado de tecnologías (Badges): Cumple con el requisito visual de la práctica */}
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

        {/* CTAs: "Ver Perfil Profesional" que reacciona al hover de la tarjeta */}
        <div className="inline-flex items-center gap-2 text-sm font-bold text-zinc-100 group-hover:text-blue-400 transition-all mt-auto group-hover:gap-4">
          Ver Perfil Profesional
          <svg className="w-5 h-5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
      
      {/* Enlace invisible que cubre toda la tarjeta para mejorar la accesibilidad y UX */}
      <Link 
        href={`/companeros/${coworker.id}`} 
        className="absolute inset-0 z-20 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-4 focus:ring-offset-zinc-950"
      >
        <span className="sr-only">Ver perfil de {coworker.nombre}</span>
      </Link>
    </li>
  );
}