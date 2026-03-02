# Práctica 01 — Directorio de Compañeros

Aplicación web desarrollada con Next.js que funciona como un directorio interno de compañeros. Permite visualizar un listado de miembros del equipo y acceder al detalle individual de cada uno.

## Stack tecnológico

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- pnpm

## Instalación y ejecución

Clonar el repositorio:

git clone https://github.com/TU-USUARIO/interamplify-practica-01-directorio-companeros.git
cd interamplify-practica-01-directorio-companeros

Instalar dependencias:

pnpm install

Ejecutar en modo desarrollo:

pnpm dev

Abrir en el navegador:

http://localhost:3000

## Funcionalidades implementadas

RF-01 · Página de inicio
- Título de la aplicación.
- Mensaje de bienvenida.
- Enlace al listado de compañeros.

RF-02 · Listado de compañeros
- Renderizado dinámico mediante map().
- Tarjeta por cada compañero.
- Enlace a su perfil individual.

RF-03 · Página de detalle
- Ruta dinámica /companeros/[id].
- Visualización de nombre, rol, biografía y tecnologías.
- Uso de notFound() para mostrar 404 si el id no existe.

RF-04 · Datos estáticos
- Datos centralizados en lib/data.ts.
- Interfaz Coworker tipada con TypeScript.
- Array con al menos seis miembros.

## Estilos

- Paleta basada exclusivamente en zinc-*.
- Color de acento blue-600 / dark:blue-400.
- Soporte para modo oscuro.

## Estructura principal

app/
  page.tsx
  companeros/
    page.tsx
    [id]/
      page.tsx

lib/
  data.ts

## Objetivo de la práctica

Aplicar el ciclo completo de desarrollo frontend con Next.js, incluyendo modelado de datos, enrutamiento dinámico,
renderizado dinámico y organización del proyecto siguiendo buenas prácticas.
