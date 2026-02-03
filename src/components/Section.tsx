'use client';

import { sectionData } from '../data/sectionData';
import { useLanguageContext } from '../context/LanguageContext';
import { ChevronDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from './Icons';
import { motion } from "framer-motion";

function Section() {
    const { language } = useLanguageContext();
    const data = sectionData[language as 'en' | 'es'];

    return (
        <section className="relative w-full h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-background overflow-hidden px-4">

            {/* Fondo decorativo */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
                </div>
            </div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 text-center mt-[-40px]">

                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-main mb-4 tracking-tight">
                        {data.title}
                    </h1>
                    <div className="w-20 sm:w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                {/* Descripción */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-md sm:max-w-2xl text-main text-lg sm:text-xl md:text-2xl leading-relaxed"
                >
                    <p>{data.description}</p>
                </motion.div>

                {/* Contacto */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-row gap-8 mt-4"
                >
                    <LinkedInIcon href="https://www.linkedin.com/in/itsdavidd/" className={"w-10 h-10 hover:scale-125 transition-transform duration-300"} />
                    <GitHubIcon href="https://github.com/DxdCode" className={"w-10 h-10 dark:text-white hover:scale-125 transition-transform duration-300"} />
                </motion.div>
            </div>

            {/* Icono de flecha */}
            <a href='#projects' className='absolute bottom-10 animate-bounce left-1/2 -translate-x-1/2 transition-opacity duration-300 hover:opacity-70' aria-label={data.ariaLabel}>
                <ChevronDown size={50} className='text-main' />
            </a>

            {/* Nubes SVG decorativas */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                className="absolute top-20 right-[10%] hidden lg:block"
            >
                <svg width="120" height="120" viewBox="0 0 64 64" fill="currentColor" className="text-main">
                    <path d="M20 30a10 10 0 1 1 20 0h10a5 5 0 0 1 0 10H20a10 10 0 0 1 0-20z" />
                </svg>
            </motion.div>

        </section>
    );
}


export default Section;
