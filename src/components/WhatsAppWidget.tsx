'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Phone } from 'lucide-react';

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    };

    const handleSend = (e?: React.FormEvent) => {
        e?.preventDefault();
        const text = message.trim();
        if (!text) return;

        const url = `https://wa.me/593939233049?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        setMessage('');
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="bg-[#E5DDD5] border border-gray-200 rounded-2xl shadow-2xl w-[300px] sm:w-[350px] overflow-hidden flex flex-col font-sans"
                    >
                        {/* Header */}
                        <div className="p-4 bg-[#128C7E] text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/20 rounded-full">
                                    <Phone size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Soporte WhatsApp</h3>
                                    <p className="text-xs opacity-90">Normalmente responde en 1h</p>
                                </div>
                            </div>
                            <button
                                onClick={toggleOpen}
                                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Body / Chat Area */}
                        <div className="p-4 bg-[#E5DDD5] min-h-[150px] flex flex-col gap-3"
                            style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', opacity: 0.95 }}>
                            <div className="self-start bg-white text-gray-800 p-3 rounded-xl rounded-tl-none text-sm max-w-[85%] shadow-sm relative">
                                <p>
                                    Hola 👋<br />
                                    ¿En qué podemos ayudarte hoy?
                                </p>
                                <span className="text-[10px] text-gray-400 mt-1 block text-right">Justo ahora</span>
                            </div>
                        </div>

                        {/* Footer / Input */}
                        <form onSubmit={handleSend} className="p-3 bg-[#F0F0F0] flex gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Escribe tu mensaje..."
                                className="flex-1 bg-white text-gray-800 text-sm rounded-full px-4 py-2 outline-none focus:ring-1 focus:ring-[#128C7E] transition-all"
                            />
                            <button
                                type="submit"
                                disabled={!message.trim()}
                                className="p-2 rounded-full bg-[#128C7E] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <motion.button
                onClick={toggleOpen}
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg relative group"
                style={{
                    background: '#25D366', // WhatsApp Bright Green
                    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {isOpen ? (
                        <X size={28} className="text-white" />
                    ) : (
                        <MessageCircle size={28} className="text-white" />
                    )}
                </motion.div>

                {/* Tooltip on hover if closed */}
                <AnimatePresence>
                    {isHovered && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute right-full mr-4 bg-[var(--bg-card)] border border-[var(--border)] px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-medium shadow-md"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            ¡Chatea con nosotros!
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-[var(--bg-primary)]" />
                )}
            </motion.button>
        </div>
    );
}
