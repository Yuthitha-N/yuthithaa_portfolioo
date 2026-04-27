"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
  { name: "Tools", href: "#tools" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map((i) => i.href.slice(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false) // ✅ CLOSE MENU
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl transition-all ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <motion.button
          onClick={() => scrollToSection("#home")}
          className="text-2xl font-bold text-emerald-400"
          whileHover={{ scale: 1.05 }}
        >
          Yuthitha
        </motion.button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                activeSection === item.href.slice(1)
                  ? "text-emerald-400 bg-emerald-400/10"
                  : "text-white hover:text-emerald-400 hover:bg-white/5"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white z-[60]"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeWidth={2} strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth={2} strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 🔥 MOBILE DROPDOWN (FIXED) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="
              absolute top-16 left-0 right-0
              bg-[#1a1a2e]
              z-[55]
              pointer-events-auto
              border-t border-white/10
            "
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium ${
                    activeSection === item.href.slice(1)
                      ? "text-emerald-400 bg-emerald-400/10"
                      : "text-white hover:text-emerald-400 hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
