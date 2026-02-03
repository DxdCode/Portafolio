"use client";

import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useLanguageContext } from "../context/LanguageContext";

export default function NotFound() {
    const { language } = useLanguageContext();

    return (
        <div className="min-h-screen flex flex-col bg-background text-main">
            <Navbar />

            <main className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-2xl text-center">
                    <h1 className="text-6xl font-extrabold mb-4">404</h1>
                    <h2 className="text-2xl mb-6">
                        {language === "en" ? "Page not found" : "Página no encontrada"}
                    </h2>
                    <p className="mb-6 text-secondary">
                        {language === "en"
                            ? "Sorry — the page you are looking for does not exist or has been moved."
                            : "Lo siento — la página que buscas no existe o fue movida."}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <a
                            href="/"
                            className="inline-block bg-card text-main px-5 py-2 rounded-md shadow-md hover:opacity-90"
                        >
                            {language === "en" ? "Go home" : "Ir al inicio"}
                        </a>
                        <a
                            href="#contact"
                            className="inline-block border border-card text-main px-5 py-2 rounded-md hover:bg-card/50"
                        >
                            {language === "en" ? "Contact me" : "Contáctame"}
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
