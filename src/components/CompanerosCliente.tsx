/**
 * Componente de cliente que gestiona la búsqueda y filtrado de compañeros.
 * Utiliza useState para guardar el texto de búsqueda y useMemo para
 * optimizar el filtrado de la lista según el nombre.
 */

"use client";

import { useMemo, useState } from "react";
import type { Coworker } from "../lib/data";
import MemberCard from "./MemberCard";

interface Props {
  coworkers: Coworker[];
}

// Regular la escritura, elimana accentos y corrigue Mayusculas
function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
// Definimos un tipo estricto para las 2 únicas opciones de orden
export type Orden = "asc" | "desc";

//guardar lo que escribe el usuario
export default function CompanerosClient({ coworkers }: Props) {
  const [busqueda, setBusqueda] = useState<string>("");
  // Estado para guardar el orden. Valor por defecto: "asc" (A-Z)
  const [orden, setOrden] = useState<Orden>("asc");

  //Usamos useMemo , para si no ahi busquedas muestra todo, si ahi empieza a filtrar
  const filtrados = useMemo(() => {
    let listado = coworkers;

    // 1. Filtrar si hay texto de búsqueda
    const q = normalizar(busqueda.trim());
    if (q) {
      listado = listado.filter((c) => normalizar(c.nombre).includes(q));
    }

    // 2. Ordenar el listado resultante
    // Usamos [...listado] para crear una copia antes de ordenar, porque .sort muta el array original
    return [...listado].sort((a, b) => {
      // localeCompare es ideal para ordenar strings en español (tiene en cuenta tildes)
      const comparacion = a.nombre.localeCompare(b.nombre, "es");
      
      // Si el estado orden es "desc", invertimos el resultado de la comparación
      return orden === "asc" ? comparacion : -comparacion;
    });
  }, [busqueda, orden, coworkers]);

/**
 * Input de búsqueda controlado por React.
 * El valor del campo se guarda en el estado `busqueda` mediante useState.
 * Cada vez que el usuario escribe, onChange actualiza el estado y
 * se filtra la lista de compañeros en tiempo real.
 */


//grid convierte la lista en un sistema de cuadricula,grap-4 espacio y sm.... que en patallas se muestren 2 columnas
//placeHolder muestra la pista del el nombre
  return (
    <section className="space-y-12">
      {/* Buscador: Estética mejorada con bordes Zinc y foco Blue-500 */}
      <div className="relative max-w-xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <label className="block relative group flex-grow w-full">
            <span className="sr-only">Buscar por nombre</span>
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-400 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Encontrar un compañero..."
              className="w-full pl-14 pr-6 py-5 bg-zinc-900/50 border border-zinc-800 rounded-3xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all backdrop-blur-md shadow-2xl"
            />
          </label>

          {/* Botón de Ordenación */}
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

      {/* Rejilla Responsiva: Requisito RF-02 (móvil: 1, tablet: 2, desktop: 3) */}
      <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtrados.map((c) => (
          <MemberCard key={c.id} coworker={c} />
        ))}
      </ul>

      {/* Estado vacío: Texto de alta visibilidad */}
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