"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Phone,
  Send,
  Clock,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Video,
  Coffee,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function ContactHub() {
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
    preferredContact: "",
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
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        opportunityType: "",
        company: "",
        preferredContact: "",
      })
      setIsSubmitting(false)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "umayer@example.com",
      href: "mailto:umayer@example.com",
      description: "Best way to reach me",
      color: "from-blue-500 to-cyan-500",
      available: "Always",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+880 1234 567890",
      href: "tel:+8801234567890",
      description: "Available 9 AM - 6 PM",
      color: "from-green-500 to-emerald-500",
      available: "Business Hours",
    },
    {
      icon: Video,
      title: "Video Call",
      value: "Schedule a Meeting",
      href: "#",
      description: "Google Meet or Zoom",
      color: "from-purple-500 to-pink-500",
      available: "By Appointment",
    },
    {
      icon: Coffee,
      title: "Coffee Chat",
      value: "Let's Meet Up",
      href: "#",
      description: "In-person meeting in Dhaka",
      color: "from-yellow-500 to-orange-500",
      available: "Weekends",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "hhttps://www.linkedin.com/in/umayer-hossain-604999351/",
      color: "hover:text-blue-400",
      description: "Professional network",
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/UmayerCoding1",
      color: "hover:text-gray-300",
      description: "Code repositories",
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://x.com/Umayer_dev",
      color: "hover:text-cyan-400",
      description: "Tech discussions",
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:umayer.hossain10@gmail.com",
      color: "hover:text-green-400",
      description: "Direct contact",
    },
  ]

  const quickActions = [
    {
      icon: Briefcase,
      title: "Job Opportunities",
      description: "Discuss full-time positions",
      action: "Let's Talk",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: GraduationCap,
      title: "Internships",
      description: "Explore internship programs",
      action: "Apply Now",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: MessageCircle,
      title: "Freelance Projects",
      description: "Collaborate on projects",
      action: "Get Quote",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Coffee,
      title: "Mentorship",
      description: "Learning opportunities",
      action: "Connect",
      color: "from-purple-500 to-pink-500",
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
            Ready to start my career journey! Whether you have opportunities, projects, or just want to chat about
            technology, I'd love to hear from you. Let's build something amazing together! 🚀
          </p>

          {/* Quick Actions */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="cursor-pointer"
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full text-center">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <action.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-white font-semibold mb-2">{action.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{action.description}</p>
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${action.color} hover:opacity-90 text-white border-none`}
                    >
                      {action.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Methods & Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Get In Touch</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                  As a fresh graduate, I'm excited to start my career and contribute to meaningful projects. I'm
                  available for full-time positions, internships, freelance work, or just a friendly chat about
                  technology!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <motion.div
                            className={`p-3 bg-gradient-to-r ${method.color} rounded-full`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <method.icon className="w-5 h-5 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                            <Link
                              href={method.href}
                              className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium block mb-1"
                            >
                              {method.value}
                            </Link>
                            <p className="text-gray-400 text-sm mb-1">{method.description}</p>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              {method.available}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-gray-700/50"
              >
                <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-cyan-400" />
                  Connect on Social Media
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.div key={social.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={social.href}
                        className={`flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                        <div>
                          <div className="text-white font-medium text-sm">{social.name}</div>
                          <div className="text-gray-400 text-xs">{social.description}</div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-gray-700/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-4 h-4 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <h4 className="text-white font-semibold text-lg">Current Status</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">Available</div>
                    <div className="text-gray-400 text-sm">For Opportunities</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">24h</div>
                    <div className="text-gray-400 text-sm">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">Remote</div>
                    <div className="text-gray-400 text-sm">Work Ready</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">Eager</div>
                    <div className="text-gray-400 text-sm">To Learn</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center gap-2">
                    <Send className="w-6 h-6 text-cyan-400" />
                    Send Me a Message
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-lg">
                    Fill out the form below and I'll get back to you as soon as possible!
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
                          <option value="networking">Networking</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
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
                        <select
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:border-cyan-400 focus:outline-none"
                        >
                          <option value="">Preferred Contact Method</option>
                          <option value="email">Email</option>
                          <option value="phone">Phone Call</option>
                          <option value="video">Video Call</option>
                          <option value="in-person">In-Person Meeting</option>
                        </select>
                      </div>
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

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 text-lg rounded-lg"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
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
