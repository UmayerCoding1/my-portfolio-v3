"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Award, BookOpen } from "lucide-react"

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Dhaka",
      location: "Dhaka, Bangladesh",
      period: "2020 - 2024",
      grade: "CGPA: 3.75/4.00",
      description:
        "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, database systems, and web development. Completed final year project on e-commerce platform using MERN stack.",
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Best Final Year Project Award",
        "Active member of Programming Club",
        "Participated in 5+ hackathons",
      ],
      relevantCourses: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Management Systems",
        "Software Engineering",
        "Object-Oriented Programming",
        "Computer Networks",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka College",
      location: "Dhaka, Bangladesh",
      period: "2018 - 2020",
      grade: "GPA: 5.00/5.00",
      description:
        "Focused on Science group with Mathematics, Physics, Chemistry, and ICT. Developed strong analytical and problem-solving skills that laid the foundation for computer science studies.",
      achievements: [
        "Board Scholarship recipient",
        "Science Fair winner",
        "Mathematics Olympiad participant",
        "ICT project competition finalist",
      ],
      relevantCourses: ["Higher Mathematics", "Physics", "Chemistry", "Information & Communication Technology"],
    },
  ]

  const onlineCourses = [
    {
      title: "The Complete Web Developer Course",
      platform: "Udemy",
      instructor: "Rob Percival",
      completed: "2023",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
    },
    {
      title: "React - The Complete Guide",
      platform: "Udemy",
      instructor: "Maximilian Schwarzmüller",
      completed: "2023",
      skills: ["React", "Redux", "React Router", "Hooks"],
    },
    {
      title: "Node.js Developer Course",
      platform: "Coursera",
      instructor: "IBM",
      completed: "2024",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-gray-900/30 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Education & Learning
          </h2>

          {/* Formal Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-green-400" />
              Formal Education
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 hidden md:block" />

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-4 border-gray-900 hidden md:block" />

                    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 md:ml-20">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-xl text-white mb-2">{edu.degree}</CardTitle>
                            <div className="flex flex-col gap-2 text-gray-400 text-sm">
                              <div className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4" />
                                {edu.institution}
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {edu.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {edu.period}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className="bg-green-600 text-white mb-2">{edu.grade}</Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-yellow-400" />
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                                className="text-gray-400 flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold mb-3">Relevant Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevantCourses.map((course, i) => (
                              <motion.div
                                key={course}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                                >
                                  {course}
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
          </div>

          {/* Online Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-400" />
              Online Courses & Certifications
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {onlineCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">{course.title}</CardTitle>
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center justify-between">
                          <span>{course.platform}</span>
                          <Badge variant="outline" className="border-blue-500 text-blue-400">
                            {course.completed}
                          </Badge>
                        </div>
                        <div className="mt-1">by {course.instructor}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
