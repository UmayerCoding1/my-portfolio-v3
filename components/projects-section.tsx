"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, Star, GitFork, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["All", "Academic", "Personal", "Learning", "Frontend", "Fullstack"]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website (Final Year Project)",
      description:
        "A complete e-commerce platform built as my final year project. Features include user authentication, product catalog, shopping cart, order management, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Academic",
      featured: true,
      tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Stripe"],
      github: "https://github.com/umayerhossain/ecommerce-fyp",
      live: "https://ecommerce-fyp-demo.vercel.app",
      stars: 15,
      forks: 8,
      status: "Completed",
      date: "2024",
      highlights: ["Best Final Year Project Award", "Full CRUD Operations", "Payment Integration"],
    },
    {
      id: 2,
      title: "Task Manager App",
      description:
        "A personal productivity app to manage daily tasks and projects. Built to practice React hooks, local storage, and responsive design principles.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Personal",
      featured: true,
      tech: ["React", "CSS3", "Local Storage", "React Hooks"],
      github: "https://github.com/umayerhossain/task-manager",
      live: "https://my-task-manager-app.vercel.app",
      stars: 8,
      forks: 3,
      status: "Completed",
      date: "2023",
      highlights: ["Drag & Drop", "Dark Mode", "Responsive Design"],
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "A simple weather application that fetches real-time weather data using OpenWeather API. My first project working with external APIs and async JavaScript.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Learning",
      featured: false,
      tech: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
      github: "https://github.com/umayerhossain/weather-app",
      live: "https://my-weather-app-demo.netlify.app",
      stars: 5,
      forks: 2,
      status: "Completed",
      date: "2023",
      highlights: ["API Integration", "Geolocation", "Responsive UI"],
    },
    {
      id: 4,
      title: "Student Management System",
      description:
        "A web-based system for managing student records, built as part of database management course. Includes CRUD operations and search functionality.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Academic",
      featured: true,
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/umayerhossain/student-management",
      live: "#",
      stars: 12,
      forks: 6,
      status: "Completed",
      date: "2023",
      highlights: ["Database Design", "CRUD Operations", "Search & Filter"],
    },
    {
      id: 5,
      title: "Portfolio Website v1",
      description:
        "My first portfolio website built with vanilla HTML, CSS, and JavaScript. A great learning experience in responsive design and CSS animations.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Personal",
      featured: false,
      tech: ["HTML5", "CSS3", "JavaScript", "AOS Library"],
      github: "https://github.com/umayerhossain/portfolio-v1",
      live: "https://umayer-portfolio-v1.netlify.app",
      stars: 6,
      forks: 2,
      status: "Completed",
      date: "2022",
      highlights: ["CSS Animations", "Responsive Design", "Contact Form"],
    },
    {
      id: 6,
      title: "Recipe Finder App",
      description:
        "A React application that helps users find recipes based on ingredients they have. Built to practice React components and state management.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Learning",
      featured: false,
      tech: ["React", "Spoonacular API", "CSS Modules"],
      github: "https://github.com/umayerhossain/recipe-finder",
      live: "https://recipe-finder-demo.vercel.app",
      stars: 4,
      forks: 1,
      status: "Completed",
      date: "2023",
      highlights: ["Component Architecture", "State Management", "API Integration"],
    },
    {
      id: 7,
      title: "Blog Website",
      description:
        "A simple blog website where I practice writing technical articles. Built with HTML, CSS, and JavaScript with a focus on clean design and readability.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Personal",
      featured: false,
      tech: ["HTML5", "CSS3", "JavaScript", "Markdown"],
      github: "https://github.com/umayerhossain/my-blog",
      live: "https://umayer-blog.netlify.app",
      stars: 3,
      forks: 1,
      status: "Ongoing",
      date: "2024",
      highlights: ["Clean Design", "SEO Friendly", "Mobile First"],
    },
    {
      id: 8,
      title: "Calculator App",
      description:
        "A functional calculator built with vanilla JavaScript. One of my early projects to understand DOM manipulation and event handling.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Learning",
      featured: false,
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/umayerhossain/calculator",
      live: "https://my-calculator-app.netlify.app",
      stars: 2,
      forks: 0,
      status: "Completed",
      date: "2022",
      highlights: ["DOM Manipulation", "Event Handling", "Clean UI"],
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/30 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            My Projects
          </h2>

          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto text-lg">
            Here's a collection of projects I've built during my studies and personal learning journey. Each project
            represents a step in my growth as a developer!
          </p>

          {/* Featured Projects */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">🌟 Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.slice(0, 3).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 h-full overflow-hidden">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge className="bg-purple-600 text-white">{project.status}</Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <div className="flex items-center gap-1 text-white text-sm bg-black/50 rounded-full px-2 py-1">
                          <Star className="w-3 h-3" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1 text-white text-sm bg-black/50 rounded-full px-2 py-1">
                          <Calendar className="w-3 h-3" />
                          {project.date}
                        </div>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 line-clamp-2">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-white mb-2">Key Highlights:</h5>
                        <div className="flex flex-wrap gap-1">
                          {project.highlights.slice(0, 2).map((highlight) => (
                            <Badge
                              key={highlight}
                              variant="outline"
                              className="border-green-500/50 text-green-400 text-xs"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                            +{project.tech.length - 4}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Link href={project.github} className="flex-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-gray-600 hover:border-gray-500 bg-transparent"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </Link>
                        {project.live !== "#" && (
                          <Link href={project.live} className="flex-1">
                            <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    : "border-gray-600 hover:border-gray-500 hover:bg-gray-800/50 bg-transparent"
                }`}
              >
                {category}
                <Badge variant="secondary" className="ml-2 bg-gray-700 text-gray-300">
                  {category === "All" ? projects.length : projects.filter((p) => p.category === category).length}
                </Badge>
              </Button>
            ))}
          </motion.div>

          {/* All Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Link
                          href={project.github}
                          className="p-3 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                        {project.live !== "#" && (
                          <Link
                            href={project.live}
                            className="p-3 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </Link>
                        )}
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge variant="secondary" className="bg-gray-900/80 text-white text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <Badge variant="outline" className="border-blue-500/50 text-blue-400 text-xs">
                          {project.date}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400 text-sm">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {project.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            {project.forks}
                          </div>
                        </div>
                        <Badge variant="outline" className="border-green-500/50 text-green-400 text-xs">
                          {project.status}
                        </Badge>
                      </div>

                      <div className="flex gap-2">
                        <Link href={project.github} className="flex-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-gray-600 hover:border-gray-500 bg-transparent"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </Link>
                        {project.live !== "#" && (
                          <Link href={project.live} className="flex-1">
                            <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
