import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { User, Mail, FileText, Send } from "lucide-react";
import { contactData } from "../data/contactData";
import { useLanguageContext } from "../context/LanguageContext";
import LinuxImage from '../assets/linux.webp'

export default function ContactCard() {
  const { language } = useLanguageContext();
  const data = contactData[language];
  const formRef = useRef();

  const iconMap = { user: User, mail: Mail, message: FileText };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Mensaje enviado!");
          formRef.current.reset();
        },
        (error) => {
          alert("Error al enviar el mensaje.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="w-full flex flex-col items-center justify-center p-4 bg-background " id='contact'>
      {/* Título */}
      <motion.h2
        className="text-4xl font-bold text-main mb-8 mt-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {data.title}
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-between w-full gap-6">
        {/* Descripción e imagen */}
        <div className="md:w-1/2 flex flex-col justify-start items-center">
          <motion.p
            className="text-secondary text-sm md:text-xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {data.description}
          </motion.p>

          <motion.div
            className="sm:w-60 w-40 m-4 sm:pt-20 pt-5"
            whileInView={{ rotate: [-20, 20, -20] }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img src={LinuxImage} alt="Logo de Linux" className="w-full h-full" loading="lazy" />
          </motion.div>
        </div>

        {/* Formulario */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 bg-card p-6 rounded-2xl shadow-xl max-h-[440px]"
        >
          {/* Nombre y Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            {data.fields.slice(0, 2).map((field, i) => {
              const Icon = iconMap[field.icon];
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-background rounded-xl p-3 shadow flex-1"
                >
                  <Icon className="text-gray-500 w-6 h-6" />
                  <input
                    type={field.icon === "mail" ? "email" : "text"}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent outline-none text-main placeholder:text-secondary text-base"
                    required
                  />
                </div>
              );
            })}
          </div>

          <div className="flex items-start gap-3 bg-background rounded-xl p-3 shadow">
            <textarea
              name={data.fields[2].name}
              placeholder={data.fields[2].placeholder}
              className="w-full bg-transparent outline-none text-main placeholder:text-secondary resize-none h-36 md:h-44 text-base"
              required
            />
          </div>

          {/* Botón enviar */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 px-6 py-3 bg-accent text-white rounded-xl font-medium shadow-lg hover:bg-hover flex items-center justify-center gap-2 transition-colors text-base cursor-pointer"
          >
            {data.button} <Send className="w-5 h-5" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
