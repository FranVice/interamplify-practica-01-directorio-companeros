/**
 * TechFilterClient: Componente de cliente especializado en filtrar
 * una sub-lista de compañeros que ya pertenecen a una misma tecnologia.
 */

"use client";

import { useMemo, useState } from "react";
import type { Coworker } from "../lib/data";
import MemberCard from "./MemberCard";

interface Props {
  coworkers: Coworker[]; // Lista ya filtrada por tecnología desde el servidor
  techName: string;    // Nombre de la tecnología para el placeholder dinámico
}

/**
 * Normalización de cadenas para búsquedas insensibles a mayúsculas y acentos.
 */
function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function TechFilterClient({ coworkers, techName }: Props) {
  const [busqueda, setBusqueda] = useState<string>(""); // Término de búsqueda local

  /**
   * Filtrado en tiempo real basado en el input.
   */
  const filtrados = useMemo(() => {
    let listado = coworkers;
    const q = normalizar(busqueda.trim());
    if (q) {
      listado = listado.filter((c) => normalizar(c.nombre).includes(q));
    }
    return listado;
  }, [busqueda, coworkers]);

  return (
    <div className="space-y-12 w-full">
      {/* ── Buscador Secundario ── 
           Permite filtrar compañeros DENTRO de la tecnología seleccionada */}
      <div className="relative max-w-xl mx-auto">
        <label className="block relative group flex-grow w-full">
          <span className="sr-only">Filtrar por nombre</span>
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-400 transition-colors">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder={`Buscar experto en ${techName}...`}
            className="w-full pl-14 pr-6 py-5 bg-zinc-900/50 border border-zinc-800 rounded-3xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all backdrop-blur-md shadow-2xl"
          />
        </label>
      </div>

      {/* ── Rejilla de Especialistas ── 
           Usa el componente MemberCard y añade una animación de 'fade-in' */}
      {filtrados.length > 0 ? (
        <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((coworker, index) => (
            <MemberCard
              key={coworker.id}
              coworker={coworker}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </ul>
      ) : (
        /* ── Caso No Resultados ── */
        <div className="text-center py-20 bg-zinc-900/50 backdrop-blur-sm rounded-3xl border border-dashed border-zinc-800">
          <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-zinc-500">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Sin resultados</h3>
          <p className="text-zinc-400 font-light max-w-md mx-auto">
            No hay ningún compañero especializado en <span className="text-white font-medium">{techName}</span> que coincida con "{busqueda}".
          </p>
        </div>
      )}
    </div>
  );
}
