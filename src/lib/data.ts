export interface Coworker {
    id: string;
    nombre: string;
    rol: string;
    bio: string;
    tecnologias: string[];
}
// Creamos una interfaces en TypeScript y despues un constante que sigue  de tipo cowoker osea una array con la estructura de la interface
export const coworkers: Coworker[] = [
    {
        id: "ana-garcia",
        nombre: "Ana García",
        rol: "Frontend Developer",
        bio: "Apasionada por la creación de interfaces accesibles y limpias.",
        tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
        id: "marcos-lopez",
        nombre: "Marcos López",
        rol: "Fullstack Developer",
        bio: "Disfruta trabajando tanto en frontend como en backend.",
        tecnologias: ["Node.js", "Next.js", "PostgreSQL"],
    },
    {
        id: "laura-sanchez",
        nombre: "Laura Sánchez",
        rol: "UX Engineer",
        bio: "Especializada en experiencia de usuario y accesibilidad.",
        tecnologias: ["Figma", "React", "CSS"],
    },
    {
        id: "diego-ruiz",
        nombre: "Diego Ruiz",
        rol: "Backend Developer",
        bio: "Experto en APIs y arquitectura de sistemas.",
        tecnologias: ["Node.js", "Express", "MongoDB"],
    },
    {
        id: "paula-martin",
        nombre: "Paula Martín",
        rol: "QA Engineer",
        bio: "Enfocada en asegurar la calidad y estabilidad del software.",
        tecnologias: ["Cypress", "Playwright", "Jest"],
    },
    {
        id: "javier-torres",
        nombre: "Javier Torres",
        rol: "DevOps Engineer",
        bio: "Responsable de la infraestructura y despliegue continuo.",
        tecnologias: ["Docker", "AWS", "CI/CD"],
    },
    {
        id: "elena-ramos",
        nombre: "Elena Ramos",
        rol: "SEO Manager",
        bio: "Especialista en estrategias globales de posicionamiento y auditorías técnicas avanzadas.",
        tecnologias: ["Ahrefs", "Screaming Frog", "Google Analytics 4", "Looker Studio"],
    },
    {
        id: "carlos-mendez",
        nombre: "Carlos Méndez",
        rol: "SEO Técnico",
        bio: "Optimización de crawl budget, WPO, y arquitectura web enfocada al rendimiento.",
        tecnologias: ["Screaming Frog", "Semrush", "Next.js", "Chrome DevTools"],
    },
    {
        id: "sofia-iglesias",
        nombre: "Sofía Iglesias",
        rol: "Link Builder Senior",
        bio: "Especialista en relaciones públicas digitales y adquisición de autoridad de dominio.",
        tecnologias: ["Ahrefs", "Pitchbox", "Majestic", "Hunter.io"],
    },
    {
        id: "david-navarro",
        nombre: "David Navarro",
        rol: "Analista SEO",
        bio: "Análisis de datos, detección de canibalizaciones y elaboración de reportes de tráfico.",
        tecnologias: ["Google Search Console", "Google Analytics 4", "Looker Studio", "Excel"],
    },
    {
        id: "lucia-gomez",
        nombre: "Lucía Gómez",
        rol: "Content SEO",
        bio: "Redacción optimizada, keyword research y estructuración semántica de contenidos.",
        tecnologias: ["Semrush", "Surfer SEO", "WordPress", "ChatGPT"],
    },
    {
        id: "hugo-silva",
        nombre: "Hugo Silva",
        rol: "Consultor SEO Local",
        bio: "Dominio y optimización integral de perfiles de Google Business y citaciones.",
        tecnologias: ["Google Business Profile", "BrightLocal", "Whitespark", "Google Analytics 4"],
    },
    {
        id: "marta-blanco",
        nombre: "Marta Blanco",
        rol: "Especialista ASO & SEO",
        bio: "Posicionamiento orgánico de aplicaciones móviles y estrategias de app indexing.",
        tecnologias: ["AppFollow", "Sensor Tower", "Ahrefs", "Google Play Console"],
    },
    {
        id: "pablo-cruz",
        nombre: "Pablo Cruz",
        rol: "Estratega SEO E-commerce",
        bio: "Migraciones complejas, optimización de facetas y estructuración de tiendas online grandes.",
        tecnologias: ["Shopify", "Screaming Frog", "Semrush", "Google Search Console"],
    },
    {
        id: "carmen-ortega",
        nombre: "Carmen Ortega",
        rol: "Especialista en Outreach",
        bio: "Búsqueda de medios, negociación de patrocinios y campañas creativas para digital PR.",
        tecnologias: ["Muck Rack", "BuzzSumo", "Ahrefs", "Notion"],
    },
    {
        id: "alejandro-vargas",
        nombre: "Alejandro Vargas",
        rol: "Data Analyst SEO",
        bio: "Automatización de extracciones, machine learning aplicado al SEO y big data.",
        tecnologias: ["Python", "BigQuery", "SQL", "Looker Studio"],
    },
];