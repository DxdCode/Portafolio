'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations]?.contact ?? translations.en.contact;

    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<FormStatus>('idle');

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('sending');

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
            );
            setStatus('success');
            formRef.current.reset();
            setTimeout(() => setStatus('idle'), 4000);
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const contactMethods = [
        { icon: Github, href: 'https://github.com/DxdCode' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/itsdavidd/' },
        { icon: Mail, href: 'mailto:stalinsangucho87@gmail.com' },
    ];

    return (
        <div className="min-h-[85vh] lg:h-[80vh] grid-bg relative w-full pt-28 lg:pt-20 flex flex-col justify-center" style={{ background: 'var(--bg-primary)' }}>
            {/* Background Grid Lines specific to this design */}
            <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />

            <div className="flex flex-col lg:flex-row flex-grow relative overflow-hidden h-full">
                <div className="lg:w-1/2 relative px-8 flex flex-col justify-center border-r border-[var(--border)] z-10">
                    {/* Background Text "WORK" - Restricted to Left Column */}
                    <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden flex justify-center items-center">
                        <span className="text-[30vw] lg:text-[18vw] font-black leading-none opacity-[0.03] -rotate-90 lg:rotate-0"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--text-primary)',
                            }}>
                            {t.bgText}
                        </span>
                    </div>

                    <div className="absolute top-24 left-6 md:left-10 hidden lg:block">
                        <span className="text-[10px] tracking-[0.4em] uppercase opacity-40 -rotate-90 block origin-bottom-left whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>
                            {t.industrialTag}
                        </span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12"
                    >
                        {/* Text Content */}
                        <div className="flex-1">
                            <h1 className="text-[12vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                                {t.bigTitle1}
                                <br />
                                <span className="text-outline">{t.bigTitle2}</span>
                            </h1>

                            <p className="text-lg md:text-xl max-w-sm mt-8 leading-relaxed opacity-80 border-l-2 border-[#A259FF] pl-6" style={{ color: 'var(--text-primary)' }}>
                                {t.industrialIntro}
                            </p>
                        </div>

                        {/* Social Column - Flex Row on Mobile, Flex Col on Desktop */}
                        <div className="flex flex-row lg:flex-col gap-6 justify-center lg:justify-center">
                            {contactMethods.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 group hover:scale-110"
                                    style={{
                                        borderColor: 'var(--border)',
                                        color: 'var(--text-muted)'
                                    }}
                                >
                                    <div className="group-hover:text-white group-hover:bg-[#A259FF] w-full h-full rounded-full flex items-center justify-center transition-colors">
                                        <social.icon size={22} />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ─── RIGHT COLUMN (Form) ────────────────────────────────── */}
                <div className="lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center backdrop-blur-sm h-full"
                    style={{ background: 'rgba(20, 20, 22, 0.05)' }}>
                    <form ref={formRef} onSubmit={sendEmail} className="w-full max-w-lg mx-auto flex flex-col gap-8">

                        {/* Name Input */}
                        <div className="group relative">
                            <label className="text-xs font-bold tracking-[0.2em] uppercase opacity-40 mb-2 block" style={{ color: 'var(--text-primary)' }}>
                                {t.nameLabel}
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-transparent border-b py-4 text-lg outline-none transition-colors"
                                style={{
                                    color: 'var(--text-primary)',
                                    borderColor: 'var(--border)',
                                    borderBottomColor: 'var(--border)'
                                }}
                            />
                        </div>

                        {/* Email Input */}
                        <div className="group relative">
                            <label className="text-xs font-bold tracking-[0.2em] uppercase opacity-40 mb-2 block" style={{ color: 'var(--text-primary)' }}>
                                {t.emailLabel}
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-transparent border-b py-4 text-lg outline-none transition-colors"
                                style={{
                                    color: 'var(--text-primary)',
                                    borderColor: 'var(--border)',
                                    borderBottomColor: 'var(--border)'
                                }}
                            />
                        </div>

                        {/* Message Input */}
                        <div className="group relative">
                            <label className="text-xs font-bold tracking-[0.2em] uppercase opacity-40 mb-2 block" style={{ color: 'var(--text-primary)' }}>
                                {t.messageLabel}
                            </label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                className="w-full bg-transparent border-b py-4 text-lg outline-none transition-colors resize-none"
                                style={{
                                    color: 'var(--text-primary)',
                                    borderColor: 'var(--border)',
                                    borderBottomColor: 'var(--border)'
                                }}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end mt-4">
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="bg-[#592ea8] hover:bg-[#6d38c9] text-white px-10 py-4 font-bold tracking-[0.2em] uppercase text-sm transition-all duration-300 shadow-[6px_6px_0px_#ffffff] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_#ffffff]"
                            >
                                {status === 'sending' ? t.sending : t.sendButton}
                            </button>
                        </div>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <p className="text-green-500 text-sm font-bold tracking-wider text-right">{t.successMessage}</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-500 text-sm font-bold tracking-wider text-right">{t.errorMessage}</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
