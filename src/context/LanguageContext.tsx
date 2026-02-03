'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
    language: string;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const storedLang = localStorage.getItem('language');
        if (storedLang) setLanguage(storedLang);
    }, []);

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => (prev === 'en' ? 'es' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguageContext must be used within a LanguageProvider');
    }
    return context;
};
