"use client"

import { useState, type ReactNode } from "react"
import { ChevronDown } from "lucide-react"

interface AccordionItemProps {
  title: string
  children: ReactNode
  isOpen?: boolean
  onToggle?: () => void
}

export function AccordionItem({ title, children, isOpen = false, onToggle }: AccordionItemProps) {
  const [isExpanded, setIsExpanded] = useState(isOpen)

  const handleToggle = () => {
    if (onToggle) {
      onToggle()
    } else {
      setIsExpanded(!isExpanded)
    }
  }

  const expanded = onToggle ? isOpen : isExpanded

  return (
    <div className="border-b border-slate-200 dark:border-slate-700 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 px-2 text-left focus:outline-none"
        onClick={handleToggle}
      >
        <h3 className="text-lg font-medium text-slate-800 dark:text-white">{title}</h3>
        <ChevronDown
          className={`h-5 w-5 text-[#FF416C] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 px-2 text-gray-700 dark:text-gray-300">{children}</div>
      </div>
    </div>
  )
}

interface AccordionProps {
  children: ReactNode
  className?: string
}

export function Accordion({ children, className = "" }: AccordionProps) {
  return (
    <div
      className={`rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 ${className}`}
    >
      {children}
    </div>
  )
}

