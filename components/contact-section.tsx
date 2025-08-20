"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send, Clock, MessageCircle, Briefcase, GraduationCap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    opportunityType: "",
    company: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for reaching out. I'll get back to you within 24 hours!",
      })
      setFormData({ name: "", email: "", subject: "", message: "", opportunityType: "", company: "" })
      setIsSubmitting(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "umayer@example.com",
      href: "mailto:umayer@example.com",
      description: "Best way to reach me",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+880 1234 567890",
      href: "tel:+8801234567890",
      description: "Available 9 AM - 6 PM",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
      description: "Open to remote opportunities",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      href: "#",
      description: "Usually much faster!",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect!
          </h2>

          <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto text-lg">
            I'm actively looking for entry-level opportunities, internships, or freelance projects where I can
            contribute, learn, and grow. Let's discuss how we can work together!
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Get In Touch</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                  As a fresh graduate, I'm excited to start my career and contribute to meaningful projects. Whether you
                  have an entry-level position, internship, or project opportunity, I'd love to hear from you!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
                            <info.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                            <a
                              href={info.href}
                              className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                            <p className="text-gray-400 text-sm mt-1">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* What I'm Looking For */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-gray-700/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-white font-semibold text-lg">What I'm Looking For</h4>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Entry-level Full Stack Developer positions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Internship opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Freelance web development projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Mentorship and learning opportunities</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Start a Conversation</CardTitle>
                  <CardDescription className="text-gray-400 text-lg">
                    I'd love to hear about opportunities or just chat about technology!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                          required
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email *"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="company"
                          placeholder="Company/Organization"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <select
                          name="opportunityType"
                          value={formData.opportunityType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:border-cyan-400 focus:outline-none"
                        >
                          <option value="">Type of Opportunity</option>
                          <option value="full-time">Full-time Position</option>
                          <option value="internship">Internship</option>
                          <option value="freelance">Freelance Project</option>
                          <option value="collaboration">Collaboration</option>
                          <option value="mentorship">Mentorship</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell me about the opportunity or just say hello! *"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 resize-none focus:border-cyan-400"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 text-lg"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
