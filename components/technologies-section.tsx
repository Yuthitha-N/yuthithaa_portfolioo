"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

/* ---------------- TECHNOLOGIES DATA ---------------- */

const technologies = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#F89820" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "#A8B9CC" },

  // ✅ Node.js added
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },

  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#10B981" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#ffffff" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
]

/* ---------------- COMPONENT ---------------- */

export default function TechnologiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="technologies" className="py-20 bg-[#1a1a2e] overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 CONTINUOUS FAST MARQUEE HEADING */}
        <div className="relative mb-20 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(2)].map((_, i) => (
              <span
                key={i}
                className="text-6xl md:text-7xl font-bold text-white/10 mx-12"
              >
                My Technologies ✦ My Technologies ✦ My Technologies ✦
              </span>
            ))}
          </motion.div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{
                y: -14,
                scale: 1.1,
                rotate: 1,
              }}
              className="
                relative group rounded-2xl h-32 flex items-center justify-center
                cursor-pointer bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:border-emerald-400/50
                hover:shadow-[0_0_40px_rgba(16,185,129,0.45)]
                transition-all duration-500 overflow-hidden
              "
            >
              {/* Neon Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${tech.color}30, transparent 70%)`,
                }}
              />

              <Image
                src={tech.icon}
                alt="technology"
                width={56}
                height={56}
                className="relative z-10 object-contain transition-transform duration-300 group-hover:scale-125"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
