import Link from "next/link";
import type { Coworker } from "../lib/data";


interface MemberCardProps {
    coworker: Coworker;
}

export default function MemberCard({ coworker }: MemberCardProps) {
    return (
        <li className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-4">
        <p className="text-lg font-semibold">{coworker.nombre}</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-3">
            {coworker.rol}
        </p>

        <Link
            href={`/companeros/${coworker.id}`}
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
        >
            Ver perfil →
        </Link>
        </li>
    );
}
