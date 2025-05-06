"use client";
import MainNavbar from "@/components/sections/Navbar";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TextGenerateEffect } from "@/components/ui/text-effects";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="flex h-screen max-w-7xl flex-col items-center justify-center">
      <MainNavbar />

      <div className="flex flex-col h-full items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-wide">404</h1>
        <TextGenerateEffect
          className="text-md md:text-xl font-medium"
          words="Oops! The page you're looking for doesn't exist."
        />
        <HoverBorderGradient>
          <Link className="flex gap-2" href="/">
            <HomeIcon />
            <span>Back to Home</span>
          </Link>
        </HoverBorderGradient>
      </div>
    </div>
  );
}
