// app/components/Projects.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the first project, highlighting the technologies used.',
    image: '/images/project1.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12 font-heading">Projects</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image src={project.image} alt={project.title} width={600} height={400} className="w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <Link href={project.liveUrl} target="_blank" className="flex items-center gap-2 hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                  <ExternalLink size={20} /> Live Demo
                </Link>
                <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2 hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                  <Github size={20} /> GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}