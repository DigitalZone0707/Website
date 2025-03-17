"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })

      // Reset after 3 seconds
      setTimeout(() => {
        setStatus("idle")
        setIsOpen(false)
      }, 3000)
    }, 1000)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-[#FF416C] to-[#E48633] text-white shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Contact us"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-slate-100 dark:bg-slate-900 rounded-xl shadow-xl w-full max-w-md p-6 relative animate-fade-in-up">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#FF416C] to-[#E48633] bg-clip-text text-transparent">
              Get in Touch
            </h3>

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                  <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Message Sent!</h4>
                <p className="text-gray-800 dark:text-gray-400">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-slate-300 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-gray-800 dark:text-white placeholder-gray-700 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF416C] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-slate-300 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-gray-800 dark:text-white placeholder-gray-700 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF416C] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-slate-300 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-gray-800 dark:text-white placeholder-gray-700 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF416C] focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-2 rounded-md bg-gradient-to-r from-[#FF416C] to-[#E48633] text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#FF416C] focus:ring-offset-2 ${
                    status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                  }`}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

