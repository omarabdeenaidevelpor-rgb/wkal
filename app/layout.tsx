import type { Metadata } from 'next';
import { Manrope, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-cormorant' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Waraq & Hekaya — Ideas Into Digital Experiences',
    template: '%s — Waraq & Hekaya'
  },
  description: 'Waraq & Hekaya is an AI-powered digital agency from Egypt helping brands worldwide design, build, and grow.',
  openGraph: {
    title: 'Waraq & Hekaya',
    description: 'An AI-powered digital agency from Egypt helping brands worldwide design, build, and grow.',
    siteName: 'Waraq & Hekaya',
    locale: 'en_US',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
