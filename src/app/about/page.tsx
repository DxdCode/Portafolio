'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function AboutPage() {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations]?.about ?? translations.en.about;

    return (
        <div className="min-h-[85vh] lg:h-[80vh] grid-bg relative w-full pt-28 lg:pt-20 flex flex-col justify-center" style={{ background: 'var(--bg-primary)' }}>
            {/* Background Grid Lines matched to Contact */}
            <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />

            <div className="flex flex-col lg:flex-row flex-grow relative overflow-hidden h-full">
                {/* ─── LEFT COLUMN (Title & Visuals) ───────────────────────── */}
                <div className="lg:w-1/2 relative px-8 flex flex-col justify-center border-r border-[var(--border)] z-10">
                    {/* Background Text "PROFILE" */}
                    <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden flex justify-center items-center">
                        <span className="text-[25vw] lg:text-[15vw] font-black leading-none opacity-[0.03] -rotate-90 lg:rotate-0"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--text-primary)',
                            }}>
                            {(t as any).bgText || 'PROFILE'}
                        </span>
                    </div>

                    <div className="absolute top-24 left-6 md:left-10 hidden lg:block">
                        <span className="text-[10px] tracking-[0.4em] uppercase opacity-40 -rotate-90 block origin-bottom-left whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>
                            {t.badge}
                        </span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <h1 className="text-[12vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                            {(t as any).bigTitle1 || 'AB'}
                            <br />
                            <span className="text-outline">{(t as any).bigTitle2 || 'OUT'}</span>
                        </h1>
                    </motion.div>
                </div>

                {/* ─── RIGHT COLUMN (Bio & Stats) ───────────────────────────── */}
                <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center backdrop-blur-sm h-full"
                    style={{ background: 'rgba(20, 20, 22, 0.05)' }}>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3 font-mono" style={{ color: 'var(--accent)' }}>
                            {'>'} {language === 'es' ? 'BIO_LOG' : 'BIO_LOG'}
                        </h3>

                        <p className="text-lg md:text-xl leading-relaxed opacity-80 border-l-2 border-[#A259FF] pl-6 mb-12" style={{ color: 'var(--text-primary)' }}>
                            {t.description}
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            {/* Stat 1 */}
                            <div className="flex flex-col">
                                <span className="text-5xl font-black tracking-tighter" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                                    01<span className="text-lg opacity-50 text-[var(--accent)]">+</span>
                                </span>
                                <span className="text-[10px] uppercase tracking-widest mt-2 opacity-60" style={{ color: 'var(--text-secondary)' }}>
                                    {t.experience || 'Years Experience'}
                                </span>
                            </div>

                            {/* Stat 2 */}
                            <div className="flex flex-col">
                                <span className="text-5xl font-black tracking-tighter" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                                    5<span className="text-lg opacity-50 text-[var(--accent)]">+</span>
                                </span>
                                <span className="text-[10px] uppercase tracking-widest mt-2 opacity-60" style={{ color: 'var(--text-secondary)' }}>
                                    {t.projects || 'Projects Completed'}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
