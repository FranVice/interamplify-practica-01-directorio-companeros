import Link from "next/link";
import { coworkers } from "../../lib/data";

export default function CompanerosPage() {
    return (
        <main className="min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 p-6">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">
            Compañeros
            </h1>

            <p className="mb-6 text-zinc-600 dark:text-zinc-300">
            Selecciona un compañero para ver su perfil.
            </p>

            <Link
            href="/"
            className="inline-block mb-6 underline text-zinc-700 dark:text-zinc-200 hover:opacity-80"
            >
            ← Volver al inicio
            </Link>

            <ul className="grid gap-4 sm:grid-cols-2">
            {coworkers.map((c) => (
                <li
                key={c.id}
                className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-4"
                >
                <p className="text-lg font-semibold">{c.nombre}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-3">
                    {c.rol}
                </p>

                <Link
                    href={`/companeros/${c.id}`}
                    className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
                >
                    Ver perfil →
                </Link>
                </li>
            ))}
            </ul>
        </div>
        </main>
    );
}