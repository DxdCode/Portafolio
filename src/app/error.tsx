"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useLanguageContext } from "../context/LanguageContext";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    const { language } = useLanguageContext();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col bg-background text-main">
            <Navbar />

            <main className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-2xl text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        {language === "en" ? "An error occurred" : "Ha ocurrido un error"}
                    </h1>
                    <p className="mb-6 text-secondary">
                        {language === "en"
                            ? "Something went wrong. Try reloading the page or come back later."
                            : "Algo salió mal. Intenta recargar la página o vuelve más tarde."}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={() => reset()}
                            className="inline-block bg-card text-main px-5 py-2 rounded-md shadow-md hover:opacity-90"
                        >
                            {language === "en" ? "Retry" : "Reintentar"}
                        </button>
                        <a href="/" className="inline-block border border-card text-main px-5 py-2 rounded-md hover:bg-card/50">
                            {language === "en" ? "Go home" : "Ir al inicio"}
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
