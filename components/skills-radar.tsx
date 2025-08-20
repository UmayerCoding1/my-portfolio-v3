"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsRadar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("frontend")

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 85, description: "Component-based UI development" },
        { name: "JavaScript", level: 80, description: "Modern ES6+ features" },
        { name: "TypeScript", level: 70, description: "Type-safe development" },
        { name: "HTML5/CSS3", level: 90, description: "Semantic markup & styling" },
        { name: "Tailwind CSS", level: 85, description: "Utility-first CSS framework" },
        { name: "Next.js", level: 75, description: "React framework for production" },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 80, description: "Server-side JavaScript runtime" },
        { name: "Express.js", level: 75, description: "Web application framework" },
        { name: "MongoDB", level: 70, description: "NoSQL database management" },
        { name: "PostgreSQL", level: 65, description: "Relational database systems" },
        { name: "REST APIs", level: 85, description: "RESTful web services" },
        { name: "Authentication", level: 70, description: "JWT & OAuth implementation" },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      icon: "🛠️",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git/GitHub", level: 85, description: "Version control & collaboration" },
        { name: "VS Code", level: 90, description: "Code editor proficiency" },
        { name: "Docker", level: 60, description: "Containerization basics" },
        { name: "AWS", level: 55, description: "Cloud services fundamentals" },
        { name: "Figma", level: 70, description: "UI/UX design tools" },
        { name: "Testing", level: 65, description: "Unit & integration testing" },
      ],
    },
    soft: {
      title: "Soft Skills",
      icon: "🧠",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Problem Solving", level: 90, description: "Analytical thinking & debugging" },
        { name: "Communication", level: 85, description: "Clear technical communication" },
        { name: "Team Work", level: 88, description: "Collaborative development" },
        { name: "Learning", level: 95, description: "Quick adaptation to new tech" },
        { name: "Time Management", level: 80, description: "Project deadline management" },
        { name: "Leadership", level: 75, description: "Team guidance & mentoring" },
      ],
    },
  }

  const RadarChart = ({ skills, color }: { skills: any[]; color: string }) => {
    const centerX = 150
    const centerY = 150
    const maxRadius = 120

    const angleStep = (2 * Math.PI) / skills.length

    const getPoint = (index: number, level: number) => {
      const angle = index * angleStep - Math.PI / 2
      const radius = (level / 100) * maxRadius
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      }
    }

    const pathData =
      skills
        .map((skill, index) => {
          const point = getPoint(index, skill.level)
          return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
        })
        .join(" ") + " Z"

    return (
      <div className="relative">
        <svg width="300" height="300" className="transform-gpu">
          {/* Grid circles */}
          {[20, 40, 60, 80, 100].map((level) => (
            <circle
              key={level}
              cx={centerX}
              cy={centerY}
              r={(level / 100) * maxRadius}
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          ))}

          {/* Grid lines */}
          {skills.map((_, index) => {
            const angle = index * angleStep - Math.PI / 2
            const endX = centerX + maxRadius * Math.cos(angle)
            const endY = centerY + maxRadius * Math.sin(angle)
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            )
          })}

          {/* Skill area */}
          <motion.path
            d={pathData}
            fill={`url(#gradient-${selectedCategory})`}
            fillOpacity="0.3"
            stroke={`url(#gradient-${selectedCategory})`}
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Skill points */}
          {skills.map((skill, index) => {
            const point = getPoint(index, skill.level)
            return (
              <motion.circle
                key={skill.name}
                cx={point.x}
                cy={point.y}
                r="4"
                fill={`url(#gradient-${selectedCategory})`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.5 }}
              />
            )
          })}

          {/* Gradient definitions */}
          <defs>
            <linearGradient id={`gradient-${selectedCategory}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Skill labels */}
        {skills.map((skill, index) => {
          const angle = index * angleStep - Math.PI / 2
          const labelRadius = maxRadius + 30
          const labelX = centerX + labelRadius * Math.cos(angle)
          const labelY = centerY + labelRadius * Math.sin(angle)

          return (
            <motion.div
              key={skill.name}
              className="absolute text-xs text-white font-medium pointer-events-none"
              style={{
                left: labelX - 25,
                top: labelY - 10,
                width: 50,
                textAlign: "center",
              }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              {skill.name}
            </motion.div>
          )
        })}
      </div>
    )
  }

  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Skills Radar
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Radar Chart */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 p-8">
                <RadarChart
                  skills={skillCategories[selectedCategory].skills}
                  color={skillCategories[selectedCategory].color}
                />
              </Card>
            </motion.div>

            {/* Category Selection & Details */}
            <div className="space-y-6">
              {/* Category Buttons */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {Object.entries(skillCategories).map(([key, category]) => (
                  <motion.button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedCategory === key
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                        : "bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="font-semibold text-sm">{category.title}</div>
                  </motion.button>
                ))}
              </motion.div>

              {/* Selected Category Details */}
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-white">
                      <span className="text-2xl">{skillCategories[selectedCategory].icon}</span>
                      {skillCategories[selectedCategory].title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skillCategories[selectedCategory].skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium">{skill.name}</span>
                            <Badge variant="secondary" className="bg-gray-700/50 text-gray-300">
                              {skill.level}%
                            </Badge>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              className={`bg-gradient-to-r ${skillCategories[selectedCategory].color} h-2 rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                            />
                          </div>
                          <p className="text-gray-400 text-sm">{skill.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
