import { FaSun, FaMoon } from 'react-icons/fa'
import { MdTranslate } from 'react-icons/md'
import useDarkMode from '../hooks/useDarkMode'
import { useLanguageContext } from '../context/LanguageContext'

function Navbar() {
  const [darkMode, toggleDarkMode] = useDarkMode()
  const { language, toggleLanguage } = useLanguageContext()

  return (
    <nav className="flex justify-between items-center p-4 h-full bg-background text-main shadow-md">
      
      <div className=" text-xl sm:text-2xl font-extrabold">DxdCode <span>😁</span></div>

      <ul className="flex gap-3 sm:gap-6 text-[16] sm:text-xl">
        <li><a href="#home">{language === 'en' ? 'Home' : 'Inicio'}</a></li>
        <li><a href="#about">{language === 'en' ? 'About' : 'Acerca'}</a></li>
        <li><a href="#projects">{language === 'en' ? 'Projects' : 'Proyectos'}</a></li>
        <li><a href="#contact">{language === 'en' ? 'Contact' : 'Contacto'}</a></li>
      </ul>

      <div className="flex gap-3 sm:gap-4">
        <button className='text-[20px] sm:text-xl cursor-pointer hover:scale-120 duration-250' onClick={toggleDarkMode}>{darkMode ? <FaSun /> : <FaMoon />}</button>
        <button className='text-[20px] sm:text-xl cursor-pointer hover:scale-120 duration-250' onClick={toggleLanguage}><MdTranslate /></button>
      </div>
    </nav>
  )
}

export default Navbar
