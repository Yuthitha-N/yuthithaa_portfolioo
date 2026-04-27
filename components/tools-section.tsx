"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

/* 🔧 UPDATED TOOLS LIST */
const tools = [
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
]

export default function ToolsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tools" className="py-20 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Tools I <span className="text-emerald-400">Use</span>
          </h2>
          <p className="text-[#E5E7EB]/70 max-w-2xl mx-auto">
            Software and tools that power my development workflow
          </p>
        </motion.div>

        {/* Infinite Scroll */}
        <div className="overflow-hidden relative">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-6"
          >
            {[...tools, ...tools, ...tools].map((tool, index) => (
              <motion.div
                key={`${tool.name}-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-2xl rounded-xl border border-white/10 hover:border-emerald-400/30 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-8 h-8 relative">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform invert"
                  />
                </div>
                <span className="text-[#F8FAFC] font-semibold whitespace-nowrap">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
