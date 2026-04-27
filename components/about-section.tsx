"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Users, Heart, Shuffle } from "lucide-react"

const highlights = [
  {
    icon: Shuffle,
    title: "Adaptability",
    description: "Quickly learning new technologies and adjusting to changing project needs",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Analyzing challenges carefully and building clear, practical solutions",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Working effectively with others through communication and collaboration",
  },
  {
    icon: Heart,
    title: "Passionate",
    description: "Strong enthusiasm for learning, building, and growing as a developer",
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 uppercase tracking-widest mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#F8FAFC] mb-6 leading-tight">
            Uncovering the Layers <br /> of My Story
          </h2>

          {/* ⬇️ SINGLE PARAGRAPH + CENTERED END */}
          <p className="text-[#E5E7EB] font-normal text-lg max-w-19xl mx-auto leading-relaxed">
            I am an aspiring full-stack developer with a strong interest in understanding how modern web
            applications are designed, built, and maintained. My journey into technology began with a
            curiosity for problem-solving and gradually evolved into a passion for creating complete
            digital solutions that combine functionality, structure, and user-friendly design. As a
            fresher, I focus on building a strong foundation through continuous learning, experimentation,
            and hands-on projects, treating every challenge as an opportunity to grow and refine my skills
            while transforming ideas into meaningful applications that reflect and
            consistency
   
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 text-center hover:border-emerald-400/30 transition-all"
            >
              <div className="w-14 h-14 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-emerald-400" />
              </div>

              <h3 className="text-[#F8FAFC] font-semibold text-sm mb-2">
                {item.title}
              </h3>

              <p className="text-[#E5E7EB]/60 text-xs leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
