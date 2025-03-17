"use client"

import type { ReactNode } from "react"
import Link from "next/link"

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  external?: boolean
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  external = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all rounded-lg"

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#FF416C] to-[#E48633] text-white hover:opacity-90",
    secondary: "bg-slate-800 dark:bg-slate-700 text-white hover:bg-slate-700 dark:hover:bg-slate-600",
    outline: "border border-slate-700 dark:border-slate-600 bg-transparent hover:bg-slate-800 dark:hover:bg-slate-700",
  }

  const sizeStyles = {
    sm: "text-sm px-4 py-2 space-x-1",
    md: "px-6 py-3 space-x-2",
    lg: "text-lg px-8 py-4 space-x-2",
  }

  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} className={styles} target="_blank" rel="noopener noreferrer" onClick={onClick}>
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={styles} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  )
}

