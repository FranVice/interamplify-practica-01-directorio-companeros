import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interamplify Team Directory | Expertos en SEO y Tecnología",
  description:
    "Directorio oficial del equipo de Interamplify. Encuentra especialistas en SEO, Desarrollo y Marketing Digital.",
  icons: {
    icon: "/favicon-interamplify.png",
    shortcut: "/favicon-interamplify.png",
    apple: "/favicon-interamplify.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
