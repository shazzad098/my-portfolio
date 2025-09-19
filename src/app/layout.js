import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}