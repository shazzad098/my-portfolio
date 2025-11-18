// src/app/components/Contact.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { animateOnScroll } from "../animations";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    animateOnScroll(
      "#contact",
      ".contact-element",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-light-surface dark:bg-dark-surface">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 contact-element">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 contact-element">
            I&apos;m currently available for freelance work and new
            opportunities. If you have a project in mind or just want to say
            hello, feel free to reach out.
          </p>
          <div className="max-w-xl mx-auto contact-element">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-white dark:bg-dark-surface border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-accent"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-white dark:bg-dark-surface border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-accent"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-white dark:bg-dark-surface border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-accent"
              ></textarea>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-light-accent text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Message"} <FiSend />
              </button>
            </form>
            {isSubmitted && (
              <p className="mt-4 text-green-500">
                Thank you for your message! I&apos;ll get back to you soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}