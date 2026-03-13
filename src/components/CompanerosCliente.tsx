/**
 * Componente de cliente que gestiona la búsqueda y filtrado de compañeros.
 * Implementa una interfaz de búsqueda en tiempo real y opciones de ordenación (A-Z, Z-A).
 */

"use client";

import { useMemo, useState } from "react";
import type { Coworker } from "../lib/data";
import MemberCard from "./MemberCard";

interface Props {
  coworkers: Coworker[]; // Lista completa de compañeros inyectada desde el servidor
}

/**
 * Función de utilidad para normalizar texto.
 * Elimina acentos y convierte a minúsculas para comparaciones precisas.
 */
function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Definimos un tipo estricto para las opciones de ordenación
export type Orden = "asc" | "desc";

export default function CompanerosClient({ coworkers }: Props) {
  const [busqueda, setBusqueda] = useState<string>(""); // Estado para el input de búsqueda
  const [orden, setOrden] = useState<Orden>("asc");     // Estado para el criterio de ordenación

  /**
   * Lógica de filtrado y ordenación optimizada con useMemo.
   * Se recalcula solo cuando cambian 'busqueda', 'orden' o los datos originales.
   */
  const filtrados = useMemo(() => {
    let listado = coworkers;

    // 1. Filtrado por texto (sobre el campo nombre)
    const q = normalizar(busqueda.trim());
    if (q) {
      listado = listado.filter((c) => normalizar(c.nombre).includes(q));
    }

    // 2. Ordenación alfabética
    // Hacemos una copia del array ([...listado]) porque .sort() muta el array original
    return [...listado].sort((a, b) => {
      // localeCompare es la forma correcta de comparar strings en español (tildes, Ñ, etc.)
      const comparacion = a.nombre.localeCompare(b.nombre, "es");
      
      // Si el orden es descendente, invertimos el resultado de la comparación
      return orden === "asc" ? comparacion : -comparacion;
    });
  }, [busqueda, orden, coworkers]);

  return (
    <section className="space-y-12">
      {/* ── Buscador ── Diseño con efecto blur y transición de foco a Blue-500 */}
      <div className="relative max-w-xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <label className="block relative group flex-grow w-full">
            <span className="sr-only">Buscar por nombre</span>
            {/* Icono de búsqueda */}
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-400 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {/* Input reactivo */}
            <input
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Encontrar un compañero..."
              className="w-full pl-14 pr-6 py-5 bg-zinc-900/50 border border-zinc-800 rounded-3xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all backdrop-blur-md shadow-2xl"
            />
          </label>

          {/* ── Botón de Ordenación ── Alterna entre A-Z y Z-A */}
          <button
            onClick={() => setOrden(orden === "asc" ? "desc" : "asc")}
            className="flex items-center justify-center min-w-[140px] gap-2 px-6 py-5 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 rounded-3xl text-zinc-300 hover:text-white transition-all backdrop-blur-md shadow-2xl group focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label={`Ordenar alfabéticamente ${orden === "asc" ? "ascendente" : "descendente"}`}
          >
            <span className="font-medium text-sm whitespace-nowrap">
              {orden === "asc" ? "Orden: A → Z" : "Orden: Z → A"}
            </span>
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${orden === "desc" ? "rotate-180" : ""}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Listado de Resultados ── Grid responsivo (1 col móvil, 2 col tablet, 3 col desktop) */}
      <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtrados.map((c) => (
          <MemberCard key={c.id} coworker={c} />
        ))}
      </ul>

      {/* ── Estado Vacío ── Feedback visual cuando no hay coincidencias */}
      {filtrados.length === 0 && (
        <div className="text-center py-20 bg-zinc-900/20 rounded-3xl border border-dashed border-zinc-800">
          <p className="text-xl text-zinc-400 font-light italic">
            No se han encontrado resultados para su búsqueda.
          </p>
        </div>
      )}
    </section>
  );
}