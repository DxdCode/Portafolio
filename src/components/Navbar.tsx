'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, Sun, Moon, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

const navLinks = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'skills', href: '/technologies' },
    { key: 'projects', href: '/projects' },
    { key: 'contact', href: '/contact' },
] as const;

export default function Navbar() {
    const { language, toggleLanguage, darkMode, toggleTheme } = useLanguage();
    const t = translations[language as keyof typeof translations]?.nav ?? translations.en.nav;
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                    ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-[var(--border)] shadow-lg'
                    : 'bg-transparent border-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* 1. System Identity (Logo) */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-3xl font-black tracking-tighter" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                            DxdCode
                        </span>
                    </Link>

                    {/* 2. Desktop HUD (Navigation - Clean Text) */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.filter(l => l.key !== 'home').map(({ key, href }, index) => {
                            const isActive = pathname === href;
                            return (
                                <div key={key} className="flex items-center gap-10">
                                    <Link
                                        href={href}
                                        className="relative text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-[var(--accent)] flex items-center gap-2 group"
                                        style={{
                                            color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                                            fontFamily: 'var(--font-heading)'
                                        }}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive ? 'bg-[var(--accent)]' : 'bg-transparent group-hover:bg-[var(--accent)]'}`} />
                                        {t[key as keyof typeof t]}
                                    </Link>
                                    {/* Separator / slash */}
                                    {index < navLinks.length - 2 && (
                                        <span className="text-[var(--border)] select-none opacity-30 font-mono text-xs">/</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* 3. Controls (Toggles & Mobile Menu - Minimal) */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2">
                            <button
                                onClick={toggleTheme}
                                className="w-10 h-10 flex items-center justify-center hover:text-[var(--accent)] transition-all"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            <div className="w-px h-6 bg-[var(--border)]" />

                            <button
                                onClick={toggleLanguage}
                                className="w-10 h-10 flex items-center justify-center hover:text-[var(--accent)] transition-all"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                <Languages size={20} />
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden w-12 h-12 flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--accent)] transition-all"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* ─── MOBILE COMMAND OVERLAY ─── */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-[60] bg-[var(--bg-primary)] flex flex-col"
                    >
                        {/* Grid Background */}
                        <div className="absolute inset-0 pointer-events-none opacity-5"
                            style={{
                                backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                                backgroundSize: '40px 40px'
                            }}
                        />

                        {/* Header */}
                        <div className="h-20 flex items-center justify-between px-6 border-b border-[var(--border)] relative z-10 bg-[var(--bg-primary)]">
                            <span className="font-mono text-xs opacity-50">SYSTEM_MENU</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-10 h-10 flex items-center justify-center border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--accent)]"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Links List */}
                        <div className="flex-grow flex flex-col justify-center px-8 gap-8 relative z-10">
                            {navLinks.map(({ key, href }, i) => (
                                <Link
                                    key={key}
                                    href={href}
                                    className="text-4xl font-black uppercase tracking-tighter flex items-center gap-4 group"
                                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                                >
                                    <span className="text-xs font-mono opacity-30 group-hover:text-[var(--accent)] transition-colors">0{i}</span>
                                    <span className="group-hover:pl-4 transition-all duration-300 group-hover:text-[var(--accent)]">
                                        {t[key as keyof typeof t]}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {/* Footer / Controls */}
                        <div className="p-8 border-t border-[var(--border)] relative z-10 bg-[var(--bg-secondary)]">
                            <div className="flex gap-4">
                                <button
                                    onClick={toggleTheme}
                                    className="flex-1 h-12 flex items-center justify-center gap-2 border border-[var(--border)] bg-[var(--bg-primary)] font-mono text-xs uppercase hover:border-[var(--accent)] transition-all"
                                >
                                    {darkMode ? <Sun size={14} /> : <Moon size={14} />}
                                    <span>{darkMode ? 'LIGHT_MODE' : 'DARK_MODE'}</span>
                                </button>
                                <button
                                    onClick={toggleLanguage}
                                    className="flex-1 h-12 flex items-center justify-center gap-2 border border-[var(--border)] bg-[var(--bg-primary)] font-mono text-xs uppercase hover:border-[var(--accent)] transition-all"
                                >
                                    <Languages size={14} />
                                    <span>{language === 'en' ? 'ESPAÑOL' : 'ENGLISH'}</span>
                                </button>
                            </div>
                            <div className="mt-6 flex justify-between text-[10px] font-mono opacity-40">
                                <span>SYS_STATUS: DXD_CODE</span>
                                <span>LOC: GLOBAL</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
