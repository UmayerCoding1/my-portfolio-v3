"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SoundToggle() {
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleSound = () => {
    setIsMuted(!isMuted)
    // In a real implementation, you would control background music here
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }

  return (
    <motion.div
      className="fixed top-36 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={toggleSound}
        className="bg-gray-900/80 backdrop-blur-md border-gray-700/50 hover:border-gray-600 text-white hover:text-white rounded-full p-3"
      >
        <motion.div initial={false} animate={{ scale: isMuted ? 1 : 1.2 }} transition={{ duration: 0.2 }}>
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </motion.div>
      </Button>
      <audio ref={audioRef} loop>
        {/* Add your background music file here */}
        {/* <source src="/ambient-music.mp3" type="audio/mpeg" /> */}
      </audio>
    </motion.div>
  )
}
