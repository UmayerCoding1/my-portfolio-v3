"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Ahmed",
      role: "Computer Science Professor",
      company: "University of Dhaka",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      content:
        "Umayer was one of my most dedicated students. His final year project demonstrated exceptional technical skills and creativity. He has a strong foundation in computer science principles and shows great potential for a successful career in software development.",
      relationship: "Professor",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Mohammad Rahman",
      role: "Senior Developer",
      company: "TechStart Bangladesh",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      content:
        "I mentored Umayer during his internship, and I was impressed by his eagerness to learn and quick grasp of new concepts. He's a team player who asks thoughtful questions and isn't afraid to tackle challenging problems.",
      relationship: "Mentor",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      name: "Fatima Khan",
      role: "Project Teammate",
      company: "University Group Project",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      content:
        "Working with Umayer on our group projects was always a pleasure. He's reliable, communicates well, and brings creative solutions to the table. His positive attitude and collaborative spirit made our team more productive.",
      relationship: "Teammate",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      role: "Programming Club President",
      company: "University Programming Club",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      content:
        "Umayer has been an active and valuable member of our programming club. He regularly participates in coding competitions and helps junior students with their programming challenges. His dedication to continuous learning is truly inspiring.",
      relationship: "Peer",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 5,
      name: "Lisa Chen",
      role: "Hackathon Organizer",
      company: "Code Bangladesh",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      content:
        "I've seen Umayer participate in multiple hackathons, and he consistently demonstrates strong problem-solving skills and the ability to work under pressure. He's always willing to help other participants and contributes positively to the community.",
      relationship: "Organizer",
      color: "from-teal-500 to-blue-500",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section className="py-20 px-4 bg-gray-900/30 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            What People Say
          </h2>

          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
            Here's what professors, mentors, and peers have to say about my work ethic, technical skills, and
            collaborative spirit.
          </p>

          <div className="relative">
            {/* Main Testimonial with 3D Effect */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 max-w-4xl mx-auto overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${testimonials[currentIndex].color}`} />
                  <CardContent className="p-8 md:p-12">
                    <div className="flex items-center justify-center mb-6">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Quote className="w-12 h-12 text-yellow-400" />
                      </motion.div>
                    </div>

                    <blockquote className="text-xl md:text-2xl text-gray-300 text-center leading-relaxed mb-8">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    <div className="flex items-center justify-center gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <motion.div whileHover={{ scale: 1.1, rotateY: 15 }} style={{ transformStyle: "preserve-3d" }}>
                        <Avatar className="w-16 h-16">
                          <AvatarImage
                            src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                            alt={testimonials[currentIndex].name}
                          />
                          <AvatarFallback
                            className={`bg-gradient-to-br ${testimonials[currentIndex].color} text-white`}
                          >
                            {testimonials[currentIndex].name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div className="text-center">
                        <h4 className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                        <p className="text-gray-500 text-sm">{testimonials[currentIndex].company}</p>
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 bg-gradient-to-r ${testimonials[currentIndex].color} text-white`}
                        >
                          {testimonials[currentIndex].relationship}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-gray-600 hover:border-gray-500 bg-transparent rounded-full p-3"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? `bg-gradient-to-r ${testimonials[currentIndex].color} scale-125`
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                      onClick={() => setCurrentIndex(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="border-gray-600 hover:border-gray-500 bg-transparent rounded-full p-2"
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-gray-600 hover:border-gray-500 bg-transparent rounded-full p-3"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Testimonial Preview Cards */}
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="cursor-pointer"
                  onClick={() => setCurrentIndex(index)}
                >
                  <Card
                    className={`bg-gray-800/30 backdrop-blur-sm border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 ${
                      index === currentIndex ? `border-opacity-100 bg-gray-800/50` : ""
                    }`}
                  >
                    <div className={`h-1 bg-gradient-to-r ${testimonial.color}`} />
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback className={`bg-gradient-to-br ${testimonial.color} text-white text-sm`}>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                          <p className="text-gray-400 text-xs">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">"{testimonial.content}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
