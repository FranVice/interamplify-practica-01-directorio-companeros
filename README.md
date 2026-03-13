# Práctica 01 — Directorio de Compañeros: Interamplify Team

Aplicación web profesional desarrollada con **Next.js 15**, **TypeScript** y **Tailwind CSS**. Funciona como un directorio interno premium para el equipo de Interamplify, permitiendo la visualización, búsqueda y filtrado de especialistas en SEO y Tecnología.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript 5 (Tipado estricto)
- **Estilos**: Tailwind CSS 4 (Diseño responsivo y moderno)
- **Gestor de paquetes**: npm / pnpm
- **Fuentes**: Geist Sans & Mono

## 🛠️ Instalación y Ejecución

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/FranVice/interamplify-practica-01-directorio-companeros.git
   cd interamplify-practica-01-directorio-companeros
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   # o bien
   pnpm install
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   Accede a [http://localhost:3000](http://localhost:3000)

## ✨ Funcionalidades Destacadas

### 💻 Interfaz Premium y Responsive
- **Landing Page**: Diseño de alto impacto con cuadrícula lila vibrante y animaciones de entrada.
- **Modo Oscuro Nativo**: Basado en `zinc-950` para una estética tecnológica y limpia.
- **Arquitectura Industrial**: Proyecto organizado bajo el patrón `/src` para mayor claridad y escalabilidad.

### 🔍 Búsqueda y Filtrado Inteligente
- **Buscador de Tecnologías**: Nuevo componente con **autocompletado reactivo** que permite encontrar herramientas y navegar directamente a sus especialistas.
- **Filtro de Compañeros**: Búsqueda por nombre en tiempo real con normalización de caracteres (ignora tildes y mayúsculas).
- **Ordenación Alfabética**: Botón interactivo para alternar entre orden A-Z y Z-A.

### 📋 Gestión de Datos y Navegación
- **SSG (Static Site Generation)**: Uso de `generateStaticParams` para pre-renderizar todas las páginas de especialistas y tecnologías, asegurando velocidad instantánea.
- **Metadatos Dinámicos**: Títulos y descripciones SEO que cambian según el contenido de la página.
- **Footer Global Inteligente**: Nuevo componente `Footer.tsx` que unifica la navegación y el pie de página en todo el sitio, con lógica de exclusión de rutas.


## 📄 Documentación Extendida
Para un análisis técnico profundo sobre la arquitectura, los componentes y la lógica del proyecto, consulta el archivo:
👉 **[DOCUMENTACION_PROYECTO.md](./DOCUMENTACION_PROYECTO.md)**

---

## 🏗️ Estructura del Proyecto

```text
src/
  app/                  # Rutas (Landing, Directorio, Tecnologías)
  components/           # Componentes modulares (MemberCard, SearchBars)
  lib/                  # Fuente de datos centralizada (data.ts)
```

## 🎯 Objetivo
Esta práctica demuestra el dominio de **Next.js 15**, desde la gestión de rutas dinámicas y componentes de cliente hasta la optimización SEO y la creación de interfaces de usuario premium altamente interactivas.

---
*Developed by Fran García for Interamplify — "Expertise that Scales"*
