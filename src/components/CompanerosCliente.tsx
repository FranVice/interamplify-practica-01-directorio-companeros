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
    <section className="space-y-12">
      {/* Buscador: Estética mejorada con bordes Zinc y foco Blue-500 */}
      <div className="relative max-w-xl mx-auto">
        <label className="block relative group">
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