'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { technologies, tools, softSkills, type Skill } from '@/data/skills';
import { type LucideIcon } from 'lucide-react';

export default function TechnologiesPage() {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations]?.skills ?? translations.en.skills;
    const soft = softSkills[language] ?? softSkills.en;

    const renderSkillCard = (skill: Skill, index: number, prefix: string) => {
        const isIconComponent = typeof skill.icon !== 'string';
        const IconComponent = isIconComponent ? (skill.icon as LucideIcon) : null;

        return (
            <motion.div
                key={`${prefix}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative border border-[var(--border)] p-6 flex flex-col items-center justify-center gap-4 hover:border-[var(--accent)] transition-all duration-300 min-h-[160px]"
            >
                <div className="absolute top-2 left-2 text-[10px] font-mono opacity-30" style={{ color: 'var(--text-secondary)' }}>
                    {prefix}_{String(index + 1).padStart(2, '0')}
                </div>

                <div className="w-16 h-16 relative grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110 flex items-center justify-center">
                    {isIconComponent && IconComponent ? (
                        <IconComponent size={48} strokeWidth={1.5} className="text-[var(--text-primary)]" />
                    ) : (
                        <Image src={skill.icon as string} alt={skill.name} fill className="object-contain" />
                    )}
                </div>

                <span className="text-sm md:text-base font-bold uppercase tracking-wider text-center" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                    {skill.name}
                </span>

                {/* Level Dots */}
                <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i < skill.level ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'}`}
                        />
                    ))}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
        );
    };

    return (
        <div className="min-h-[85vh] lg:h-[80vh] grid-bg relative w-full pt-28 lg:pt-20 flex flex-col justify-center" style={{ background: 'var(--bg-primary)' }}>
            {/* Background Grid Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />

            <div className="flex flex-col lg:flex-row flex-grow relative overflow-hidden h-full">
                {/* ─── LEFT COLUMN (Title & Visuals) ───────────────────────── */}
                <div className="lg:w-1/2 relative px-8 flex flex-col justify-center border-r border-[var(--border)] z-10 min-h-[30vh] lg:min-h-0">
                    {/* Background Text */}
                    <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden flex justify-center items-center">
                        <span className="text-[25vw] lg:text-[15vw] font-black leading-none opacity-[0.03] -rotate-90 lg:rotate-0"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--text-primary)',
                            }}>
                            {(t as any).bgText || 'TECH'}
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
                            {(t as any).bigTitle1 || 'SK'}
                            <br />
                            <span className="text-outline">{(t as any).bigTitle2 || 'ILLS'}</span>
                        </h1>
                    </motion.div>
                </div>

                {/* ─── RIGHT COLUMN (Skills Hangar) ───────────────────────────── */}
                <div className="lg:w-1/2 p-0 flex flex-col h-full overflow-hidden"
                    style={{ background: 'rgba(20, 20, 22, 0.05)' }}>

                    <div className="h-full overflow-y-auto px-6 lg:px-12 py-12 scrollbar-hide">

                        {/* 1. Main Tech Modules */}
                        <div className="mb-16">
                            <h3 className="text-sm font-mono uppercase mb-8 opacity-60 flex items-center gap-4" style={{ color: 'var(--text-primary)' }}>
                                <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
                                {t.techTitle} // MODULES: {technologies.length}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                                {technologies.map((skill, i) => renderSkillCard(skill, i, 'TECH'))}
                            </div>
                        </div>

                        {/* 2. Tools Inventory */}
                        <div className="mb-16 border-t border-[var(--border)] pt-10">
                            <h3 className="text-sm font-mono uppercase mb-8 opacity-60 flex items-center gap-4" style={{ color: 'var(--text-primary)' }}>
                                <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
                                {t.toolsTitle} // MODULES: {tools.length}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                                {tools.map((tool, i) => renderSkillCard(tool, i, 'TOOL'))}
                            </div>
                        </div>

                        {/* 3. Soft Skills */}
                        <div className="mb-16 border-t border-[var(--border)] pt-10">
                            <h3 className="text-sm font-mono uppercase mb-8 opacity-60 flex items-center gap-4" style={{ color: 'var(--text-primary)' }}>
                                <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
                                {t.softTitle} // MODULES: {soft.length}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                                {soft.map((skill, i) => renderSkillCard(skill, i, 'SOFT'))}
                            </div>
                        </div>

                        {/* End Marker */}
                        <div className="flex items-center gap-4 opacity-30 justify-center pt-8 pb-20">
                            <div className="h-px w-12 bg-[var(--text-primary)]" />
                            <span className="text-xs font-mono">SYS_OK</span>
                            <div className="h-px w-12 bg-[var(--text-primary)]" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
