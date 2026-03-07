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
//guardar lo que escribe el usuario
export default function CompanerosClient({ coworkers }: Props) {
  const [busqueda, setBusqueda] = useState<string>("");

  //Usamos useMemo , para si no ahi busquedas muestra todo, si ahi empieza a filtrar
  const filtrados = useMemo(() => {
    const q = normalizar(busqueda.trim());
    if (!q) return coworkers;

    return coworkers.filter((c) =>
      normalizar(c.nombre).includes(q)
    );
  }, [busqueda, coworkers]);

/**
 * Input de búsqueda controlado por React.
 * El valor del campo se guarda en el estado `busqueda` mediante useState.
 * Cada vez que el usuario escribe, onChange actualiza el estado y
 * se filtra la lista de compañeros en tiempo real.
 */


//grid convierte la lista en un sistema de cuadricula,grap-4 espacio y sm.... que en patallas se muestren 2 columnas
//placeHolder muestra la pista del el nombre
  return (
    <section className="space-y-6">
      <div className="relative max-w-xl mx-auto mb-12">
        <label className="block relative">
          <span className="sr-only">Buscar por nombre</span>
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar compañero (Ej: Ana, Marcos...)"
            className="w-full pl-11 pr-4 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-lg"
          />
        </label>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtrados.map((c) => (
          <MemberCard key={c.id} coworker={c} />
        ))}
      </ul>

      {filtrados.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-zinc-400 font-medium">
            No se encontraron compañeros con ese nombre.
          </p>
        </div>
      )}
    </section>
  );
}