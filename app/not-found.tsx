"use client";
import { Button } from "@/components/ui/button";
import {  HomeIcon } from "lucide-react";
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
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white px-4">
      <h1 className="text-6xl md:text-8xl font-bold tracking-wide">404</h1>
      <p className="text-md md:text-xl font-medium mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button className="mt-4" href="/" variant="secondary" size="md">
        <HomeIcon className="h-4 w-4" />
        <span>Back to Home</span>
      </Button>
    </div>
  );
}
