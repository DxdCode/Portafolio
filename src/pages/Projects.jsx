import ProjectCard from '../components/ProjectCard';
import { useLanguageContext } from '../context/LanguageContext';

function Projects() {
  const { language } = useLanguageContext();

  return (
    <section id='projects' className='pt-24 px-4'>
      <h2 className="text-4xl font-bold text-center pb-8 text-main">{language === "en" ? "My projects" : "Mis proyectos"}</h2>
      <div className="w-full flex justify-center">
        <ProjectCard />
      </div>
    </section>

  );
}

export default Projects