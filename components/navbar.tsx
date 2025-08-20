"use client"

import { useState } from "react"
import { useScroll, useMotionValueEvent, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {

  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)


  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > lastScrollY && y > 128) {
      setIsVisible(false) 
    } else {
      setIsVisible(true) 
    }
    setLastScrollY(y)
  })

  
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#timeline" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }


  return (
    <motion.nav
      className="fixed top-4 right-0 -translate-x-1/2 z-50 bg-gray-900/80 backdrop-blur-md
                 border border-gray-700/50 rounded-full px-6 py-3 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.25 }}
    >
      
      <div className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollTo(item.href)}
            className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            {item.name}
            {/* underline on hover */}
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
      </div>

     
      <div className="flex lg:hidden items-center">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white hover:bg-gray-700/40"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* slide-down menu */}
        {mobileOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full mt-2 w-[260px] rounded-xl bg-gray-900/95
                       backdrop-blur-md border border-gray-700/50 p-4 space-y-2"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left px-3 py-2 rounded-md
                             text-gray-300 hover:bg-gray-800/60 hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.nav>
  )
}
