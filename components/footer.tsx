"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp, Code, Coffee, GraduationCap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/umayerhossain", label: "GitHub", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "https://linkedin.com/in/umayerhossain", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "https://twitter.com/umayerhossain", label: "Twitter", color: "hover:text-cyan-400" },
    { icon: Mail, href: "mailto:umayer@example.com", label: "Email", color: "hover:text-green-400" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="py-16 px-4 border-t border-gray-800/50 bg-gray-900/30 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center relative">
                <span className="text-white font-bold text-lg">UH</span>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Md. Umayer Hossain</h3>
                <p className="text-gray-400">Fresh Graduate • Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Recent Computer Science graduate passionate about creating amazing web experiences. Ready to start my
              career and contribute to innovative projects while continuously learning and growing.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <GraduationCap className="w-4 h-4" />
                <span>Class of 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Code className="w-4 h-4" />
                <span>MERN Stack</span>
              </div>
              <div className="flex items-center gap-1">
                <Coffee className="w-4 h-4" />
                <span>Coffee Powered</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6 text-lg">Let's Connect</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                <span className="text-white font-medium">Email:</span>
                <br />
                <a href="mailto:umayer@example.com" className="hover:text-cyan-400 transition-colors">
                  umayer@example.com
                </a>
              </p>
              <p className="text-gray-400">
                <span className="text-white font-medium">Location:</span>
                <br />
                Dhaka, Bangladesh
              </p>
              <p className="text-gray-400">
                <span className="text-white font-medium">Status:</span>
                <br />
                <span className="text-green-400">Available for opportunities</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={social.href}
                className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Back to Top */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-gray-600 hover:border-gray-500 hover:bg-gray-800/50 bg-transparent backdrop-blur-sm"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center space-y-2 pt-8 border-t border-gray-800/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> and lots of{" "}
            <Coffee className="w-4 h-4 text-yellow-600" /> by a fresh graduate ready to make an impact!
          </p>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Md. Umayer Hossain. All rights reserved. • Built with Next.js, TypeScript &
            Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
