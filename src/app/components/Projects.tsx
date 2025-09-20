// app/components/Projects.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features dark mode, smooth animations, and a contact form.',
    image: '/images/project1.png',
    liveUrl: '#', // Replace with your portfolio live URL
    githubUrl: 'https://github.com/shazzad098/my-portfolio',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with product catalog, shopping cart, user authentication, and payment integration. Built with modern web technologies.',
    image: '/images/project2.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/shazzad098/unimart',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/images/project3.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/shazzad098/task-manager',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux']
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features responsive design and offline capability.',
    image: '/images/project4.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/shazzad098/Weather-App',
    technologies: ['JavaScript', 'API Integration', 'CSS3', 'Local Storage']
  },
  {
    title: 'Blog CMS',
    description: 'Content management system for bloggers with rich text editing, category management, SEO optimization, and social media integration.',
    image: '/images/project5.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/shazzad098/blog-cms',
    technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Vercel']
  },
  {
    title: 'Recipe Finder App',
    description: 'Interactive recipe application with search functionality, dietary filters, favorite recipes, and meal planning features. Includes nutritional information.',
    image: '/images/project6.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/shazzad098/Recipe-Hub',
    technologies: ['React', 'Spoonacular API', 'Context API', 'CSS Modules']
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-12 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400} 
                  height={250} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-slate-700">
                  <Link 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium group-hover/link:underline">Code</span>
                  </Link>
                  
                  {project.liveUrl !== '#' && (
                    <Link 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium group-hover/link:underline">Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            href="https://github.com/shazzad098" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-slate-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-slate-600 transition-colors duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
}