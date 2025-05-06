"use client";

import { motion } from "motion/react";
import { ImageCard } from "@/components/ui/cards";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center lg:text-start lg:px-12 lg:flex-row" id="home">
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-3xl font-bold text-slate-700 md:text-4xl lg:text-6xl dark:text-slate-300">
          {"Where Innovation Meets Technology".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 max-w-xl py-4 text-md font-normal text-neutral-600 dark:text-neutral-400"
        >
          A collaborative GitHub organization for developing, sharing, and improving projects that make a difference.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
        >
          <Button
            className="transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer"
            asChild
          >
            <Link href="#community">Join Community</Link>
          </Button>
          <Button className="transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 cursor-pointer">
            <Link href="#projects">View Projects</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 1,
        }}
      >
        <ImageCard />
      </motion.div>
    </div>
  );
}
