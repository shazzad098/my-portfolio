// src/app/layout.tsx

import './globals.css';
import { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';


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
  <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} ${spaceGrotesk.variable}`}>
    <body className="font-sans">
      <ErrorBoundary>
        <div className="tech-background"></div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </ErrorBoundary>
    </body>
  </html>
);
}