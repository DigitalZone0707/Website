import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { GradientText } from "@/components/ui/animated-text";
import { NewsletterForm } from "@/components/sections/newsletter-form";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.svg"
                alt="TechThrives Logo"
                width={42}
                height={42}
              />
              <span className="text-xl font-bold bg-gradient-to-r from-[#FF416C] to-[#E48633] bg-clip-text text-transparent animate-text-shimmer">
                TechThrives
              </span>
            </div>
            <p className="text-gray-800 dark:text-gray-400 mb-4">
              A collaborative GitHub organization where innovation meets
              technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-slate-800 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-slate-800 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-slate-800 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-slate-800 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 text-gray-800 dark:text-gray-400 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                <GradientText
                  text="Resources"
                  animate={false}
                  className="hover:animate-text-shimmer"
                />
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF416C] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="hover:text-[#FF416C] transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                <GradientText
                  text="Community"
                  animate={false}
                  className="hover:animate-text-shimmer"
                />
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF416C] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF416C] transition-colors"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                <GradientText
                  text="Legal"
                  animate={false}
                  className="hover:animate-text-shimmer"
                />
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-[#FF416C] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-and-conditions"
                    className="hover:text-[#FF416C] transition-colors"
                  >
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-800 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Tech Thrives. All rights
                reserved.
              </p>
            </div>
            <div className="mx-auto md:ml-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
