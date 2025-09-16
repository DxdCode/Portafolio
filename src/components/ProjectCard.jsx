import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { useLanguageContext } from "../context/LanguageContext";

export default function ProjectCard() {
  const { language } = useLanguageContext();
  const data = projects[language];
  const [expandedImage, setExpandedImage] = useState(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-2xl shadow-xl p-6 flex flex-col h-full overflow-visible"
          >
            {/* Imagen del proyecto */}
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                title={`Imagen de vista previa de ${project.title}`}
                onClick={() => setExpandedImage(project.image)}
                className="w-full h-48 sm:h-56 object-cover rounded-2xl cursor-pointer"
              />
            )}

            {/* Título y descripción */}
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-main">
              {project.title}
            </h3>
            <p className="mb-4 text-secondary flex-grow text-sm sm:text-base">
              {project.description}
            </p>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mb-4 mt-auto">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 sm:px-3 py-1 bg-accent text-main rounded-full text-xs sm:text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Botones de acción */}
            <div className="flex flex-row gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg shadow-lg text-center bg-accent text-main font-medium w-full sm:w-auto"
                  aria-label={`Ver código fuente de ${project.title}`}
                  title={`Ver código fuente de ${project.title}`}
                >
                  Código Fuente
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg shadow-lg text-center bg-card text-main hover:bg-hover font-medium w-full sm:w-auto"
                  aria-label={`Ver demo en vivo de ${project.title}`}
                  title={`Ver demo en vivo de ${project.title}`}
                >
                  Demo en Vivo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Imagen expandida fullscreen */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            key="fullscreen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImage(null)}
            className="fixed inset-0 bg-black/80 p-6 flex items-center justify-center z-50 cursor-zoom-out"
          >
            <motion.img
              src={expandedImage}
              alt="Proyecto ampliado"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
