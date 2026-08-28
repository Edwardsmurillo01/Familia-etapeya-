import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://la-familia-etapeya.openai.site'),
  title: 'La Familia Etapeya | Aventuras para imprimir y disfrutar',
  description: 'Packs de actividades, cómic y juegos imprimibles para crear recuerdos inolvidables en familia.',
  openGraph: {
    title: 'La Familia Etapeya | Menos pantalla. Más aventuras juntos.',
    description: 'Packs de actividades, cómic y juegos imprimibles desde $1.',
    images: [{ url: '/og.png', width: 1728, height: 910, alt: 'La Familia Etapeya disfrutando actividades en familia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Familia Etapeya | Menos pantalla. Más aventuras juntos.',
    description: 'Packs de actividades, cómic y juegos imprimibles desde $1.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
