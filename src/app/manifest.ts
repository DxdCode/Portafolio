import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'DxdCode | Portfolio',
        short_name: 'DxdCode',
        description: 'Portfolio de Stalin — Desarrollador Full Stack',
        start_url: '/',
        display: 'standalone',
        background_color: '#0F0B1A',
        theme_color: '#A259FF',
        icons: [
            {
                src: '/imgico.ico',
                sizes: '32x32',
                type: 'image/x-icon',
            },
        ],
    };
}
