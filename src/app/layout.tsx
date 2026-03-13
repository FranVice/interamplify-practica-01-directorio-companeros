import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Configuración de las fuentes tipográficas de Next.js (Geist)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Metadatos globales de la aplicación.
 * Estos valores aparecen en el <head> de todas las páginas y controlan
 * lo que se ve en la pestaña del navegador y en los resultados de búsqueda.
 */
export const metadata: Metadata = {
  title: "Interamplify Team Directory | Expertos en SEO y Tecnología",
  description: "Directorio oficial del equipo de Interamplify. Encuentra especialistas en SEO, Desarrollo y Marketing Digital.",
};

/**
 * RootLayout: El componente base que envuelve a toda la aplicación.
 * Define la estructura HTML básica y aplica las fuentes y estilos globales.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Aquí se renderiza el contenido de cada página individual */}
        {children}
      </body>
    </html>
  );
}
