import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 p-6 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
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

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-500 tracking-tight">
          Directorio de Compañeros
        </h1>

        <p className="mb-10 text-lg md:text-xl text-zinc-400 leading-relaxed">
          Bienvenido a la aplicación interna del departamento de Desarrollo.
          Aquí podrás consultar la información básica de los miembros del equipo.
        </p>

        <Link
          href="/companeros"
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-2xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Ver compañeros
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>
    </main>
  );
}