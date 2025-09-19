// src/app/components/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Image from 'next/image';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { 
        duration: 1, 
        ease: "easeOut",
        scale: { duration: 1.2, ease: "backOut" }
      }
    }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center py-16 md:py-0 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Text Content Div */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        className="md:w-1/2 mb-12 md:mb-0 md:pr-8"
      >
        <motion.div
          variants={textVariants}
          className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
          Available for new opportunities
        </motion.div>
        
        <motion.h1 
          variants={textVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="text-gray-800 dark:text-white">Hi, I'm </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Shazzad Haque Prince
          </span>
        </motion.h1>
        
        <motion.div variants={textVariants} className="mb-8">
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4">
            Full Stack Web Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
            I create modern, responsive, and user-friendly web applications with cutting-edge technologies.
          </p>
        </motion.div>
        
        <motion.div 
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          <Link 
            href="#projects" 
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-cyan-600"
          >
            View My Work <FiArrowRight className="text-lg" />
          </Link>
          <a 
            href="/cv.pdf" 
            download 
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Download CV <FiDownload className="text-lg" />
          </a>
        </motion.div>
        
        <motion.div 
          variants={textVariants}
          className="flex items-center gap-4"
        >
          <span className="text-gray-600 dark:text-gray-400">Follow me:</span>
          <div className="flex gap-3">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub className="text-xl" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-xl" />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Email"
            >
              <FiMail className="text-xl" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Profile Picture Div */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        className="md:w-1/2 relative flex justify-center items-center"
      >
        <motion.div
          animate={floatingAnimation}
          className="relative"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
            <Image
              src="/images/profile.jpg"
              alt="Shazzad Haque Prince"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-20 blur-xl z-0"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-20 blur-xl z-0"></div>
        </motion.div>
        
        {/* Floating tech badges */}
        <motion.div 
          className="absolute top-10 -left-4 md:left-4 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm border border-blue-500/30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <SiReact className="text-blue-500 text-xl" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 -right-4 md:right-4 w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center backdrop-blur-sm border border-cyan-400/30"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <SiNextdotjs className="text-black dark:text-white text-xl" />
        </motion.div>

        <motion.div 
          className="absolute top-1/2 -left-8 w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center backdrop-blur-sm border border-yellow-400/30"
          animate={{
            x: [0, -10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <SiJavascript className="text-yellow-400 text-xl" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-sm mb-2">Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowRight className="text-xl transform rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Import additional icons (add to your existing imports)
import { SiReact, SiNextdotjs, SiJavascript } from "react-icons/si";