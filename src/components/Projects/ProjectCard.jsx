import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { useLanguageContext } from "../../context/LanguageContext";

function ProjectCard() {
  const { language } = useLanguageContext();
  const data = projects[language];

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.items.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.03, rotate: 0.5 }}
          className="bg-card rounded-2xl shadow-xl p-4 sm:p-4 flex flex-col h-full"
        >
          {project.image && (
            <div className="w-full h-48 sm:h-56 mb-4 rounded-2xl overflow-hidden shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-main">{project.title}</h3>
          <p className="mb-4 text-secondary flex-grow text-sm sm:text-base">{project.description}</p>

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

          <div className="flex flex-col sm:flex-row sm:space-x-4 gap-2">
            {[
              { label: "View Code", link: project.github, style: "bg-accent text-main" },
              { label: "Live Demo", link: project.link, style: "bg-card text-main hover:bg-hover" },
            ].map((btn, i) => (
              <a
                key={i}
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg transition-colors font-medium text-center shadow-lg w-full sm:w-1/2 ${btn.style}`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectCard;
