// src/app/components/About.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-12 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="lg:w-2/5 relative flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative">
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl z-10">
                <Image
                  src="/images/profile1.jpg"
                  alt="Shazzad Haque Prince"
                  fill
                  sizes="16rem" // because the container is w-64 (16rem) at all breakpoints
                  className="object-cover"
                />
              </div>
              {/* Decorative frame elements - now more visible with smaller image */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-blue-500/40 rounded-2xl z-0"></div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-cyan-400/40 rounded-2xl z-0"></div>
            </div>

            {/* Floating badges - adjusted position for smaller image */}
            <motion.div
              className="absolute -top-3 -right-3 bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg border border-gray-200 dark:border-slate-700"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className="text-xs font-medium bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                2+ Years
              </span>
            </motion.div>

            <motion.div
              className="absolute -bottom-3 -left-3 bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg border border-gray-200 dark:border-slate-700"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <span className="text-xs font-medium bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                10+ Projects
              </span>
            </motion.div>
          </motion.div>

          {/* About Me Text Section */}
          <motion.div
            className="lg:w-3/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3
              className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white"
              variants={itemVariants}
            >
              Crafting Digital Experiences That Matter
            </motion.h3>

            <motion.p
              className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              Hello! I&apos;m{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Shazzad Haque Prince
              </span>
              , a passionate and detail-oriented Web Developer with expertise in
              creating intuitive, dynamic, and user-friendly web experiences.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              My expertise lies in full-stack development, where I leverage
              modern technologies like{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">
                React
              </span>
              ,{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">
                Next.js
              </span>
              ,{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">
                Tailwind CSS
              </span>
              , and{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">
                Node.js
              </span>{" "}
              to build high-performance, responsive applications from concept to
              deployment.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed mb-8 text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              I thrive on turning complex problems into elegant, efficient
              solutions and believe in continuous learning to stay ahead in the
              ever-evolving landscape of web technology. I&apos;m currently
              seeking new opportunities to apply my skills in challenging and
              collaborative environments.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-cyan-600"
              >
                <FiDownload className="text-lg" />
                Download CV
              </a>

              <a
                href="#contact"
                className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills highlight */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { label: "Frontend Development", icon: "💻" },
            { label: "Responsive Design", icon: "📱" },
            { label: "Problem Solving", icon: "🧩" },
            { label: "Continuous Learning", icon: "📚" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md text-center border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="font-medium text-gray-800 dark:text-white text-sm">
                {item.label}
              </h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
