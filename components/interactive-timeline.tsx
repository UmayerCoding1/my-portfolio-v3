"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, GraduationCap, Award, BookOpen, Code, Trophy } from "lucide-react"

export default function InteractiveTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeItem, setActiveItem] = useState(0)

  const timelineData = [
    {
      year: "2024",
      title: "Graduated with CS Degree",
      institution: "University of Dhaka",
      type: "education",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500",
      description: "Completed Bachelor of Science in Computer Science with CGPA 3.75/4.00",
      achievements: ["Best Final Year Project Award", "Dean's List for 3 semesters", "Programming Club President"],
      skills: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"],
      location: "Dhaka, Bangladesh",
    },
    {
      year: "2023",
      title: "MERN Stack Mastery",
      institution: "Self-Learning & Projects",
      type: "skill",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      description: "Intensive learning and practice of MERN stack through multiple projects",
      achievements: [
        "Built 5+ full-stack applications",
        "Completed 3 major certifications",
        "Contributed to open source",
      ],
      skills: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"],
      location: "Remote Learning",
    },
    {
      year: "2023",
      title: "Hackathon Champion",
      institution: "Code Bangladesh 2023",
      type: "achievement",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      description: "Won 1st place in national hackathon with innovative e-commerce solution",
      achievements: ["1st Place Winner", "Best Technical Implementation", "People's Choice Award"],
      skills: ["React", "Node.js", "Real-time Features", "Team Leadership"],
      location: "Dhaka, Bangladesh",
    },
    {
      year: "2022",
      title: "Web Development Journey",
      institution: "Online Courses & Practice",
      type: "learning",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
      description: "Started intensive web development learning through various online platforms",
      achievements: ["Completed 10+ courses", "Built first portfolio", "Joined developer communities"],
      skills: ["HTML5", "CSS3", "JavaScript", "React Basics", "Git"],
      location: "Self-Paced Learning",
    },
    {
      year: "2021",
      title: "Programming Foundation",
      institution: "University Coursework",
      type: "education",
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      description: "Built strong programming fundamentals through university courses",
      achievements: ["Top 10% in programming courses", "Teaching Assistant", "Study Group Leader"],
      skills: ["C++", "Java", "Python", "Data Structures", "Algorithms"],
      location: "University of Dhaka",
    },
    {
      year: "2020",
      title: "Computer Science Journey Begins",
      institution: "University of Dhaka",
      type: "milestone",
      icon: GraduationCap,
      color: "from-teal-500 to-green-500",
      description: "Started Computer Science degree with passion for technology",
      achievements: ["Scholarship recipient", "Joined programming club", "First coding project"],
      skills: ["Basic Programming", "Mathematics", "Logic Building"],
      location: "Dhaka, Bangladesh",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return GraduationCap
      case "skill":
        return Code
      case "achievement":
        return Trophy
      case "learning":
        return BookOpen
      default:
        return Award
    }
  }

  return (
    <section id="timeline" className="py-20 px-4 bg-gray-900/30 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            My Journey
          </h2>

          <div className="relative">
            {/* Interactive Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 hidden md:block rounded-full" />

            <div className="space-y-8">
              {timelineData.map((item, index) => {
                const IconComponent = getIcon(item.type)
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="relative"
                    onHoverStart={() => setActiveItem(index)}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className={`absolute left-6 w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-gray-900 hidden md:flex items-center justify-center z-10`}
                      whileHover={{ scale: 1.5 }}
                      animate={activeItem === index ? { scale: 1.3 } : { scale: 1 }}
                    >
                      <IconComponent className="w-3 h-3 text-white" />
                    </motion.div>

                    <motion.div
                      className="md:ml-20"
                      whileHover={{ scale: 1.02, rotateY: 2 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Card
                        className={`bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 ${
                          activeItem === index ? "border-blue-500/50 shadow-2xl shadow-blue-500/20" : ""
                        }`}
                      >
                        <CardHeader>
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <motion.div
                                  className={`p-2 bg-gradient-to-r ${item.color} rounded-full`}
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <IconComponent className="w-5 h-5 text-white" />
                                </motion.div>
                                <Badge className={`bg-gradient-to-r ${item.color} text-white border-none`}>
                                  {item.year}
                                </Badge>
                              </div>
                              <CardTitle className="text-xl text-white mb-2">{item.title}</CardTitle>
                              <div className="flex flex-col gap-2 text-gray-400 text-sm">
                                <div className="flex items-center gap-1">
                                  <BookOpen className="w-4 h-4" />
                                  {item.institution}
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {item.location}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>

                          <div className="mb-6">
                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                              <Award className="w-4 h-4 text-yellow-400" />
                              Key Achievements:
                            </h4>
                            <ul className="space-y-2">
                              {item.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                  transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                                  className="text-gray-400 flex items-center gap-2"
                                >
                                  <motion.div
                                    className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}
                                    whileHover={{ scale: 1.5 }}
                                  />
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-white font-semibold mb-3">Skills Developed:</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, i) => (
                                <motion.div
                                  key={skill}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                  transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                                >
                                  <Badge
                                    variant="secondary"
                                    className="bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 cursor-pointer"
                                  >
                                    {skill}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Timeline Navigation */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex gap-2">
              {timelineData.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeItem === index
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  onClick={() => setActiveItem(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
