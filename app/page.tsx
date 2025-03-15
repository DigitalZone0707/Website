"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let today = new Date(),
      yyyy = today.getFullYear(),
      dayMonth = "04/01/",
      birthday = new Date(dayMonth + yyyy);

    if (today > birthday) {
      birthday = new Date(dayMonth + (yyyy + 1));
    }

    const countDown = birthday.getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime(),
        distance = countDown - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / day),
        hours: Math.floor((distance % day) / hour),
        minutes: Math.floor((distance % hour) / minute),
        seconds: Math.floor((distance % minute) / second),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-body bg-black text-white tracking-wide">
      <section className="h-screen flex items-center justify-center py-32 relative">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/coming-soon.jpeg"
          alt="Coming Soon"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center">
          <h2 className="md:text-5xl text-5xl font-bold">
            Launching Soon...⚡
          </h2>

          <div id="countdown" className="my-10">
            <div className="flex flex-wrap justify-center gap-5">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="sm:h-40 sm:w-40 h-24 w-24 flex flex-col items-center justify-center bg-white/20 backdrop-blur-lg rounded-3xl p-4"
                >
                  <span className="text-3xl md:text-6xl font-semibold">
                    {value}
                  </span>
                  <p className="text-xs tracking-widest mt-2 uppercase">
                    {unit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex items-center justify-center mt-7">
            <div className="flex flex-nowrap shadow-lg w-full max-w-md">
              <input
                type="email"
                name="email"
                className="w-full px-3 py-3 backdrop-blur-lg focus:outline-none text-sm bg-gray-500/50 placeholder-gray-300 flex-1"
                placeholder="Enter your email..."
                autoComplete="off"
              />
              <button className="py-3 px-6 bg-blue-500 hover:bg-blue-600 transition-all duration-500 font-semibold text-sm uppercase whitespace-nowrap">
                Notify me!
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-white/80 md:text-md text-sm">
              Initializing Tech Thrives... ⏳
              <br />
              🚀 The future of collaboration is compiling. Stay tuned!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
