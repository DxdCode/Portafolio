import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';

const subdata = {
  matriculas: {
    image: img1,
    urls: {
      link: "https://gestormatriculas.netlify.app/",
      github: "https://github.com/DxdCode/GestionMatriculas"
    },
    technologies: {
      tech: ["React", "Tailwind", "Zustand", "Node.js", "Express", "MongoDB"]
    }
  },
  ecommerce: {
    image: img3,
    urls: {
      link: "https://documenter.getpostman.com/view/45748353/2sB2x6kX2Q",
      github: "https://github.com/MateooMoran/ProyectoTesis/tree/main/Backend-Poli"
    },
    technologies: {
      tech: ["Node.js", "Express.js", "MongoDB", "Stripe", "Socket.IO", "Passport",]
    }
  },
  portafolio: {
    image: img2,
    urls: {
      link: "https://dxdcode.pages.dev/",
      github: "https://github.com/DxdCode/Portafolio.git"
    },
    technologies: {
      tech: ["React", "Tailwind", "Framer Motion", "Emailjs"]
    }
  }
};

export const projects = {
  en: {
    items: [
      {
        id: 1,
        title: "Enrollment Management",
        description: "Allows you to manage student enrollment quickly and easily",
        ...subdata.matriculas
      },
      {
        id: 2,
        title: "E-commerce Demo",
        description: "Online store project with a functional cart and Stripe API.",
        ...subdata.ecommerce
      },
      {
        id: 3,
        title: "Portafolio",
        description: "Personal portfolio showcasing projects and skills.",
        ...subdata.portafolio
      }
    ]
  },
  es: {
    items: [
      {
        id: 1,
        title: "Gestión de Matrículas",
        description: "Permite administrar la matrícula de tus estudiantes de manera rápida y sencilla",
        ...subdata.matriculas
      },
      {
        id: 2,
        title: "E-commerce Demo",
        description: "Proyecto de tienda online con carrito funcional y Stripe API.",
        ...subdata.ecommerce
      },
      {
        id: 3,
        title: "Portafolio",
        description: "Portafolio personal con proyectos y habilidades.",
        ...subdata.portafolio
      }
    ]
  }
};
