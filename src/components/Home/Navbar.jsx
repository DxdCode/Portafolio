import { Sun, Moon, Languages } from "lucide-react";
import useDarkMode from "../../hooks/useDarkMode";
import { useLanguageContext } from "../../context/LanguageContext";
import { motion, useScroll, useSpring } from "framer-motion";

function Navbar() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const { language, toggleLanguage } = useLanguageContext();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-col bg-background shadow-md">
      <div className="flex justify-between items-center p-4 h-full text-main">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl font-extrabold"
        >
          DxdCode
        </motion.div>

        {/* Links */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex gap-2 sm:gap-6 text-[16px] sm:text-xl tracking-tight leading-tight"
        >
          <li>
            <a
              href="#about"
              className="hover:text-accent transition-colors"
            >
              {language === "en" ? "About" : "Acerca"}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-accent transition-colors"
            >
              {language === "en" ? "Projects" : "Proyectos"}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-accent transition-colors"
            >
              {language === "en" ? "Contact" : "Contacto"}
            </a>
          </li>
        </motion.ul>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-1 sm:gap-4"
        >
          <button
            className="text-[20px] sm:text-xl cursor-pointer hover:scale-125 duration-300"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <Sun className="" size={20} />
            ) : (
              <Moon className="text-blue-500" size={20} />
            )}
          </button>
          <button
            className="text-[20px] sm:text-xl cursor-pointer hover:scale-125 duration-300"
            onClick={toggleLanguage}
          >
            <Languages size={22} />
          </button>
        </motion.div>
      </div>

      {/* Barra de progreso */}
      <motion.div
        className="h-[5px] bg-scroll origin-left"
        style={{ scaleX }}
      />
    </nav>
  );
}

export default Navbar;
