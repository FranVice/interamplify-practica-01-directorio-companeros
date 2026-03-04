"use client";

import { useMemo, useState } from "react";
import type { Coworker } from "../lib/data";
import MemberCard from "./MemberCard";

interface Props {
  coworkers: Coworker[];
}

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function CompanerosClient({ coworkers }: Props) {
  const [busqueda, setBusqueda] = useState<string>("");

  const filtrados = useMemo(() => {
    const q = normalizar(busqueda.trim());
    if (!q) return coworkers;

    return coworkers.filter((c) =>
      normalizar(c.nombre).includes(q)
    );
  }, [busqueda, coworkers]);

  return (
    <section className="space-y-4">
      <label className="block">
        <span className="mb-2 block text-sm text-zinc-600 dark:text-zinc-300">
          Buscar por nombre
        </span>

        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Ej: Ana, Marcos..."
          className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-blue-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:ring-blue-400"
        />
      </label>

      <ul className="grid gap-4 sm:grid-cols-2">
        {filtrados.map((c) => (
          <MemberCard key={c.id} coworker={c} />
        ))}
      </ul>

      {filtrados.length === 0 && (
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          No hay resultados para esa búsqueda.
        </p>
      )}
    </section>
  );
}