import type { ReactNode } from "react"

interface SectionHeadingProps {
  title: string
  highlight?: string
  description?: string
  className?: string
  highlightClassName?: string
  children?: ReactNode
}

export function SectionHeading({
  title,
  highlight,
  description,
  className = "",
  highlightClassName = "animate-text-wave",
  children,
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-16 animate-fade-in ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title} {highlight && <span className={highlightClassName}>{highlight}</span>}
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-[#FF416C] to-[#E48633] mx-auto"></div>
      {description && <p className="mt-6 text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">{description}</p>}
      {children}
    </div>
  )
}

