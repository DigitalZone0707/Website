"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Typewriter } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Where{" "}
                <span className="bg-gradient-to-r from-[#FF416C] to-[#E48633] bg-clip-text text-transparent animate-text-shimmer">
                  Innovation
                </span>{" "}
                Meets Technology
              </h1>
              <p className="text-lg text-gray-800 dark:text-gray-300 mb-8 max-w-lg">
                <Typewriter
                  text="A collaborative GitHub organization for developing, sharing, and improving projects that make a difference."
                  speed={30}
                  delay={1000}
                />
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button href="#projects" variant="primary" size="md">
                  <span className="group-hover:animate-text-shimmer bg-gradient-to-r from-white to-gray-300 bg-clip-text group-hover:text-transparent">
                    Explore Projects
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover:animate-pulse-slow" />
                </Button>
                <Button href="#about" variant="secondary" size="md">
                  <span>Learn More</span>
                  <ChevronDown className="h-4 w-4 animate-bounce" />
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 relative animate-float">
            <div className="relative w-full h-64 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF416C]/20 to-[#E48633]/20 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/hero.jpg"
                  alt="Tech Collaboration"
                  width={500}
                  height={400}
                  className="rounded-xl"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-[#FF416C] to-[#E48633] p-4 rounded-xl shadow-xl animate-pulse-slow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
