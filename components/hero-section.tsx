"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  const name = "Yuthitha"
  const role = "Full Stack Developer"

  // ✅ Scroll to Resume
  const handleScrollToResume = () => {
    const section = document.getElementById("resume")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // ✅ Scroll to Contact
  const handleScrollToContact = () => {
    const section = document.getElementById("contact")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#252542] pt-32 md:pt-36 lg:pt-40"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#E5E7EB]/70 text-lg italic mb-4">
              Hi There,
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F8FAFC]">
              I am{" "}
              <span className="inline-block">
                {name.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      textShadow: [
                        "0 0 4px #fff",
                        "0 0 12px #38BDF8",
                        "0 0 4px #fff",
                      ],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F8FAFC] whitespace-nowrap mt-2">
              {role}
            </h2>

            <p className="text-[#E5E7EB]/70 text-lg mt-6 leading-relaxed max-w-2xl">
              My passion for designing seamless user experiences, writing clean code,
              and building interactive web applications drives my journey as a Full
              Stack MERN Developer.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-8">
              {/* ✅ CONNECT ME (FIXED) */}
              <button
                onClick={handleScrollToContact}
                className="
                  px-6 py-3 
                  border border-white/40 
                  text-white 
                  rounded-lg 
                  transition-all duration-300
                  hover:bg-white/10
                  active:scale-95
                "
              >
                Connect Me
              </button>

              {/* ✅ DOWNLOAD CV */}
              <button
                onClick={handleScrollToResume}
                className="
                  px-6 py-3 
                  border border-[#E5E7EB]/40 
                  text-white 
                  rounded-lg
                  transition-all duration-300
                  hover:bg-white hover:text-[#1a1a2e]
                  active:bg-white active:text-[#1a1a2e] active:scale-95
                "
              >
                Download CV
              </button>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-center lg:-translate-x-10 lg:translate-y-10"
          >
            <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px]">
              <div className="absolute inset-0 bg-[#F87171] rounded-full" />
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  width={360}
                  height={360}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* SCROLLING TEXT */}
      <motion.div className="relative mt-10 overflow-hidden py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white/10 mx-10"
            >
              I am a Full Stack Developer
              <span className="mx-10 text-emerald-400/30">✦</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
