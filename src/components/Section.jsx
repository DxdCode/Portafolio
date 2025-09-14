import { sectionData } from '../data/sectionData'
import { useLanguageContext } from '../context/LanguageContext'
import imgBackground from '../assets/background.png'
import { FaArrowAltCircleDown } from 'react-icons/fa'
import { GitHubIcon, LinkedInIcon } from './Icons'

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
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-main mb-3 sm:mb-4">{data.title}</h1>
                    <div className="w-16 sm:w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                {/* Descripción */}
                <div className="max-w-xs sm:max-w-md md:max-w-2xl text-main sm:text-lg text-start">
                    <p >{data.description}</p>
                </div>

                {/* Contacto */}
                <div className="flex flex-row gap-8">
                    <LinkedInIcon href="https://www.linkedin.com/in/itsdavidd/" className={"hover:scale-125 ease-in duration-200"} />
                    <GitHubIcon href="https://github.com/DxdCode" className={"dark:text-white hover:scale-125 ease-in duration-200"} />

                </div>
            </div>

            {/* Imagen de fondo */}
            <div className="absolute bottom-0 right-0  w-36 sm:w-56 md:w-72 lg:w-80 z-20">
                <img src={imgBackground} alt="Fondo decorativo" className="w-full h-auto" />
            </div>

            {/* Icono de flecha */}
            <div className='absolute bottom-4 sm:bottom-6 animate-bounce '>
                <FaArrowAltCircleDown size={45} className='cursor-pointer text-[#1E1B2E] dark:text-[#F9F8FF]' />
            </div>

            {/* Nube SVG decorativa */}
            <svg className="absolute top-40 sm:top-40 w-30 h-30 sm:w-28 sm:h-28 text-[#1E1B2E] dark:text-[#F9F8FF]" fill="currentColor" viewBox="0 0 64 64">
                <path d="M20 30a10 10 0 1 1 20 0h10a5 5 0 0 1 0 10H20a10 10 0 0 1 0-20z" />
            </svg>

            <svg
                className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
                viewBox="0 0 600 400"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,200 C10,230 80,220 150,300 C200,350 250,320 300,400 L0,400 Z"
                    transform="translate(-30,0)"
                    fill="#2C2545"
                />
            </svg>

            <svg
                className="absolute bottom-0 right-0 w-full h-full pointer-events-none"
                viewBox="0 0 600 400"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    d="M600,200 
       C550,230 500,250 450,300
       C400,350 350,320 300,400 
       L600,400 Z"
                         transform="translate(30,0)"
                    fill="#2C2545"
                    className=""
                />
            </svg>





        </section>
    )
}

export default Section
