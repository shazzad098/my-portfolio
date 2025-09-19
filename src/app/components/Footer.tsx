// app/components/Footer.tsx
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: <Github />, href: 'https://github.com/shazzad098' },
  { icon: <Linkedin />, href: 'https://www.linkedin.com/in/shazzadprince098/' },
  { icon: <Twitter />, href: 'https://x.com/Shazzadp91124' },
  { icon: <Instagram />, href: 'https://www.instagram.com/hsn.shazzad/' },
  { icon: <Mail />, href: 'mailto:shazzad920@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-light-primary dark:hover:text-dark-primary transition-colors">
              {link.icon}
            </Link>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Shazzad Haque Prince. All rights reserved.</p>
      </div>
    </footer>
  );
}