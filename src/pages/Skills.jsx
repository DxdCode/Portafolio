import React from "react";
import { motion } from "framer-motion";
import CssIcon from "../assets/css_old.svg";
import ExpressIcon from "../assets/expressjs.svg";
import ExpressDarkIcon from "../assets/expressjs_dark.svg";
import GitIcon from "../assets/git.svg";
import HtmlIcon from "../assets/html5.svg";
import LinuxIcon from "../assets/linux.webp";
import MongoIcon from "../assets/mongodb.svg";
import NodeIcon from "../assets/nodejs.svg";
import PostgresIcon from "../assets/postgresql.svg";
import ReactIcon from "../assets/react_dark.svg";
import TailwindIcon from "../assets/tailwindcss.svg";
import { useLanguageContext } from "../context/LanguageContext";

const iconStyle = "w-12 h-12";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const allSkills = [
  { icon: HtmlIcon, name: "HTML5" },
  { icon: CssIcon, name: "CSS" },
  { icon: TailwindIcon, name: "Tailwind CSS" },
  { icon: ReactIcon, name: "React" },
  { icon: NodeIcon, name: "Node.js" },
  { icon: ExpressIcon, darkIcon: ExpressDarkIcon, name: "Express.js" },
  { icon: MongoIcon, name: "MongoDB" },
  { icon: PostgresIcon, name: "PostgreSQL" },
  { icon: GitIcon, name: "Git" },
  { icon: LinuxIcon, name: "Linux" }
];

export default function Skills() {
  const { language } = useLanguageContext();

  const renderSkill = (skill, i) => (
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
          <img
            src={skill.icon}
            alt={skill.name}
            className={`${iconStyle} dark:hidden`}
          />
          <img
            src={skill.darkIcon}
            alt={`${skill.name} Dark`}
            className={`${iconStyle} hidden dark:block`}
          />
        </>
      ) : (
        <img src={skill.icon} alt={skill.name} className={iconStyle} />
      )}
      <span className="text-sm mt-2 text-center text-main">{skill.name}</span>
    </motion.div>
  );

  return (
    <section className="w-full p-4 sm:p-8 bg-background mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-main text-center">
        {language === "es" ? "Habilidades" : "Skills"}
      </h2>

      <div className="flex flex-wrap gap-4 justify-center">
        {allSkills.map(renderSkill)}
      </div>
    </section>
  );
}
