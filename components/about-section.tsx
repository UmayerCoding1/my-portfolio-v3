"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Users,
  Lightbulb,
  Target,
  Coffee,
  Music,
  Gamepad2Icon as GameController2,
  Camera,
} from "lucide-react"
import Image from "next/image"

const MyImage = 'umayer-image.webp'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always eager to learn new technologies and improve my skills through courses and practice.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Great at working in teams, communicating ideas, and contributing to group projects.",
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      description: "Love tackling challenges with innovative approaches and thinking outside the box.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on achieving objectives and delivering quality results within deadlines.",
    },
  ]

  const interests = [
    { icon: Coffee, name: "Coffee Enthusiast" },
    { icon: Music, name: "Music Lover" },
    { icon: GameController2, name: "Gaming" },
    { icon: Camera, name: "Photography" },
  ]

  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I’m Umayer, a passionate web developer specializing in the MERN stack, Next.js, and TypeScript. I love building full-stack applications from scratch and bringing ideas to life with clean, maintainable code.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I enjoy working with React for its component-based architecture, Next.js for building scalable and SEO-friendly web apps, and Node.js for its flexibility in backend development. TypeScript helps me write more reliable and robust code throughout the stack.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Over time, I have completed several projects that deepened my understanding of frontend and backend technologies. I’m eager to collaborate on meaningful projects, learn from experienced developers, and continuously improve my skills to deliver the best web experiences.
              </p>

              {/* <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-gray-700/50">
                <h4 className="text-white font-semibold mb-4 text-lg">My Interests Beyond Coding:</h4>
                <div className="flex flex-wrap gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-full text-sm text-gray-300"
                    >
                      <interest.icon className="w-4 h-4" />
                      {interest.name}
                    </motion.div>
                  ))}
                </div>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                />
                <div className="absolute inset-2 bg-gray-900 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <Image
                     src={MyImage}
                     alt="Umayer"
                     width={200}
                     height={200}
                     className="w-80 h-80 object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
