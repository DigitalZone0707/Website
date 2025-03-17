"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Github, Code, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "projects",
        "community",
        "testimonials",
        "faq",
        "join",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Community", href: "/#community" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg">
              <Image
                src="/logo.svg"
                alt="TechThrives Logo"
                width={48}
                height={48}
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#FF416C] to-[#E48633] bg-clip-text text-transparent animate-text-shimmer">
              TechThrives
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#FF416C] ${
                  activeSection === item.href.substring(1)
                    ? "text-[#FF416C]"
                    : "text-gray-800 dark:text-gray-300"
                }`}
                onClick={closeMobileMenu}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <a
              href="https://github.com/techthrives"
              target="_blank"
              className="hidden md:flex items-center space-x-1 bg-gradient-to-r from-[#FF416C] to-[#E48633] p-2 rounded-full font-medium text-sm text-white dark:text-slate-800 hover:opacity-90 transition-opacity"
            >
              <Github className="h-5 w-5" />
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full h-screen flex justify-center inset-0 z-50 bg-slate-100 dark:bg-slate-900/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-xl text-slate-800 dark:text-slate-300 font-medium transition-colors hover:text-[#FF416C] ${
                  activeSection === item.href.substring(1)
                    ? "text-[#FF416C]"
                    : "text-gray-300"
                }`}
                onClick={closeMobileMenu}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/#join"
              className="flex items-center space-x-2 bg-gradient-to-r from-[#FF416C] to-[#E48633] px-6 py-3 rounded-lg font-medium text-base text-white dark:text-slate-800 hover:opacity-90 transition-opacity mt-4"
              onClick={closeMobileMenu}
            >
              <span>Join Now</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
