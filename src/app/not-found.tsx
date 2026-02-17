import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex h-screen w-full relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
            {/* Background Grid Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />

            {/* Layout: 10% - 80% - 10% structure */}
            <div className="w-[10%] h-full hidden lg:block border-r border-[var(--border)] relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap opacity-30 text-xs tracking-[0.5em] font-mono" style={{ color: 'var(--text-secondary)' }}>
                    SYSTEM_STATUS_404
                </div>
            </div>

            <div className="w-full lg:w-[80%] h-full flex flex-col items-center justify-center relative z-10 px-6">

                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-4 h-4 rounded-full border border-[var(--accent)] opacity-50 animate-pulse hidden lg:block" />
                <div className="absolute bottom-20 left-20 w-32 h-1 rounded-full bg-[var(--border)] hidden lg:block" />

                <div className="text-center max-w-2xl relative">
                    {/* Big Glitch Effect Number */}
                    <h1
                        className="text-[120px] md:text-[200px] font-black leading-none tracking-tighter opacity-10 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                    >
                        404
                    </h1>

                    <h2
                        className="text-5xl md:text-7xl font-bold mb-4"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                    >
                        LOST IN <span className="text-[var(--accent)]">SPACE</span>
                    </h2>

                    <p className="text-lg md:text-xl mb-12 opacity-70 font-light" style={{ color: 'var(--text-secondary)' }}>
                        Parece que las coordenadas que buscas no existen en este sistema.
                    </p>

                    <Link
                        href="/"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] group-hover:animate-pulse" />
                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>
                            Regresar a la Base
                        </span>
                    </Link>
                </div>
            </div>

            <div className="w-[10%] h-full hidden lg:block border-l border-[var(--border)] relative">
                {/* Right sidebar decor */}
                <div className="absolute bottom-12 right-1/2 translate-x-1/2 w-px h-24 bg-[var(--border)]" />
            </div>
        </div>
    );
}
