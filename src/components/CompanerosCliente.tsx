"use client";

// RF-02 + RF-03: componente cliente que aplica búsqueda por nombre y ordenación alfabética
// antes de renderizar las MemberCard. Usa "use client" porque depende de useState.

import { useMemo, useState } from "react";
import type { Coworker } from "../lib/data";
import MemberCard from "./MemberCard";

interface Propiedades {
  companeros: Coworker[];
}

// Normaliza texto para comparar ignorando mayúsculas, minúsculas y tildes.
function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export type Orden = "asc" | "desc";

export default function CompanerosCliente({ companeros }: Propiedades) {
  // RF-03: "orden" controla la dirección del sort alfabético; "busqueda" filtra por nombre.
  const [busqueda, setBusqueda] = useState<string>("");
  const [orden, setOrden] = useState<Orden>("asc");

  const companerosFiltrados = useMemo(() => {
    let listado = companeros;

    const textoBusqueda = normalizar(busqueda.trim());
    if (textoBusqueda) {
      listado = listado.filter((companero) =>
        normalizar(companero.nombre).includes(textoBusqueda)
      );
    }

    // RF-03: localeCompare("es") aplica reglas del español (ñ, acentos, etc.).
    // Se usa spread [...] para no mutar el array original recibido por props.
    return [...listado].sort((a, b) => {
      const comparacion = a.nombre.localeCompare(b.nombre, "es");
      return orden === "asc" ? comparacion : -comparacion;
    });
  }, [busqueda, orden, companeros]);

  return (
    <section className="space-y-12">
      <div className="relative max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* RF-02 + RF-03: input de búsqueda por nombre, filtra el listado en tiempo real. */}
          <label className="block relative group flex-grow w-full">
            <span className="sr-only">Buscar por nombre</span>
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-400 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              value={busqueda}
              onChange={(evento) => setBusqueda(evento.target.value)}
              placeholder="Encontrar un compañero..."
              className="w-full pl-14 pr-6 py-5 bg-zinc-900/50 border border-zinc-800 rounded-3xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all backdrop-blur-md shadow-2xl"
            />
          </label>

          {/* RF-03: botón que alterna el estado "orden" entre asc y desc, relanzando el useMemo. */}
          <button
            onClick={() => setOrden(orden === "asc" ? "desc" : "asc")}
            className="flex items-center justify-center min-w-[140px] gap-2 px-6 py-5 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 rounded-3xl text-zinc-300 hover:text-white transition-all backdrop-blur-md shadow-2xl group focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label={`Ordenar alfabeticamente ${orden === "asc" ? "ascendente" : "descendente"}`}
          >
            <span className="font-medium text-sm whitespace-nowrap">
              {orden === "asc" ? "Orden: A -> Z" : "Orden: Z -> A"}
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

      {/* RF-02: grid responsivo de tarjetas MemberCard con el listado ya filtrado y ordenado. */}
      <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {companerosFiltrados.map((companero) => (
          <MemberCard key={companero.id} companero={companero} />
        ))}
      </ul>

      {companerosFiltrados.length === 0 && (
        <div className="text-center py-20 bg-zinc-900/20 rounded-3xl border border-dashed border-zinc-800">
          <p className="text-xl text-zinc-400 font-light italic">
            No se han encontrado resultados para su búsqueda.
          </p>
        </div>
      )}
    </section>
  );
}
