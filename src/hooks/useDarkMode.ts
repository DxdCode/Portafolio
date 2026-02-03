'use client';

import { useState, useEffect } from 'react';

function useDarkMode(): [boolean, () => void] {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(storedTheme === 'dark' || (prefersDark && !storedTheme));
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const root = window.document.documentElement;
            if (darkMode) {
                root.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                root.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(prev => !prev);

    return [darkMode, toggleDarkMode];
}

export default useDarkMode;
