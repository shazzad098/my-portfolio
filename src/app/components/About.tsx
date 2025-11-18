// src/app/components/About.tsx
"use client";
import { useEffect, useRef } from "react";
import { animateOnScroll } from "../animations";

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    animateOnScroll(
      "#about",
      ".about-element",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-light-surface dark:bg-dark-surface">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 about-element">
            About Me
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto about-element">
            I am a detail-oriented Full Stack Developer with a passion for
            creating intuitive and dynamic user experiences. My expertise lies in
            leveraging modern technologies like React, Next.js, and Node.js to
            build high-performance, responsive web applications from concept to
            deployment. I thrive on turning complex problems into elegant,
            efficient solutions and am committed to continuous learning to stay
            ahead in the ever-evolving landscape of web technology.
          </p>
        </div>
      </div>
    </section>
  );
}