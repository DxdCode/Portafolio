import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';

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
    image: img1,
    urls: {
      link: "https://ecommerce-demo.netlify.app/",
      github: "https://github.com/DxdCode/EcommerceDemo"
    },
    technologies: {
      tech: ["React", "Tailwind", "Stripe API"]
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
        title: "Portfolio",
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
