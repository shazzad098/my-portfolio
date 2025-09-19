// src/app/components/Skills.tsx

'use client';

import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiPython, SiCplusplus, SiGithub, SiFigma,
} from "react-icons/si";
import { FaJava, FaMicrosoft, FaGoogle } from "react-icons/fa6";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: 'HTML5', icon: <SiHtml5 className="w-8 h-8 text-orange-500" />, proficiency: 90 },
      { name: 'CSS3', icon: <SiCss3 className="w-8 h-8 text-blue-500" />, proficiency: 85 },
      { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8 text-yellow-400" />, proficiency: 88 },
      { name: 'React', icon: <SiReact className="w-8 h-8 text-blue-400" />, proficiency: 85 },
      { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />, proficiency: 80 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" />, proficiency: 90 },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs className="w-8 h-8 text-green-500" />, proficiency: 75 },
      { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8 text-green-600" />, proficiency: 70 },
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      { name: 'Python', icon: <SiPython className="w-8 h-8 text-blue-800" />, proficiency: 85 },
      { name: 'Java', icon: <FaJava className="w-8 h-8 text-red-500" />, proficiency: 80 },
      { name: 'C++', icon: <SiCplusplus className="w-8 h-8 text-blue-600" />, proficiency: 75 },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: 'Git & GitHub', icon: <SiGithub className="w-8 h-8 text-black dark:text-white" />, proficiency: 85 },
      { name: 'Figma', icon: <SiFigma className="w-8 h-8 text-pink-500" />, proficiency: 75 },
    ]
  },
  {
    title: "Productivity Suites",
    skills: [
      { name: 'MS Office Suite', icon: <FaMicrosoft className="w-8 h-8 text-red-600" />, proficiency: 90 },
      { name: 'Google Workspace', icon: <FaGoogle className="w-8 h-8 text-yellow-500" />, proficiency: 95 },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.2
    }
  }
};

const progressBarVariants = {
  hidden: { width: 0 },
  visible: (proficiency: number) => ({
    width: `${proficiency}%`,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeOut"
    }
  })
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Expertise
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are the technologies and tools I work with to create innovative solutions and deliver exceptional results.
        </motion.p>

        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700"
              variants={categoryVariants}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-700">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-slate-700 rounded-lg group cursor-pointer"
                    variants={skillVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    <div className="mb-3 transform group-hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <h4 className="text-sm font-medium text-center text-gray-800 dark:text-white mb-2">
                      {skill.name}
                    </h4>
                    
                    {/* Proficiency bar */}
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden mt-1">
                      <motion.div 
                        className="h-full bg-blue-500 rounded-full"
                        variants={progressBarVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={skill.proficiency}
                      />
                    </div>
                    
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {skill.proficiency}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}