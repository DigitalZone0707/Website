"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/card";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      quote:
        "Tech Thrives gave me my first real experience with contributions. The projects are well-organized, and the community is always ready to help.",
      author: "Aditya Patil",
      role: "Frontend Developer (Fresher)",
      company: "TechCorp",
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
    {
      quote:
        "Being part of Tech Thrives has been an amazing journey! I got to work on real-world projects and improve my coding skills with great experince.",
      author: "Priya Deshmukh",
      role: "Full Stack Developer (Fresher)",
      company: "InnovateTech",
      avatar: "https://avatar.iran.liara.run/public/girl",
    },
    {
      quote:
        "Contributing to Tech Thrives introduced me to cloud computing and CI/CD pipelines. I’ve gained hands-on experience with DevOps tools and automation.",
      author: "Rohan Kulkarni",
      role: "DevOps Engineer (Fresher)",
      company: "CloudSystems",
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What People"
          highlight="Say"
          description="Hear from our community members about their experiences with Tech Thrives."
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                    avatar={testimonial.avatar}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#FF416C]" : "bg-slate-600"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="hidden md:inline-block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-slate-800 dark:bg-slate-700 p-2 rounded-full text-white hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="hidden md:inline-block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-slate-800 dark:bg-slate-700 p-2 rounded-full text-white hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
