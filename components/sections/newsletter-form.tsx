"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus("error")
      setMessage("Please enter your email address")
      return
    }

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setMessage("Thank you for subscribing!")
      setEmail("")

      // Reset after 3 seconds
      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 3000)
    }, 1000)
  }

  return (
    <div className="w-full max-w-md">
      <h4 className="text-sm font-semibold mb-2 text-slate-800 dark:text-white">Stay Updated</h4>
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-l-md bg-slate-200 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 text-white placeholder-gray-800 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF416C] focus:border-transparent"
            disabled={status === "loading"}
          />
          {status !== "idle" && (
            <div
              className={`absolute -bottom-6 left-0 text-xs ${status === "error" ? "text-red-400" : "text-green-400"}`}
            >
              {message}
            </div>
          )}
        </div>
        <button
          type="submit"
          className={`px-4 py-[11px] rounded-r-md bg-gradient-to-r from-[#FF416C] to-[#E48633] text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#FF416C] focus:ring-offset-2 ${
            status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
          }`}
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <Send className="h-5 w-5" />
          )}
        </button>
      </form>
    </div>
  )
}

