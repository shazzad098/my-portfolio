// src/app/animations.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (trigger: string, element: string, from: gsap.TweenVars, to: gsap.TweenVars) => {
  gsap.fromTo(
    element,
    { ...from },
    {
      ...to,
      scrollTrigger: {
        trigger,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const staggerAnimateOnScroll = (trigger: string, element: string, from: gsap.TweenVars, to: gsap.TweenVars, stagger: number) => {
  gsap.fromTo(
    element,
    { ...from },
    {
      ...to,
      stagger,
      scrollTrigger: {
        trigger,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
};