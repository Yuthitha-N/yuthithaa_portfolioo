import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TechnologiesSection from "@/components/technologies-section"
import ProjectsSection from "@/components/projects-section"
import ToolsSection from "@/components/tools-section"
import ResumeSection from "@/components/resume-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-[#0F172A] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ToolsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
