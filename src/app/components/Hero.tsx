// src/app/components/Hero.tsx
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Image from "next/image";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      ".hero-element",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
    );
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 hero-element">
            <Image
              src="/images/profile.jpg"
              alt="Shazzad Haque Prince"
              width={128}
              height={128}
              className="rounded-full mx-auto mb-4"
              priority
            />
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
              Shazzad Haque Prince
            </h1>
            <h2 className="text-xl md:text-2xl text-light-text dark:text-dark-text">
              Full Stack Developer & UI/UX Enthusiast
            </h2>
          </div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 hero-element">
            I build modern, high-performance web applications with a focus on
            clean design and exceptional user experience.
          </p>
          <div className="flex justify-center gap-4 mb-8 hero-element">
            <Link
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-light-accent text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Get in Touch <FiArrowRight />
            </Link>
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-light-surface dark:bg-dark-surface rounded-lg hover:bg-opacity-80 transition-opacity"
            >
              Download CV <FiDownload />
            </a>
          </div>
          <div className="flex justify-center gap-4 hero-element">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub className="text-2xl hover:text-light-accent dark:hover:text-dark-accent transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin className="text-2xl hover:text-light-accent dark:hover:text-dark-accent transition-colors" />
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email">
              <FiMail className="text-2xl hover:text-light-accent dark:hover:text-dark-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}