"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Download, Eye } from "lucide-react"

export default function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="resume" className="py-20 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            My <span className="text-emerald-400">Resume</span>
          </h2>
          <p className="text-[#E5E7EB]/70 max-w-2xl mx-auto">Download my resume to learn more about my experience</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Animated border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 rounded-2xl blur-lg opacity-30 animate-pulse" />

            <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                  <FileText className="w-12 h-12 text-[#1a1a2e]" />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">Yuthitha</h3>
                  <p className="text-emerald-400 font-medium mb-2">MERN Stack Developer</p>
                  <p className="text-[#E5E7EB]/70 text-sm">
                    Full-stack developer with expertise in building scalable web applications using MongoDB, Express.js,
                    React, and Node.js.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <motion.a
                    href="\yuthitha (1).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(52, 211, 153, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-emerald-400 text-[#1a1a2e] font-semibold rounded-xl hover:bg-emerald-400/90 transition-all"
                  >
                    <Eye className="w-5 h-5" />
                    View Resume
                  </motion.a>
                  <motion.a
                    href="\yuthitha (1).pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 border border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400/10 transition-all"
                  >
                    <Download className="w-5 h-5" />
                    Download
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
