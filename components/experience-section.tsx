"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "Remote",
      period: "2023 - Present",
      description:
        "Leading development of enterprise web applications using MERN stack. Mentoring junior developers and implementing best practices for code quality and performance optimization.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines",
        "Reduced bug reports by 60%",
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "TypeScript"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd",
      location: "Dhaka, Bangladesh",
      period: "2022 - 2023",
      description:
        "Developed and maintained multiple client projects including e-commerce platforms, CMS systems, and custom web applications. Collaborated with design teams to implement pixel-perfect UIs.",
      achievements: [
        "Delivered 15+ successful projects",
        "Improved client satisfaction by 35%",
        "Reduced development time by 25%",
        "Implemented responsive designs",
      ],
      technologies: ["React", "Express.js", "PostgreSQL", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      location: "Dhaka, Bangladesh",
      period: "2021 - 2022",
      description:
        "Focused on creating responsive and interactive user interfaces for various startup projects. Worked closely with UX designers to bring mockups to life with smooth animations and optimal user experience.",
      achievements: [
        "Built 10+ responsive websites",
        "Improved user engagement by 50%",
        "Optimized loading times by 30%",
        "Implemented modern UI patterns",
      ],
      technologies: ["React", "JavaScript", "CSS3", "Bootstrap", "jQuery"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 hidden md:block" />

                  <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 md:ml-20">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl text-white mb-2">{exp.title}</CardTitle>
                          <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <div className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              {exp.company}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                              className="text-gray-400 flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                            >
                              <Badge variant="secondary" className="bg-gray-700/50 text-gray-300 hover:bg-gray-600/50">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
