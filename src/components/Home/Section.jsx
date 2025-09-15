import { sectionData } from '../../data/sectionData'
import { useLanguageContext } from '../../context/LanguageContext'
import { ChevronDown } from "lucide-react";

import { GitHubIcon, LinkedInIcon, ReactIcon } from '../Icons'
import { motion } from "framer-motion"

function Section() {
    const { language } = useLanguageContext()
    const data = sectionData[language]

    return (
        <section className="relative w-full h-full flex flex-col items-center justify-center bg-background overflow-hidden">

            {/* Fondo decorativo */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
                </div>


            </div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 text-center px-4">

                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-main mb-3 sm:mb-4">{data.title}</h1>
                    <div className="w-16 sm:w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                {/* Descripción */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-xs sm:max-w-md md:max-w-2xl text-main sm:text-lg text-start "
                >
                    <p>{data.description}</p>
                </motion.div>

                {/* Contacto */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-row gap-8"
                >
                    <LinkedInIcon href="https://www.linkedin.com/in/itsdavidd/" className={"hover:scale-125 ease-in duration-200"} />
                    <GitHubIcon href="https://github.com/DxdCode" className={"dark:text-white hover:scale-125 ease-in duration-200"} />
                    <ReactIcon></ReactIcon>
                </motion.div>
            </div>

            {/* Icono de flecha */}
            <a href='#projects' className='absolute bottom-20 sm:bottom-6 animate-bounce'>
                <ChevronDown size={45} className='cursor-pointer text-[#1E1B2E] dark:text-[#F9F8FF]' />
            </a>

            {/* Nube SVG decorativa */}
            <motion.svg
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1, y: [0, -10, 0] }} 
                transition={{
                    x: { type: "spring", stiffness: 80, damping: 20 },
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut", repeatType: "loop" }, 
                    opacity: { duration: 1 } 
                }}
                className="absolute top-20 sm:top-40 w-30 h-30 sm:w-28 sm:h-28 text-[#1E1B2E] dark:text-[#F9F8FF]"
                fill="currentColor"
                viewBox="0 0 64 64"
            >
                <path d="M20 30a10 10 0 1 1 20 0h10a5 5 0 0 1 0 10H20a10 10 0 0 1 0-20z" />
            </motion.svg>


        </section>
    )
}

export default Section