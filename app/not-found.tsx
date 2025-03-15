"use client";
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
      <a href="/" className="text-md md:text-lg font-medium mt-4 bg-[#1d4ed8] text-white px-4 py-2 rounded">
        <span>Back to Home</span>
      </a>
    </div>
  );
}
