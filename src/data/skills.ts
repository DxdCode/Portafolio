
import {
    type LucideIcon,
    Users,
    Brain,
    Zap,
    MessageCircle,
    Lightbulb,
    Puzzle
} from 'lucide-react';

export interface Skill {
    name: string;
    icon: string | LucideIcon;
    level: number;
}

export const technologies: Skill[] = [
    { name: "Java", icon: "/assets/java.svg", level: 3 },
    { name: "Next.js", icon: "/assets/nextjs.svg", level: 3 },
    { name: "React", icon: "/assets/react_dark.svg", level: 4 },
    { name: "React Native", icon: "/assets/react_native.svg", level: 4 },
    { name: "TypeScript", icon: "/assets/typescript.svg", level: 4 },
    { name: "Node.js", icon: "/assets/nodejs.svg", level: 5 },
    { name: "Docker", icon: "/assets/docker.svg", level: 3 },
    { name: "PostgreSQL", icon: "/assets/postgresql.svg", level: 4 },
    { name: "Supabase", icon: "/assets/supabase.svg", level: 4 },
    { name: "MongoDB", icon: "/assets/mongodb.svg", level: 5 },
    { name: "Tailwind CSS", icon: "/assets/tailwindcss.svg", level: 5 },
    { name: "Express.js", icon: "/assets/expressjs.svg", level: 5 },
    { name: "Jest", icon: "/assets/jest.svg", level: 3 },
    { name: "Git / GitHub", icon: "/assets/git.svg", level: 4 },
];

export const tools: Skill[] = [
    { name: "VS Code", icon: "/assets/vscode.svg", level: 5 },
    { name: "Postman", icon: "/assets/postman.svg", level: 5 },
    { name: "Linux", icon: "/assets/linux.svg", level: 3 },
    { name: "Vercel", icon: "/assets/vercel_brand.svg", level: 4 },
    { name: "Railway", icon: "/assets/railway.svg", level: 3 },
    { name: "Cloudflare Pages", icon: "/assets/cloudflare.svg", level: 4 },
    { name: "Render", icon: "/assets/render.svg", level: 5 },
    { name: "Netlify", icon: "/assets/netlify.svg", level: 5 },
    { name: "Jira", icon: "/assets/jira.svg", level: 4 },
];

export const softSkills: Record<string, Skill[]> = {
    en: [
        { name: "Problem Solving", icon: Puzzle, level: 5 },
        { name: "Teamwork", icon: Users, level: 5 },
        { name: "Fast Learner", icon: Zap, level: 5 },
        { name: "Communication", icon: MessageCircle, level: 5 },
        { name: "Proactive", icon: Lightbulb, level: 5 },
        { name: "Adaptability", icon: Brain, level: 5 },
    ],
    es: [
        { name: "Resolución de Problemas", icon: Puzzle, level: 5 },
        { name: "Trabajo en Equipo", icon: Users, level: 5 },
        { name: "Aprendizaje Rápido", icon: Zap, level: 5 },
        { name: "Comunicación", icon: MessageCircle, level: 5 },
        { name: "Proactivo", icon: Lightbulb, level: 5 },
        { name: "Adaptabilidad", icon: Brain, level: 5 },
    ],
};
