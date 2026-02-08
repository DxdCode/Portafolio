'use client';

import { motion } from "framer-motion";
import { useLanguageContext } from "../context/LanguageContext";
import Image from "next/image";

const iconStyle = "w-12 h-12";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const allSkills = [
    { icon: "/assets/html5.svg", name: "HTML5" },
    { icon: "/assets/css_old.svg", name: "CSS" },
    { icon: "/assets/tailwindcss.svg", name: "Tailwind CSS" },
    { icon: "/assets/react_dark.svg", name: "React" },
    { icon: "/assets/nodejs.svg", name: "Node.js" },
    { icon: "/assets/expressjs.svg", darkIcon: "/assets/expressjs_dark.svg", name: "Express.js" },
    { icon: "/assets/mongodb.svg", name: "MongoDB" },
    { icon: "/assets/postgresql.svg", name: "PostgreSQL" },
    { icon: "/assets/git.svg", name: "Git" },
    { icon: "/assets/linux.webp", name: "Linux" }
];

export default function Skills() {
    const { language } = useLanguageContext();

    const renderSkill = (skill: typeof allSkills[0], i: number) => (
        <motion.div
            key={i}
            className="flex flex-col items-center justify-center bg-card rounded-lg shadow-md p-3 cursor-pointer w-24 h-24"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{
                scale: 1.1,
                y: -10,
                transition: { duration: 0.3, ease: "easeInOut" }
            }}
        >
            {skill.darkIcon ? (
                <>
                    <Image
                        src={skill.icon}
                        alt={skill.name}
                        className={`${iconStyle} dark:hidden`}
                        width={48}
                        height={48}
                    />
                    <Image
                        src={skill.darkIcon}
                        alt={`${skill.name} Dark`}
                        className={`${iconStyle} hidden dark:block`}
                        width={48}
                        height={48}
                    />
                </>
            ) : (
                <Image
                    src={skill.icon}
                    alt={skill.name}
                    className={iconStyle}
                    width={48}
                    height={48}
                />
            )}
            <span className="text-sm mt-2 text-center text-main">{skill.name}</span>
        </motion.div>
    );

    return (
        <section className="w-full p-4 sm:p-8 bg-background mt-24" id="skills">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-main text-center">
                {language === "es" ? "Habilidades" : "Skills"}
            </h2>

            <div className="flex flex-wrap gap-4 justify-center">
                {allSkills.map(renderSkill)}
            </div>
        </section>
    );
}
