"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { coworkers } from "../lib/data";

/**
 * Lógica para obtener todas las tecnologías únicas del dataset centralizado.
 * Se utiliza Set para eliminar duplicados y flatMap para aplanar los arrays de cada compañero.
 */
const todasLasTecnologias: string[] = Array.from(
  new Set(coworkers.flatMap((c) => c.tecnologias))
).sort((a, b) => a.localeCompare(b, "es"));

/**
 * Función auxiliar para normalizar texto (quitar tildes y pasar a minúsculas).
 */
function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * TechSearchBar: Componente de búsqueda con autocompletado para tecnologías.
 * Permite al usuario escribir el nombre de una herramienta y navegar a su página de especialistas.
 */
export default function TechSearchBar() {
  const [query, setQuery] = useState("");      // Texto actual en el input
  const [abierto, setAbierto] = useState(false); // Control del dropdown de sugerencias
  const [indiceActivo, setIndiceActivo] = useState(-1); // Indice para navegación por teclado
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Filtrado dinámico de sugerencias basado en el input del usuario.
   */
  const sugerencias = query.trim()
    ? todasLasTecnologias.filter((t) =>
        normalizar(t).includes(normalizar(query.trim()))
      )
    : [];

  /**
   * Efecto para cerrar el dropdown si se hace clic fuera del componente.
   */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setAbierto(false);
        setIndiceActivo(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /**
   * Acción al seleccionar una tecnología:
   * Limpia el estado y navega a la ruta dinámica /tecnologias/[tech]
   */
  function seleccionar(tech: string) {
    setQuery("");
    setAbierto(false);
    setIndiceActivo(-1);
    router.push(`/tecnologias/${encodeURIComponent(tech)}`);
  }

  /**
   * Manejador de eventos de teclado (Flechas, Enter, Escape) para mejorar la accesibilidad.
   */
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!abierto || sugerencias.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndiceActivo((prev) => (prev < sugerencias.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndiceActivo((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (indiceActivo >= 0) {
        seleccionar(sugerencias[indiceActivo]);
      } else if (sugerencias.length === 1) {
        seleccionar(sugerencias[0]);
      }
    } else if (e.key === "Escape") {
      setAbierto(false);
      setIndiceActivo(-1);
    }
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-xl mx-auto">
      {/* Campo de búsqueda controlado */}
      <label className="block relative group">
        <span className="sr-only">Buscar tecnología</span>

        {/* Icono de lupa (Decorativo) */}
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-400 transition-colors z-10">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setAbierto(true);
            setIndiceActivo(-1);
          }}
          onFocus={() => {
            if (query.trim()) setAbierto(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Buscar tecnología (React, Ahrefs, Docker...)"
          autoComplete="off"
          className="w-full pl-14 pr-6 py-5 bg-zinc-900/50 border border-zinc-800 rounded-3xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all backdrop-blur-md shadow-2xl"
        />

        {/* Botón para limpiar el buscador (X) */}
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setAbierto(false);
              inputRef.current?.focus();
            }}
            className="absolute inset-y-0 right-0 pr-5 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
            aria-label="Limpiar búsqueda"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </label>

      {/* Desplegable de sugerencias con estilo premium (Glassmorphism) */}
      {abierto && sugerencias.length > 0 && (
        <ul
          role="listbox"
          className="absolute top-full left-0 right-0 mt-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl z-50 max-h-72 overflow-y-auto"
        >
          {sugerencias.map((tech, i) => (
            <li
              key={tech}
              role="option"
              aria-selected={i === indiceActivo}
              onMouseDown={() => seleccionar(tech)}
              onMouseEnter={() => setIndiceActivo(i)}
              className={`flex items-center gap-3 px-5 py-3 cursor-pointer transition-colors ${
                i === indiceActivo
                  ? "bg-blue-600/30 text-white"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              {/* Icono de tecnología para cada item */}
              <span className="flex-shrink-0 w-6 h-6 rounded-md bg-blue-600/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </span>
              <span className="font-medium">{tech}</span>
              {/* Icono de flecha para sugerir navegación */}
              <svg className="w-4 h-4 ml-auto text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
          ))}
        </ul>
      )}

      {/* Mensaje de feedback si no hay resultados */}
      {abierto && query.trim() && sugerencias.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-2xl px-5 py-4 text-zinc-500 text-sm shadow-2xl z-50">
          No se encontró ninguna tecnología con ese nombre.
        </div>
      )}
    </div>
  );
}
