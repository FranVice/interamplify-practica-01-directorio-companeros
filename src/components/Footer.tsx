/**
 * Footer: Componente de pie de página global para la aplicación.
 * Proporciona enlaces de navegación coherentes y un diseño profesional
 * con desenfoque de fondo y posición fija.
 */

import Link from "next/link";

interface FooterProps {
  /** 
   * Permite ocultar enlaces específicos según la página actual 
   * para evitar redundancias en la navegación.
   */
  exclude?: "directorio" | "tecnologias" | "inicio";
}

export default function Footer({ exclude }: FooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 w-full border-t border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-100 text-sm">
        
        {/* Copyright y Mensaje Corporativo */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p>© 2024 Interamplify. Todos los derechos reservados.</p>
          <p className="text-zinc-500 italic font-medium">Expertise that Scales.</p>
        </div>

        {/* Navegación del Footer */}
        <div className="flex items-center gap-8">
          
          {/* Enlace al Directorio (Opcional) */}
          {exclude !== "directorio" && (
            <Link
              href="/companeros"
              className="text-white hover:text-blue-400 transition-colors flex items-center gap-2 group font-semibold"
            >
              Directorio de Expertos
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}

          {/* Enlace a Tecnologías (Opcional) */}
          {exclude !== "tecnologias" && (
            <Link
              href="/tecnologias"
              className="text-white hover:text-blue-400 transition-colors font-semibold"
            >
              Stack Tecnológico
            </Link>
          )}

          {/* Enlace a Inicio (Siempre visible o condicional) */}
          {exclude !== "inicio" && (
            <Link
              href="/"
              className="text-zinc-300 hover:text-white transition-colors font-medium"
            >
              Inicio
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
