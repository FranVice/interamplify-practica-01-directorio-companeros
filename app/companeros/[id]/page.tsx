import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { coworkers } from "../../../lib/data";

interface PageProps {
    params: Promise<{ id: string }>;
    }

    export async function generateStaticParams() {
    return coworkers.map((c) => ({ id: c.id }));
    }

    export async function generateMetadata({
    params,
    }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const coworker = coworkers.find((c) => c.id === id);

    if (!coworker) {
        return { title: "Compañero no encontrado" };
    }

    return {
        title: `${coworker.nombre} · Directorio de Compañeros`,
        description: `${coworker.rol} — ${coworker.bio}`,
    };
}

export default async function Page({ params }: PageProps) {
    const { id } = await params;
    const coworker = coworkers.find((c) => c.id === id);

    if (!coworker) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 p-6">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            {coworker.nombre}
            </h1>

            <p className="text-lg mb-2 font-semibold">{coworker.rol}</p>

            <p className="mb-6 text-zinc-600 dark:text-zinc-300">{coworker.bio}</p>

            <div className="flex flex-wrap gap-2 mb-6">
            {coworker.tecnologias.map((tec) => (
                <span
                key={tec}
                className="px-3 py-1 text-sm rounded-full bg-zinc-200 dark:bg-zinc-700"
                >
                {tec}
                </span>
            ))}
            </div>

            <Link
            href="/companeros"
            className="underline text-zinc-700 dark:text-zinc-200 hover:opacity-80"
            >
            ← Volver al listado
            </Link>
        </div>
        </main>
    );
}