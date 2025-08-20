"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"

export default function ProjectsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["All", "Academic", "Personal", "Learning", "Frontend", "Full-stack"]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack MERN e-commerce application built for my final year project.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Academic",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/umayerhossain/ecommerce",
      live: "https://ecommerce-demo.vercel.app",
      stars: 18,
      forks: 6,
      date: "2024",
    },
    {
      id: 2,
      title: "Task Manager",
      description: "Productivity app to manage daily tasks with drag-and-drop UI.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Personal",
      tech: ["React", "LocalStorage", "TailwindCSS"],
      github: "https://github.com/umayerhossain/task-manager",
      live: "https://task-manager.vercel.app",
      stars: 10,
      forks: 2,
      date: "2023",
    },
    {
      id: 3,
      title: "Weather App",
      description: "Real-time weather data using the OpenWeather API.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Learning",
      tech: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/umayerhossain/weather-app",
      live: "https://weather-demo.netlify.app",
      stars: 5,
      forks: 1,
      date: "2022",
    },
  ]

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/30 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Projects
          </h2>

          {/* filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((c) => (
              <Button
                key={c}
                size="sm"
                variant={activeFilter === c ? "default" : "outline"}
                className={
                  activeFilter === c
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "border-gray-600 hover:border-gray-500 bg-transparent"
                }
                onClick={() => setActiveFilter(c)}
              >
                {c}
                <Badge variant="secondary" className="ml-2 bg-gray-700 text-gray-300">
                  {c === "All" ? projects.length : projects.filter((p) => p.category === c).length}
                </Badge>
              </Button>
            ))}
          </div>

          {/* projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={p.image || "/placeholder.svg"}
                        alt={p.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <Badge variant="outline" className="border-blue-500/50 text-blue-400 text-xs">
                          {p.date}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-white text-lg">{p.title}</CardTitle>
                      <CardDescription className="text-gray-400 text-sm line-clamp-2">{p.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {p.tech.map((t) => (
                          <Badge key={t} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {p.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            {p.forks}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Link href={p.github} className="flex-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-gray-600 hover:border-gray-500 bg-transparent"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </Link>
                        {p.live && (
                          <Link href={p.live} className="flex-1">
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
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
