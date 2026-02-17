'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import Link from 'next/link';

export default function Hero() {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations]?.hero ?? translations.en.hero;

    return (
        <section
            id="home"
            className="relative min-h-[85vh] lg:h-[80vh] flex flex-col justify-center items-center overflow-hidden grid-bg pt-20"
        >
            {/* Background Text "STALIN" */}
            <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden flex justify-center items-center">
                <span className="text-[25vw] font-black leading-none opacity-[0.03]"
                    style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--text-primary)',
                    }}>
                    {(t as any).bgText || 'STALIN'}
                </span>
            </div>

            {/* Content — Centered */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 gap-6">

                {/* 1. Badge "Available for Work" */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)]/50 backdrop-blur-sm mb-4"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A259FF] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A259FF]"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--text-secondary)' }}>
                        {(t as any).badge || 'AVAILABLE FOR WORK'}
                    </span>
                </motion.div>

                {/* 2. Main Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex flex-col items-center leading-none"
                >
                    {/* Line 1: FULL STACK */}
                    <h1 className="text-[12vw] lg:text-[7.5vw] font-black tracking-tighter"
                        style={{
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-heading)',
                            lineHeight: 0.9
                        }}>
                        {(t as any).line1 || 'FULL STACK'}
                    </h1>

                    {/* Line 2: DEVELOPER (Outlined/Grey) */}
                    <h1 className="text-[12vw] lg:text-[7.5vw] font-black tracking-tighter"
                        style={{
                            color: 'transparent',
                            WebkitTextStroke: '2px var(--text-muted)',
                            fontFamily: 'var(--font-heading)',
                            lineHeight: 0.9,
                            opacity: 0.5
                        }}>
                        {(t as any).line2 || 'DEVELOPER'}
                    </h1>
                </motion.div>

                {/* 3. Subtitle / Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-sm md:text-base max-w-md mt-4 tracking-wide leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    {t.subtitle}
                </motion.p>

                {/* 4. Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row items-center gap-6 mt-12"
                >
                    <Link
                        href="/projects"
                        className="bg-[#592ea8] text-white px-8 py-4 font-bold tracking-[0.2em] uppercase text-sm transition-all duration-300 shadow-[6px_6px_0px_#ffffff] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_#ffffff] hover:bg-[#6d38c9]"
                    >
                        {language === 'en' ? 'View Projects' : 'Ver Proyectos'}
                    </Link>

                    <div className="flex items-center gap-6">
                        <a
                            href="/assets/Curriculum_Stalin_Sangucho.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 font-bold tracking-[0.2em] uppercase text-sm transition-all duration-300 hover:opacity-80"
                            style={{
                                backgroundColor: 'var(--text-primary)',
                                color: 'var(--bg-primary)'
                            }}
                        >
                            {language === 'en' ? 'Download CV' : 'Descargar CV'}
                        </a>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
