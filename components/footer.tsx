"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/Yuthitha-N", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/yuthitha-nepoliyan-9b20b1321/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:yuthitha2106@gmail.com", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-t from-[#0f0f1a] to-[#1a1a2e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3">
            <span className="text-xl font-bold text-emerald-400">Yuthitha</span>
            <span className="text-[#E5E7EB]/30">|</span>
            <span className="text-[#E5E7EB]/60 text-sm">Full Stack Developer</span>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-emerald-400/50 hover:bg-emerald-400/10 transition-all"
              >
                <link.icon className="w-4 h-4 text-[#E5E7EB]/70" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[#E5E7EB]/40 text-sm">
  Built with ❤️ by Yuthitha
</p>
        </div>
      </div>
    </footer>
  )
}
