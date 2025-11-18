// src/app/components/Projects.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { staggerAnimateOnScroll } from "../animations";

const projects = [
  {
    title: "Portfolio Website",
    description: "A redesign of my personal portfolio to reflect a modern, minimalist aesthetic. The goal was to create a clean, user-friendly experience that showcases my skills and projects effectively.",
    image: "/images/project1.png",
    liveUrl: "https://my-portfolio-alpha-five-45.vercel.app/",
    githubUrl: "https://github.com/shazzad098/my-portfolio",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    title: "Ramadan Reminder",
    description: "An interactive countdown website for Ramadan, designed to be both beautiful and functional. Built with React, it features a clean UI and real-time updates.",
    image: "/images/ramadan_reminder.png",
    liveUrl: "https://ramandan-reminder.vercel.app/",
    githubUrl: "https://github.com/shazzad098/ramandan_reminder",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
  },
];

export default function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    staggerAnimateOnScroll(
      "#projects",
      ".project-card",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      0.2
    );
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
            A selection of my work, showcasing my skills in creating modern and
            user-friendly web applications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-light-surface dark:bg-dark-surface rounded-lg overflow-hidden project-card"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2">
                  {project.title}
                </h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-light-accent bg-opacity-10 text-light-accent dark:bg-dark-accent dark:bg-opacity-10 dark:text-dark-accent text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                  >
                    <FiGithub /> Code
                  </Link>
                  {project.liveUrl !== "#" && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                    >
                      <FiArrowUpRight /> Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}