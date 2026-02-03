'use client';

import { motion } from "framer-motion";
import { Linkedin, Code } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative mt-24 shadow-xl w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative bg-card text-main w-full max-w-full mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
                {/* Nombre */}
                <div className="flex-1 text-left">
                    <h2 className="text-lg sm:text-xl font-bold">DxdCode</h2>
                </div>

                {/* Derechos reservados */}
                <div className="flex-1 text-center text-sm text-secondary">
                    © {year} Todos los derechos reservados
                </div>

                {/* Contactos*/}
                <div className="flex-1 flex justify-end gap-4">
                    <a
                        href="https://www.linkedin.com/in/itsdavidd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-white transition-colors"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                        href="https://github.com/DxdCode"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Proyectos"
                        className="hover:text-white transition-colors"
                    >
                        <Code className="w-4 h-4" />
                    </a>
                </div>
            </motion.div>
        </footer>
    );
}
