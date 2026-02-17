'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function Footer() {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations]?.footer ?? translations.en.footer;

    const year = new Date().getFullYear();

    const socialLinks = [
        { href: 'https://github.com/DxdCode', icon: Github, label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/itsdavidd/', icon: Linkedin, label: 'LinkedIn' },
        { href: 'mailto:stalinsangucho87@gmail.com', icon: Mail, label: 'Email' },
    ];



    return (
        <footer
            className="relative mt-12 pt-8 pb-6 overflow-hidden"
            style={{ background: 'var(--bg-primary)' }}
        >

            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        {socialLinks.map(({ href, icon: Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="p-1.5 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-[var(--accent-subtle)] group"
                                style={{ color: 'var(--text-muted)' }}
                            >
                                <Icon size={18} className="transition-colors group-hover:text-[var(--accent)]" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* 2. Copyright */}
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    © {year} Stalin. {t.rights}.
                </span>
            </div>
        </footer>
    );
}
