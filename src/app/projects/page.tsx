'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { projects, type Project } from '@/data/projects';

function ProjectCard({ project, index, t, onImageClick }: { project: Project; index: number; t: any, onImageClick: (img: string) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            // Height adjusted to ~55vh to ensure 1.5 cards fit in the 80vh container
            className="group relative w-full min-h-[55vh] flex flex-col md:flex-row rounded-[2.5rem] overflow-hidden border border-[var(--border)] bg-[var(--bg-secondary)]"
        >
            {/* ─── IMAGE HALF (50%) ─── */}
            <div
                className="w-full md:w-1/2 relative h-[40vh] md:h-auto overflow-hidden cursor-zoom-in"
                onClick={() => onImageClick(project.image)}
            >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm text-white">
                        <ZoomIn size={24} />
                    </div>
                </div>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* ─── CONTENT HALF (50%) ─── */}
            <div className="w-full md:w-1/2 relative p-8 md:p-10 flex flex-col justify-center bg-[var(--bg-card)]">

                {/* Huge Index Number */}
                <div className="absolute top-0 right-0 p-6 opacity-10 select-none pointer-events-none">
                    <span
                        className="text-[8rem] font-black leading-none"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                    >
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>

                <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-black uppercase leading-none mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                        {project.title}
                    </h3>

                    <p className="text-base md:text-lg leading-relaxed mb-6 opacity-70 font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border border-[var(--border)]"
                                style={{ color: 'var(--text-primary)', backgroundColor: 'transparent' }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        {project.urls.live && (
                            <a
                                href={project.urls.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                                style={{ background: 'var(--accent)', color: 'white' }}
                            >
                                <ExternalLink size={16} /> {t.live}
                            </a>
                        )}
                        {project.urls.github && (
                            <a
                                href={project.urls.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all hover:opacity-80 flex items-center gap-2"
                                style={{
                                    backgroundColor: 'var(--text-primary)',
                                    color: 'var(--bg-primary)'
                                }}
                            >
                                <Github size={16} /> {t.github}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsPage() {
    const { language } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const t = translations[language as keyof typeof translations]?.projects ?? translations.en.projects;
    const items = projects[language] ?? projects.en;

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
                <div className="lg:w-1/2 relative px-8 flex flex-col justify-center border-r border-[var(--border)] z-10 min-h-[30vh] lg:min-h-0">
                    {/* Background Text "BUILD" */}
                    <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden flex justify-center items-center">
                        <span className="text-[25vw] lg:text-[15vw] font-black leading-none opacity-[0.03] -rotate-90 lg:rotate-0"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--text-primary)',
                            }}>
                            {(t as any).bgText || 'BUILD'}
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
                            {(t as any).bigTitle1 || 'PRO'}
                            <br />
                            <span className="text-outline">{(t as any).bigTitle2 || 'JECTS'}</span>
                        </h1>
                    </motion.div>
                </div>

                {/* ─── RIGHT COLUMN (Scrollable List) ───────────────────────── */}
                <div className="lg:w-1/2 p-0 flex flex-col h-full overflow-hidden"
                    style={{ background: 'rgba(20, 20, 22, 0.05)' }}>

                    {/* Padding added to scroll container, gap increased */}
                    <div className="h-full overflow-y-auto px-6 lg:px-12 py-12 scrollbar-hide">
                        <div className="flex flex-col gap-16 pb-32">
                            {items.map((project, i) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={i}
                                    t={t}
                                    onImageClick={setSelectedImage}
                                />
                            ))}

                            {/* End Marker */}
                            <div className="flex items-center gap-4 opacity-30 justify-center pt-8">
                                <div className="h-px w-12 bg-[var(--text-primary)]" />
                                <span className="text-xs font-mono">END OF WORK</span>
                                <div className="h-px w-12 bg-[var(--text-primary)]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── LIGHTBOX OVERLAY ─── */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="relative w-full max-w-7xl h-full max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Project Preview"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
