"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialId: "fcc-js-algo-2023",
      skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
      description:
        "300+ hours of coursework covering ES6, regular expressions, debugging, data structures, and algorithmic thinking.",
      verified: true,
      link: "https://freecodecamp.org/certification/umayerhossain/javascript-algorithms-and-data-structures",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2022",
      credentialId: "fcc-rwd-2022",
      skills: ["HTML5", "CSS3", "Responsive Design", "Accessibility"],
      description:
        "300+ hours of coursework covering HTML, CSS, Visual Design, Accessibility, and Responsive Web Design principles.",
      verified: true,
      link: "https://freecodecamp.org/certification/umayerhossain/responsive-web-design",
    },
    {
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2023",
      credentialId: "UC-react-complete-2023",
      skills: ["React", "Redux", "React Router", "Hooks", "Context API"],
      description:
        "40+ hours comprehensive course covering React fundamentals, advanced patterns, and real-world project development.",
      verified: true,
      link: "https://udemy.com/certificate/UC-react-complete-2023",
    },
    {
      title: "Node.js Developer Course",
      issuer: "Coursera",
      date: "2024",
      credentialId: "coursera-nodejs-2024",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      description:
        "Comprehensive course on server-side development with Node.js, including database integration and API development.",
      verified: true,
      link: "https://coursera.org/verify/nodejs-2024",
    },
    {
      title: "Git and GitHub Essentials",
      issuer: "LinkedIn Learning",
      date: "2023",
      credentialId: "linkedin-git-2023",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      description:
        "Complete course on version control systems, Git workflows, and collaborative development using GitHub.",
      verified: true,
      link: "https://linkedin.com/learning/certificates/git-essentials-2023",
    },
    {
      title: "Introduction to Databases",
      issuer: "Coursera",
      date: "2023",
      credentialId: "coursera-db-2023",
      skills: ["SQL", "Database Design", "MySQL", "Data Modeling"],
      description:
        "Foundational course covering database concepts, SQL queries, normalization, and database design principles.",
      verified: true,
      link: "https://coursera.org/verify/databases-2023",
    },
  ]

  const achievements = [
    {
      title: "Dean's List",
      description: "Achieved Dean's List recognition for 3 consecutive semesters",
      date: "2022-2023",
      icon: "🏆",
    },
    {
      title: "Best Final Year Project",
      description: "Won the Best Final Year Project award for E-commerce Platform",
      date: "2024",
      icon: "🥇",
    },
    {
      title: "Hackathon Participant",
      description: "Participated in 5+ hackathons and coding competitions",
      date: "2022-2024",
      icon: "💻",
    },
    {
      title: "Programming Club Member",
      description: "Active member and contributor to university programming club",
      date: "2021-2024",
      icon: "👥",
    },
  ]

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-yellow-400" />
                Certifications
              </h3>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg text-white mb-2 flex items-center gap-2">
                              {cert.title}
                              {cert.verified && <CheckCircle className="w-5 h-5 text-green-400" />}
                            </CardTitle>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span className="font-medium">{cert.issuer}</span>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {cert.date}
                              </div>
                            </div>
                          </div>
                          <Link
                            href={cert.link}
                            className="p-2 bg-gray-700/50 rounded-full hover:bg-gray-600/50 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 text-gray-400" />
                          </Link>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
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

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-orange-400" />
                Achievements
              </h3>

              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{achievement.icon}</div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                            <p className="text-gray-300 text-sm mb-2 leading-relaxed">{achievement.description}</p>
                            <Badge variant="outline" className="border-orange-500/50 text-orange-400 text-xs">
                              {achievement.date}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Learning Stats */}
              <motion.div
                className="mt-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <h4 className="text-white font-semibold text-lg mb-4">Learning Journey Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">6</div>
                    <div className="text-gray-400 text-sm">Certifications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">500+</div>
                    <div className="text-gray-400 text-sm">Learning Hours</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">15+</div>
                    <div className="text-gray-400 text-sm">Projects Built</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">4</div>
                    <div className="text-gray-400 text-sm">Years Learning</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
