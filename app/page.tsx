
import AboutSection from "@/components/about-section"
// import InteractiveTimeline from "@/components/interactive-timeline"
import SkillsRadar from "@/components/skills-radar"
import ProjectsShowcase from "@/components/projects-showcase"
import CodePlayground from "@/components/code-playground"
// import BlogSection from "@/components/blog-section"
// import TestimonialsCarousel from "@/components/testimonials-carousel"
import ContactHub from "@/components/contact-hub"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import ScrollProgress from "@/components/scroll-progress"
import ParticleSystem from "@/components/particle-system"
// import ThemeToggle from "@/components/theme-toggle"
import FloatingElements from "@/components/floating-elements"
// import SoundToggle from "@/components/sound-toggle"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white overflow-x-hidden relative transition-colors duration-500">
      <ParticleSystem />
      <FloatingElements />
      <ScrollProgress />
      <Navbar />
      {/* <ThemeToggle /> */}
      {/* <SoundToggle /> */}
      <HeroSection />
      <AboutSection />
      {/* <InteractiveTimeline /> */}
      <SkillsRadar />
      <ProjectsShowcase />
      <CodePlayground />
      {/* <BlogSection /> */}
      {/* <TestimonialsCarousel /> */}
      <ContactHub />
      <Footer />
    </main>
  )
}
