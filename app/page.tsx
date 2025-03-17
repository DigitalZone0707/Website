"use client"

import { useEffect } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Community } from "@/components/sections/community"
import { Testimonials } from "@/components/sections/testimonials"
import { Join } from "@/components/sections/join"
import { FloatingContact } from "@/components/floating-contact"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Community />
        <Testimonials />
        <Join />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}

