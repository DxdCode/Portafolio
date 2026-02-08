const subdata = {
    matriculas: {
        image: "/assets/img1.webp",
        urls: {
            link: "https://gestormatriculas.netlify.app/",
            github: "https://github.com/DxdCode/GestionMatriculas"
        },
        technologies: {
            tech: ["React", "Tailwind", "Zustand", "Node.js", "Express", "MongoDB"]
        }
    },
    ecommerce: {
        image: "/assets/img3.webp",
        urls: {
            link: "https://documenter.getpostman.com/view/45748353/2sB2x6kX2Q",
            github: "https://github.com/MateooMoran/ProyectoTesis/tree/main/Backend-Poli"
        },
        technologies: {
            tech: ["Node.js", "Express.js", "MongoDB", "Stripe", "Socket.IO", "Passport"]
        }
    },
    portafolio: {
        image: "/assets/img2.webp",
        urls: {
            link: "https://dxdcode.pages.dev/",
            github: "https://github.com/DxdCode/Portafolio.git"
        },
        technologies: {
            tech: ["Next.js", "React", "Tailwind", "Framer Motion", "Emailjs"]
        }
    },
    ticketSystem: {
        image: "/assets/image-celular.webp",
        urls: {
            link: "https://expo.dev/accounts/itsdavidd/projects/app-tickets/builds/4354a46a-b3f2-4084-abce-bf6259e08a3f", 
            github: "https://github.com/DxdCode/app-ticket"
        },
        technologies: {
            tech: ["Hono", "React Native", "Expo", "AWS SST", "Gemini AI"]
        }
    },
    ecommercePrivate: {
        image: "/assets/image-ecomerce.jpeg",
        urls: {
            link: "https://tienda-dxdcode.vercel.app/",
            github: "https://tienda-dxdcode.vercel.app/"
        },
        technologies: {
             tech: ["Next.js 16", "PostgreSQL", "Railway", "Vercel", "Zod", "TypeScript"]
        }
    }
};

export const projects = {
    en: {
        items: [
             {
                id: 4,
                title: "Ticket System (AI)",
                description: "Automated ticket priority system using Hono (backend) and React Native (frontend).",
                ...subdata.ticketSystem
            },
            {
                id: 5,
                title: "E-commerce",
                description: "Full-stack e-commerce with Next.js 16, PostgreSQL on Railway, and deployed on Vercel.",
                ...subdata.ecommercePrivate
            },
            {
                id: 1,
                title: "Enrollment Management",
                description: "Allows you to manage student enrollment quickly and easily",
                ...subdata.matriculas
            },
            {
                id: 2,
                title: "E-commerce Demo",
                description: "Online store project with a functional cart and Stripe API.",
                ...subdata.ecommerce
            },
            {
                id: 3,
                title: "Portafolio",
                description: "Personal portfolio showcasing projects and skills. Migrated to Next.js 16.",
                ...subdata.portafolio
            }
        ]
    },
    es: {
        items: [
             {
                id: 4,
                title: "Sistema de Tickets (IA)",
                description: "Sistema automatizado de tickets con IA usando Hono (backend) y React Native (frontend).",
                ...subdata.ticketSystem
            },
            {
                id: 5,
                title: "E-commerce",
                description: "E-commerce full-stack con Next.js 16, PostgreSQL en Railway y desplegado en Vercel.",
                ...subdata.ecommercePrivate
            },
            {
                id: 1,
                title: "Gestión de Matrículas",
                description: "Permite administrar la matrícula de tus estudiantes de manera rápida y sencilla",
                ...subdata.matriculas
            },
            {
                id: 2,
                title: "E-commerce Demo",
                description: "Proyecto de tienda online con carrito funcional y Stripe API.",
                ...subdata.ecommerce
            },
            {
                id: 3,
                title: "Portafolio",
                description: "Portafolio personal con proyectos y habilidades. Migrado a Next.js 16.",
                ...subdata.portafolio
            }
        ]
    }
};
