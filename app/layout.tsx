import type { Metadata } from 'next';
import { Fredoka, Nunito } from 'next/font/google';
import './globals.css';

const fredoka = Fredoka({
  variable: '--font-fredoka',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://familiaetapeya.com'),
  title: 'La Familia Etapeya | Aventuras para imprimir y disfrutar',
  description: 'Packs de actividades, cómic y juegos imprimibles para crear recuerdos inolvidables en familia.',
  openGraph: {
    title: 'La Familia Etapeya | Menos pantalla. Más aventuras juntos.',
    description: 'Packs de actividades, cómic y juegos imprimibles desde $1.',
    images: [{ url: '/og.png', width: 1122, height: 1402, alt: 'La Familia Etapeya disfrutando actividades en familia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Familia Etapeya | Menos pantalla. Más aventuras juntos.',
    description: 'Packs de actividades, cómic y juegos imprimibles desde $1.',
    images: ['/og.png'],
  },
  alternates: { canonical: '/' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fredoka.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
