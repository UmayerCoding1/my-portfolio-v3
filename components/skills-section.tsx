"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "HTML5", level: 85, icon: "🌐" },
        { name: "JavaScript", level: 80, icon: "💛" },
        { name: "React", level: 75, icon: "⚛️" },
        { name: "Tailwind CSS", level: 70, icon: "🎨" },
        { name: "Bootstrap", level: 75, icon: "🅱️" },
        { name: "Responsive Design", level: 80, icon: "📱" },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 70, icon: "🟢" },
        { name: "Express.js", level: 65, icon: "🚀" },
        { name: "MongoDB", level: 70, icon: "🍃" },
        { name: "MySQL", level: 65, icon: "🐬" },
        { name: "REST APIs", level: 75, icon: "🔗" },
        { name: "Authentication", level: 60, icon: "🔐" },
      ],
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 75, icon: "📚" },
        { name: "VS Code", level: 85, icon: "💻" },
        { name: "Postman", level: 70, icon: "📮" },
        { name: "Figma", level: 60, icon: "🎨" },
        { name: "NPM/Yarn", level: 70, icon: "📦" },
        { name: "Chrome DevTools", level: 75, icon: "🔍" },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
            Here are the technologies I've learned and practiced during my studies and personal projects. I'm always
            eager to learn more and improve my skills!
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.title} variants={itemVariants} whileHover={{ y: -5 }} className="h-full">
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <CardTitle className="text-2xl text-white">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 + 0.5 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Learning Goals */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Currently Learning & Goals</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["TypeScript", "Next.js", "Docker", "AWS", "GraphQL", "Testing"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full text-sm text-yellow-400 border border-yellow-500/30"
                >
                  📚 {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
