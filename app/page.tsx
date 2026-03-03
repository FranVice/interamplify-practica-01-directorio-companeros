import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
        Directorio de Compañeros
      </h1>

      <p className="mb-8 text-lg text-center max-w-xl">
        Bienvenido a la aplicación interna del departamento de Desarrollo.
        Aquí podrás consultar la información básica de los miembros del equipo.
      </p>

      <Link
        href="/companeros"
        className="px-6 py-3 bg-blue-600 dark:bg-blue-400 text-white dark:text-zinc-900 rounded-lg hover:opacity-90 transition"
      >
        Ver compañeros
      </Link>
    </main>
  );
}