"use client";

import type React from "react";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Database, Globe, Smartphone, Zap } from "lucide-react";

interface FloatingEl {
  id: number;
  Icon: React.ComponentType<{ className?: string }>;
  color: string;
  delay: number;
  startY: number;
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingEl[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const els = [
      { Icon: Code2, color: "text-blue-400", delay: 0 },
      { Icon: Cpu, color: "text-purple-400", delay: 1 },
      { Icon: Database, color: "text-green-400", delay: 2 },
      { Icon: Globe, color: "text-cyan-400", delay: 3 },
      { Icon: Smartphone, color: "text-pink-400", delay: 4 },
      { Icon: Zap, color: "text-yellow-400", delay: 5 },
    ].map((el, idx) => ({
      ...el,
      id: idx,
      startY: Math.random() * window.innerHeight,
    }));

    setElements(els);
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map(({ id, Icon, color, delay, startY }) => (
        <motion.div
          key={id}
          className={`absolute ${color} opacity-10`}
          initial={{ x: -120, y: startY, rotate: 0 }}
          animate={{
            x: window.innerWidth + 120,
            y: Math.random() * window.innerHeight,
            rotate: 360,
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            delay,
            ease: "linear",
          }}
        >
          <Icon className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>
      ))}
    </div>
  );
}
