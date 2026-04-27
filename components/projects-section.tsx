"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, X, Sparkles } from "lucide-react"

/* ---------------- PROJECT DATA ---------------- */

const projects = [
  {
    title: "AI-Powered Recipe Generator ",
    description: "AI-powered recipe generator with ingredient-based search and dietary filters.",
    fullDescription:"Built an AI-driven recipe system enabling ingredient-based search and dietary filtering Integrated OpenAI API for intelligent recipe generation with a responsive, user-friendly interface",
    image: "/recepi.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "https://chefora-app-0b9v.onrender.com",
    github: "https://github.com/Yuthitha-N/chefora-main.git",
  },
  {
    title: "Course Instructor Feedback System (MERN Stack) ",
    description: "A web-based instructor feedback platform enabling secure student reviews, scalable storage, and insightful rating analytics.",
    fullDescription:
      "A web platform that allows students to submit instructor feedback with secure login, scalable MongoDB storage, and an interactive ratings dashboard.",
    image: "/project.png",
    tech: ["Next.js", "Express", "PostgreSQL"],
    live: "https://feedbackform-form.onrender.com/",
    github: "https://github.com/Yuthitha-N/Feedbackform.git",
  },
  {
    title: "To-Do List Web App ",
    description: "A single-page task management app with CRUD functionality, secure authentication, MongoDB storage, and a clean, user-friendly interface.",
    fullDescription:
      "Developed a single-page CRUD application to organize and manage daily tasks efficiently.Implemented secure authentication, MongoDB storage, and a clean, intuitive UI for a smooth user experience.",
    image: "/modern-music-player-app-with-waveform-visualizatio.jpg",
    tech: ["React", "Web Audio API", "Node.js"],
  
    github: "https://github.com/SoundariyaMathavan/todo.git",
  },
  {
    title: "Expence Tracker",
    description: "Retro gaming collection with multiplayer",
    fullDescription:
      "A nostalgic gaming platform with leaderboards, achievements, and real-time multiplayer features.",
    image: "/project4.png",
    tech: ["React", "Mongo DB", "Node.js", "Express", "CSS","HTML"],

  },
]

/* ---------------- PROJECT CARD ---------------- */

function ProjectCard({
  project,
  index,
  isInView,
  onOpenModal,
}: {
  project: (typeof projects)[0]
  index: number
  isInView: boolean
  onOpenModal: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative h-[300px] rounded-3xl overflow-hidden cursor-pointer group"
      onClick={onOpenModal}
    >
      {/* Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-white/80 text-sm line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ---------------- MODAL ---------------- */

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0]
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative max-w-2xl w-full bg-[#1a1a2e] rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center"
        >
          <X />
        </button>

        <div className="relative h-64">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        <div className="p-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            {project.title}
          </h3>
          <p className="text-white/80 mb-6">
            {project.fullDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.live}
              className="flex-1 px-6 py-3 bg-emerald-400 text-[#1a1a2e] rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <ExternalLink /> Live Demo
            </a>
            <a
              href={project.github}
              className="flex-1 px-6 py-3 border border-white/30 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <Github /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ---------------- SECTION ---------------- */

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-24 bg-[#1a1a2e]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Latest Projects
          </h2>
          <Sparkles className="w-8 h-8 text-emerald-400" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
              onOpenModal={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
