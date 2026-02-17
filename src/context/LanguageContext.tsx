'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AppContextType {
    language: string;
    toggleLanguage: () => void;
    darkMode: boolean;
    toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState('es');
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const storedLang = localStorage.getItem('language');
        if (storedLang) setLanguage(storedLang);

        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setDarkMode(storedTheme === 'dark');
        } else {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.remove('light');
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
            root.classList.add('light');
        }
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
    const toggleTheme = () => setDarkMode((prev) => !prev);

    return (
        <AppContext.Provider value={{ language, toggleLanguage, darkMode, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
