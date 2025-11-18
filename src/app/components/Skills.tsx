// src/app/components/Skills.tsx
"use client";
import { useEffect, useRef } from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiPython, SiCplusplus, SiGithub, SiFigma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { staggerAnimateOnScroll } from "../animations";

const skills = [
  { name: "HTML5", icon: <SiHtml5 size={32} /> },
  { name: "CSS3", icon: <SiCss3 size={32} /> },
  { name: "JavaScript", icon: <SiJavascript size={32} /> },
  { name: "React", icon: <SiReact size={32} /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
  { name: "Node.js", icon: <SiNodedotjs size={32} /> },
  { name: "MongoDB", icon: <SiMongodb size={32} /> },
  { name: "Python", icon: <SiPython size={32} /> },
  { name: "Java", icon: <FaJava size={32} /> },
  { name: "C++", icon: <SiCplusplus size={32} /> },
  { name: "GitHub", icon: <SiGithub size={32} /> },
  { name: "Figma", icon: <SiFigma size={32} /> },
];

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    staggerAnimateOnScroll(
      "#skills",
      ".skill-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      0.1
    );
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
            My proficiency in the latest web technologies allows me to build
            innovative and efficient solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-light-surface dark:bg-dark-surface rounded-lg skill-item"
            >
              {skill.icon}
              <p className="mt-2 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}