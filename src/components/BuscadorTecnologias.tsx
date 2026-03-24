"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { coworkers } from "../lib/data";

// Punto extra: listado único de tecnologías derivado del dataset, ordenado alfabéticamente.
// Se calcula fuera del componente para no recalcularse en cada render.
const todasLasTecnologias: string[] = Array.from(
  new Set(coworkers.flatMap((companero) => companero.tecnologias))
).sort((a, b) => a.localeCompare(b, "es"));

// Normaliza texto para comparar ignorando mayúsculas, minúsculas y tildes.
function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Punto extra: buscador con autocompletado para /tecnologias. Filtra sugerencias en tiempo real
// y navega a /tecnologias/[tech] al seleccionar, mediante teclado o ratón.
export default function BuscadorTecnologias() {
  const [consulta, setConsulta] = useState("");
  const [abierto, setAbierto] = useState(false);
  const [indiceActivo, setIndiceActivo] = useState(-1);
  const router = useRouter();
  const contenedorRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Centraliza el cierre del panel: se usa desde clic exterior, Escape y selección.
  function cerrarSugerencias() {
    setAbierto(false);
    setIndiceActivo(-1);
  }

  // Filtra las sugerencias visibles según lo que el usuario escribe.
  const sugerencias = useMemo(() => {
    const textoBusqueda = normalizar(consulta.trim());

    if (!textoBusqueda) {
      return [];
    }

    return todasLasTecnologias.filter((tecnologia) =>
      normalizar(tecnologia).includes(textoBusqueda)
    );
  }, [consulta]);

  // Cierra el panel de sugerencias cuando el usuario hace clic fuera del componente.
  useEffect(() => {
    function manejarClickFuera(evento: MouseEvent) {
      if (
        contenedorRef.current &&
        !contenedorRef.current.contains(evento.target as Node)
      ) {
        cerrarSugerencias();
      }
    }

    document.addEventListener("mousedown", manejarClickFuera);
    return () => document.removeEventListener("mousedown", manejarClickFuera);
  }, []);

  // Al seleccionar una sugerencia navega a /tecnologias/[tech] y limpia el input.
  function seleccionarTecnologia(tecnologia: string) {
    setConsulta("");
    cerrarSugerencias();
    router.push(`/tecnologias/${encodeURIComponent(tecnologia)}`);
  }

  // Actualiza la consulta y reabre el panel de sugerencias en cada pulsación de tecla.
  function manejarCambio(evento: React.ChangeEvent<HTMLInputElement>) {
    setConsulta(evento.target.value);
    setAbierto(true);
    setIndiceActivo(-1);
  }

  // Navegación por teclado: ↑↓ mueven el foco, Enter selecciona, Escape cierra el panel.
  function manejarTeclado(evento: React.KeyboardEvent<HTMLInputElement>) {
    if (!abierto || sugerencias.length === 0) return;

    if (evento.key === "ArrowDown") {
      evento.preventDefault();
      setIndiceActivo((previo) =>
        previo < sugerencias.length - 1 ? previo + 1 : previo
      );
      return;
    }

    if (evento.key === "ArrowUp") {
      evento.preventDefault();
      setIndiceActivo((previo) => (previo > 0 ? previo - 1 : -1));
      return;
    }

    if (evento.key === "Enter") {
      evento.preventDefault();

      if (indiceActivo >= 0) {
        seleccionarTecnologia(sugerencias[indiceActivo]);
        return;
      }

      if (sugerencias.length === 1) {
        seleccionarTecnologia(sugerencias[0]);
      }

      return;
    }

    if (evento.key === "Escape") {
      cerrarSugerencias();
    }
  }

  return (
    <div ref={contenedorRef} className="relative w-full max-w-xl mx-auto">
      <label className="block relative group">
        <span className="sr-only">Buscar tecnología</span>

        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-400 transition-colors z-10">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          ref={inputRef}
          type="text"
          value={consulta}
          onChange={manejarCambio}
          onFocus={() => {
            if (consulta.trim()) setAbierto(true);
          }}
          onKeyDown={manejarTeclado}
          placeholder="Buscar tecnología (React, Ahrefs, Docker...)"
          autoComplete="off"
          className="w-full pl-14 pr-6 py-5 bg-zinc-900/50 border border-zinc-800 rounded-3xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all backdrop-blur-md shadow-2xl"
        />

        {consulta && (
          <button
            type="button"
            onClick={() => {
              setConsulta("");
              cerrarSugerencias();
              inputRef.current?.focus();
            }}
            className="absolute inset-y-0 right-0 pr-5 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
            aria-label="Limpiar búsqueda"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </label>

      {abierto && sugerencias.length > 0 && (
        <ul
          role="listbox"
          className="absolute top-full left-0 right-0 mt-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl z-50 max-h-72 overflow-y-auto"
        >
          {sugerencias.map((tecnologia, indice) => (
            <li
              key={tecnologia}
              role="option"
              aria-selected={indice === indiceActivo}
              onMouseDown={() => seleccionarTecnologia(tecnologia)}
              onMouseEnter={() => setIndiceActivo(indice)}
              className={`flex items-center gap-3 px-5 py-3 cursor-pointer transition-colors ${
                indice === indiceActivo
                  ? "bg-blue-600/30 text-white"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-md bg-blue-600/20 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </span>
              <span className="font-medium">{tecnologia}</span>
              <svg
                className="w-4 h-4 ml-auto text-zinc-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
          ))}
        </ul>
      )}

      {abierto && consulta.trim() && sugerencias.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-2xl px-5 py-4 text-zinc-500 text-sm shadow-2xl z-50">
          No se encontró ninguna tecnología con ese nombre.
        </div>
      )}
    </div>
  );
}
