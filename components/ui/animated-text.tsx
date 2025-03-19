"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export const AnimatedWords: React.FC<AnimatedTextProps> = ({ text, className = "", once = true }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    if (!once) {
      const interval = setInterval(() => {
        setIsVisible(false)
        setTimeout(() => setIsVisible(true), 100)
      }, 7000)

      return () => clearInterval(interval)
    }
  }, [once])

  return (
    <span className={className}>
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className="text-animate-character"
          style={{
            animationName: isVisible ? "fadeInStagger" : "none",
            animationDelay: `${index * 0.05}s`,
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  )
}

interface TypewriterProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, className = "", speed = 100, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, isTyping, speed, text])

  return (
    <span className={`${className} inline-block`}>
      {displayText}
      {currentIndex < text.length && <span className="border-r-2 border-current animate-pulse ml-1">&nbsp;</span>}
    </span>
  )
}

interface GradientTextProps {
  text: string
  className?: string
  from?: string
  to?: string
  animate?: boolean
}

export const GradientText: React.FC<GradientTextProps> = ({
  text,
  className = "",
  from = "[#FF416C]",
  to = "[#E48633]",
  animate = true,
}) => {
  return (
    <span
      className={`bg-gradient-to-r from-${from} to-${to} bg-clip-text text-transparent ${animate ? "animate-text-shimmer" : ""} ${className}`}
    >
      {text}
    </span>
  )
}

