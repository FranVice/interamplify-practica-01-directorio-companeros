import Link from "next/link";
import { coworkers } from "../../lib/data";
import CompanerosClient from "../../components/CompanerosCliente";

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

            {                                                }
            <CompanerosClient coworkers={coworkers} />
        </div>
        </main>
    );
    }