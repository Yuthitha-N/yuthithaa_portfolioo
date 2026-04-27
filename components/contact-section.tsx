"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react"

export default function ContactSection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // ✅ SUBMIT HANDLER (CONNECTED TO BACKEND)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Use relative path if no env var, otherwise use full URL for dev
      const apiEndpoint = process.env.NEXT_PUBLIC_API_URL 
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact`
        : "/api/contact"
      
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message")
      }

      // ✅ SAVE TOKEN (OPTIONAL – FUTURE USE)
      if (data.token) {
        localStorage.setItem("contact_token", data.token)
        console.log("JWT Token saved:", data.token)
      }

      alert("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    } catch (error: any) {
      alert(error.message || "Backend not reachable")
      console.error("Contact error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "yuthitha2106@gmail.com",
      href: "mailto:yuthitha2106@gmail.com",
    },
    {
      icon: Phone,
      label: "Contact",
      value: "9944919579",
      href: "tel:9944919579",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yuthitha-nepoliyan-9b20b1321",
      href: "https://www.linkedin.com/in/yuthitha-nepoliyan-9b20b1321/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Yuthitha-N",
      href: "https://github.com/Yuthitha-N",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-[#1a1a2e]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-white/60">
            Have a project in mind? Let’s work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* LEFT INFO */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Connect with me</h3>

            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-emerald-400/40 transition"
              >
                <item.icon className="text-emerald-400" />
                <div>
                  <p className="text-sm text-white/60">{item.label}</p>
                  <p className="text-white">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6"
          >
            <input
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white outline-none"
            />

            <input
              placeholder="Email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white outline-none"
            />

            <textarea
              placeholder="Message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white outline-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-emerald-400 text-black font-semibold py-3 rounded-lg disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : <>Send Message <Send size={18} /></>}
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}
