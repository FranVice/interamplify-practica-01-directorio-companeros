import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { coworkers } from "../../../lib/data";

//Aquí decimos que params contendra un id de tipo String
interface PageProps {
    params: Promise<{ id: string }>;
    }
    // Aqui decimos le decimos que rutas  dinamicas son validas para generar estáticamente
    export async function generateStaticParams() {
    return coworkers.map((c) => ({ id: c.id }));
    }

    // Antes de renderizar buscamos el id, si existe creamos un título y descripcion personalizado , si no el compañero no existe
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

// Componente principal de la pagina
export default async function Page({ params }: PageProps) {
    const { id } = await params;
    const coworker = coworkers.find((c) => c.id === id);
    
    // Utilizamos noFound si no existe
    if (!coworker) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_2px,transparent_2px),linear-gradient(to_bottom,#8b5cf6_2px,transparent_2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none z-0" />
            
            {/* Logo de la empresa */}
            <div className="absolute top-6 left-6 z-50 w-24 md:w-32 h-auto pointer-events-none">
                <Image
                    src="/logo.png"
                    alt="Logo de Interamplify"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain drop-shadow-[0_4px_12px_rgba(59,130,246,0.3)]"
                    priority
                />
            </div>
            
            <div className="relative w-full max-w-2xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
                {/* Acento azul arriba */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-500" />
                
                <Link
                    href="/companeros"
                    className="inline-flex items-center gap-2 mb-8 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver al listado
                </Link>

                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8 pb-8 border-b border-zinc-800">
                    <div className="flex-1">
                        <h1 className="text-4xl font-extrabold mb-2 text-blue-500 tracking-tight">
                            {coworker.nombre}
                        </h1>
                        <p className="text-xl font-medium text-zinc-300">
                            {coworker.rol}
                        </p>
                    </div>
                </div>

                <div className="mb-10">
                    <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Sobre mí</h2>
                    <p className="text-lg leading-relaxed text-zinc-300 font-light">
                        {coworker.bio}
                    </p>
                </div>

                <div>
                    <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Tecnologías</h2>
                    <div className="flex flex-wrap gap-2">
                        {coworker.tecnologias.map((tec) => (
                            <span
                                key={tec}
                                className="px-4 py-2 text-sm font-medium rounded-xl bg-blue-900/20 text-blue-300 border border-blue-800/30"
                            >
                                {tec}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}