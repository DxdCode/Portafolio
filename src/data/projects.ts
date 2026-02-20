export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    urls: { github?: string; live?: string };
}

const shared = {
    ticketSystem: {
        image: "/assets/image-celular.webp",
        technologies: ["Hono", "React Native", "Expo", "AWS SST", "Gemini AI"],
        urls: {
            live: "https://expo.dev/accounts/itsdavidd/projects/app-tickets/builds/4354a46a-b3f2-4084-abce-bf6259e08a3f",
            github: "https://github.com/DxdCode/app-ticket",
        },
    },
    ecommercePrivate: {
        image: "/assets/image-ecomerce.jpeg",
        technologies: ["Next.js 16", "PostgreSQL", "Railway", "Vercel", "Zod", "TypeScript"],
        urls: {
            live: "https://tienda-dxdcode.vercel.app/",
            github: "https://github.com/DxdCode/Ecoomerce/",
        },
    },
    matriculas: {
        image: "/assets/img1.webp",
        technologies: ["React", "Tailwind", "Zustand", "Node.js", "Express", "MongoDB"],
        urls: {
            live: "https://gestormatriculas.netlify.app/",
            github: "https://github.com/DxdCode/GestionMatriculas",
        },
    },
    ecommerce: {
        image: "/assets/img3.webp",
        technologies: ["Node.js", "Express.js", "MongoDB", "Stripe", "Socket.IO", "Passport"],
        urls: {
            live: "https://documenter.getpostman.com/view/45748353/2sB2x6kX2Q",
            github: "https://github.com/MateooMoran/ProyectoTesis/tree/main/Backend-Poli",
        },
    },
    portafolio: {
        image: "/assets/img2.webp",
        technologies: ["Next.js", "React", "Tailwind", "Framer Motion", "Emailjs"],
        urls: {
            live: "https://dxdcode.pages.dev/",
            github: "https://github.com/DxdCode/Portafolio.git",
        },
    },
};

export const projects: Record<string, Project[]> = {
    en: [
        { id: 1, title: "Ticket System (AI)", description: "Automated ticket priority system using Hono (backend) and React Native (frontend).", ...shared.ticketSystem },
        { id: 2, title: "E-commerce", description: "Full-stack e-commerce with Next.js 16, PostgreSQL on Railway, and deployed on Vercel.", ...shared.ecommercePrivate },
        { id: 3, title: "Enrollment Management", description: "Allows you to manage student enrollment quickly and easily.", ...shared.matriculas },
        { id: 4, title: "E-commerce Demo", description: "Online store project with a functional cart and Stripe API.", ...shared.ecommerce },
        { id: 5, title: "Portfolio", description: "Personal portfolio showcasing projects and skills. Migrated to Next.js 16.", ...shared.portafolio },
    ],
    es: [
        { id: 1, title: "Sistema de Tickets (IA)", description: "Sistema automatizado de tickets con IA usando Hono (backend) y React Native (frontend).", ...shared.ticketSystem },
        { id: 2, title: "E-commerce", description: "E-commerce full-stack con Next.js 16, PostgreSQL en Railway y desplegado en Vercel.", ...shared.ecommercePrivate },
        { id: 3, title: "Gestión de Matrículas", description: "Permite administrar la matrícula de tus estudiantes de manera rápida y sencilla.", ...shared.matriculas },
        { id: 4, title: "E-commerce Demo", description: "Proyecto de tienda online con carrito funcional y Stripe API.", ...shared.ecommerce },
        { id: 5, title: "Portafolio", description: "Portafolio personal con proyectos y habilidades. Migrado a Next.js 16.", ...shared.portafolio },
    ],
};
