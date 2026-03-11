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

## Funcionalidades implementadas (Práctica 01 + Actualizaciones)

### RF-01 · Landing Page Premium
- Titular impactante: **"Interamplify Team"**.
- Diseño orientado a SEO y Marketing Digital con estética profesional.
- Fondo negro Zinc 950 con cuadrícula lila vibrante y alta visibilidad.
- Call-to-Action funcional al directorio de compañeros.

### RF-02 · Sección About Us (/companeros)
- Encabezado rediseñado con estética corporativa de Interamplify.
- **MemberCard.tsx**: Incluye ahora **Badges de Tecnologías** y tipado estricto con `Coworker`.
- Diseño en rejilla responsiva (Móvil: 1, Tablet: 2, Desktop: 3).

### RF-03 · Página de Detalle e Infraestructura
- Rutas dinámicas asíncronas optimizadas.
- Proyecto reestructurado bajo la carpeta **`src/`** siguiendo el patrón industrial solicitado.
- Tipado estricto en toda la aplicación (sin `any`).

### RF-04 · Listado Dinámico de Tecnologías (`/tecnologias`)
- **Página Principal de Tecnologías:** Extrae iterativamente (mediante `reduce`) de `data.ts` todas las tecnologías únicas de los usuarios y las cuenta dinámicamente. Muestra Cards interactivas para cada tecnología.
- **Ruta Dinámica Detallada (`/tecnologias/[tech]`):** Capta el parámetro de URL, decodifica el string, y filtra a todos los compañeros que incluyen dicha tecnología usando el componente `MemberCard.tsx`.
- **Datos de Ejemplo:** Se añadieron 10 perfiles especializados en SEO con tecnologías del sector (Screaming Frog, Ahrefs, Semrush, etc).

### RF-03 · Ordenación del listado (`/companeros`)
- Implementación de un estado en el cliente (`useState`) para la ordenación alfabética.
- Botón visual interactivo para alternar entre orden Ascendente (A → Z) y Descendente (Z → A).
- Lógica de ordenación combinada con el filtrado mediante `useMemo` y `.localeCompare("es")` para respetar acentos y caracteres del español.

## Estilos y Acentos
- Paleta: `zinc-*` para escalas de grises.
- Acentos: `blue-600` / `dark:blue-400`.
- Eslogan: *"Expertise that Scales"* integrado en el footer.

## Estructura del Proyecto (Patrón src/)

```text
src/
  app/
    layout.tsx
    page.tsx (Landing Page RF-01)
    companeros/
      page.tsx (About Us RF-02)
      [id]/
        page.tsx (Detalle RF-03)
  components/
    MemberCard.tsx (Componente obligatorio)
    CompanerosCliente.tsx (Lógica de filtrado)
  lib/
    data.ts (Datos tipados Coworker)
```

## Objetivo de la práctica

Aplicar el ciclo completo de desarrollo frontend con Next.js, incluyendo modelado de datos, enrutamiento dinámico,
renderizado dinámico y organización del proyecto siguiendo buenas prácticas.

## Punto extra

 Branch puntoExtra;

 ## MemberCard.tsx

- Implementar el componente `MemberCard.tsx` y utilizarlo en el listado.

Se a creado carpeta components y añadido el archivo MemberCard, a la vez modificado page.tsx para utilizar,   
con esto las tarjeta se renderizan de desde MemberCard. Opteniendo código más limpio,no repites diseño
si cambias el estilo en MemberCard, se actualiza en toda la app.
- Añadir una búsqueda/filtro por nombre en la página `/companeros` (solo en el cliente).
- Generar rutas estáticas con `generateStaticParams` en la página de detalle.
- Añadir metadatos dinámicos con `generateMetadata` en la página de detalle.

## generateStaticParams

- Generar rutas estáticas con `generateStaticParams` en la página de detalle.

Se implementa la generación de rutas estáticas mediante generateStaticParams en la página de detalle (/companeros/[id]), permitiendo preconstruir dinámicamente las páginas individuales de cada compañero en tiempo de build.

## generateMetadata

- Añadir metadatos dinámicos con `generateMetadata` en la página de detalle.

hemos añadido metadatos dinámicos, ahora el <head> del HTML cambia según el compañero.

## Estilos y Accesibilidad

Se ha realizado una mejora integral de la interfaz de usuario:
- **Tema Oscuro Premium**: Paleta basada en `zinc-950` con acentos en `blue-500`.
- **Accesibilidad (WCAG)**: Contraste de texto mejorado y reducción de animaciones agresivas para una mejor experiencia de usuario.
- **Navegación**: Enfoque de estados claros para navegación por teclado.
- **Interacción**: Efectos de elevación suaves en las tarjetas de compañeros.

---
*Nota: Se ha procedido a eliminar el logo de la empresa debido a problemas de transparencia en la imagen original, priorizando la limpieza visual del diseño oscuro.*

