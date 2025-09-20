// src/app/layout.tsx

import './globals.css';
import { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Outfit, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MouseTrail from './components/MouseFollower';

// Modern sans-serif font for body text - Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

// Modern geometric font for headings - Outfit
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

// Techy, modern font for accents - Space Grotesk
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

// Fallback font - Inter (clean and reliable)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shazzad - Web Developer Portfolio',
  description: 'Modern portfolio showcasing innovative web development projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans">
        <div className="tech-background"></div>
        <MouseTrail />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}