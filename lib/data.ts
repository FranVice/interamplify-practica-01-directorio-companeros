export interface Coworker {
    id: string;
    nombre: string;
    rol: string;
    bio: string;
    tecnologias: string[];
}

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
];