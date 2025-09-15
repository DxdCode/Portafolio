export const contactData = {
  en: {
    title: "Contact",
    description: (
      <p className="text-lg leading-relaxed">
        Let’s{" "}
        <span className="text-[#acacac] font-bold underline decoration-[#4A6CF7]">
          get in touch
        </span>. 😀 <br />
        If you have a project in mind or would like to connect, feel free to
        reach out via the{" "}
        <span className="text-[#4A6CF7] font-semibold bg-[#4A6CF7]/20 rounded px-1">
          form
        </span>,{" "}
        <span className="text-[#4A6CF7] font-semibold bg-[#4A6CF7]/20 rounded px-1">
          email
        </span>, or{" "}
        <span className="text-[#4A6CF7] font-semibold underline decoration-[#1E1B2E]  bg-[#4A6CF7]/20 rounded px-1">
          social media
        </span>. 📧<br />
        <span className="text-[#1E1B2E] font-bold bg-white">
          I’ll be glad to respond
        </span> to your message.
      </p>
    ),
    fields: [
      { icon: "user", placeholder: "Name", name: "name" },
      { icon: "mail", placeholder: "Email", name: "email" },
      { icon: "message", placeholder: "Subject", name: "message" }
    ],
    button: "Send"
  },
  es: {
    title: "Contacto",
    description: (
      <p className="text-lg leading-relaxed">
        Pongámonos en{" "}
        <span className="text-[#acacac] font-bold underline decoration-[#4A6CF7]">
          contacto 
        </span>. 😀 <br />
        Si tienes un proyecto en mente o deseas conversar, puedes escribirme a
        través del{" "}
        <span className="text-[#4A6CF7] font-semibold bg-[#4A6CF7]/20 rounded px-1">
          formulario
        </span>, por{" "}
        <span className="text-[#4A6CF7] font-semibold bg-[#4A6CF7]/20 rounded px-1">
          correo electrónico
        </span> o mediante mis{" "}
        <span className="text-[#4A6CF7] font-semibold underline decoration-[#1E1B2E]  bg-[#4A6CF7]/20 rounded px-1">
          redes sociales 
        </span>. 📧<br />
        <span className="text-[#1E1B2E] font-bold bg-white">
          Estaré encantado
        </span> de responder a tu mensaje.
      </p>
    ),
    fields: [
      { icon: "user", placeholder: "Nombre", name: "name" },
      { icon: "mail", placeholder: "Correo", name: "email" },
      { icon: "message", placeholder: "Asunto", name: "message" }
    ],
    button: "Enviar"
  }
};
