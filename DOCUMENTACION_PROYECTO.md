# Documentación del Proyecto: Interamplify Team Directory

Este documento proporciona una visión detallada de la arquitectura, componentes y lógica del proyecto **Interamplify Team Directory**, desarrollado como una aplicación web moderna enfocada en la visualización de talento y especialización técnica.

## 1. Descripción General
La aplicación es un directorio profesional que permite explorar el equipo de Interamplify, filtrar por nombres, ordenar alfabéticamente y buscar especialistas basados en su stack tecnológico. El diseño es premium, con un tema oscuro (`zinc-950`) y acentos en azul/lila, optimizado para una experiencia de usuario fluida.

---

## 2. Stack Tecnológico
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router).
- **Lenguaje**: [TypeScript](https://www.typescript.org/) para tipado estático y seguridad en el código.
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) para un diseño responsivo y moderno.
- **Fuentes**: Google Geist (Sans y Mono).

---

## 3. Estructura de Carpetas
```text
src/
├── app/                  # Rutas y páginas (Next.js App Router)
│   ├── companeros/       # Directorio general de expertos
│   ├── tecnologias/      # Catálogo de herramientas y buscadores
│   │   └── [tech]/       # Páginas dinámicas por tecnología
│   ├── layout.tsx        # Estructura base y metadatos globales
│   ├── page.tsx          # Landing page (Inicio)
│   └── globals.css       # Estilos globales y animaciones
├── components/           # Componentes modulares y reutilizables
│   ├── MemberCard.tsx    # Tarjeta visual del compañero
│   ├── TechSearchBar.tsx # Buscador con autocompletado
│   ├── CompanerosCliente.tsx # Lógica de filtrado del directorio
│   └── TechFilterClient.tsx  # Filtrado local para especialistas
└── lib/                  # Lógica de negocio y datos
    └── data.ts           # Dataset centralizado (Modelo de datos)
```

---

## 4. Análisis por Carpeta y Archivo

### `src/lib/`
- **`data.ts`**: Define la interfaz `Coworker` y el array `coworkers`. Es la "fuente de verdad" del proyecto.
    - *Funciones*: Centraliza la información para evitar duplicidad.
    - *Tipos*: `Coworker` incluye `id`, `nombre`, `rol`, `bio` y `tecnologias`.

### `src/components/`
- **`MemberCard.tsx`**: Componente de presentación puro.
    - *Lógica*: Renderiza badges dinámicos para las tecnologías y usa un `Link` absoluto para cubrir la tarjeta.
- **`TechSearchBar.tsx`**: Componente de cliente avanzado.
    - *Lógica*: Usa `useState` para el autocompletado y `useRef` para detectar clics fuera y cerrar el dropdown. Incluye navegación por teclado (flechas/enter).
- **`CompanerosCliente.tsx`**: El motor del directorio.
    - *Lógica*: Utiliza `useMemo` para filtrar y ordenar (A-Z / Z-A) miles de registros (teóricamente) sin perder rendimiento.
    - *Normalización*: Incluye una función que elimina acentos y mayúsculas para que la búsqueda sea "inteligente".

### `src/app/`
- **`layout.tsx`**: Configura el idioma (`es`), las fuentes y los metadatos SEO.
- **`page.tsx`**: Landing page con animaciones `fade-in-up` y secciones informativas sobre la propuesta de valor.
- **`companeros/page.tsx`**: Página de listado. Pasa los datos del servidor al componente cliente. Incluye el **Footer Fijo**.
- **`tecnologias/page.tsx`**: Genera dinámicamente el listado de tecnologías únicas del dataset.
- **`tecnologias/[tech]/page.tsx`**: 
    - *SSG*: Usa `generateStaticParams` para que todas las páginas de tecnología se carguen instantáneamente al estar pre-construidas.
    - *Metadata Dinámica*: Cambia el título de la pestaña según la tecnología visualizada.

---

## 5. Detalles Técnicos Relevantes

### Navegación y SEO
La aplicación utiliza navegaciones instantaneas de Next.js. Los metadatos están configurados jerárquicamente:
1. `layout.tsx` define el nombre base.
2. Cada página dinámica (`[tech]`) inyecta su propio título para posicionar mejor en buscadores.

### Animaciones
Se han definido clases personalizadas en `globals.css` como `animate-fade-in-up` para que los elementos aparezcan suavemente al cargar la página, proporcionando una sensación de aplicación "viva" y pulida.

### Footer Dinámico
Se implementó un footer con `position: fixed`. 
- **Lógica**: Detecta en qué página se encuentra el usuario para no mostrar el enlace a esa misma página, evitando redundancias en la navegación.
- **Layout**: Se utilizó un `padding-bottom` (`pb-28`) en el contenedor principal de las páginas para asegurar que el footer no tape el contenido final de las listas.
