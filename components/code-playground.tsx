"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Copy, Check, Code2, Terminal } from "lucide-react"

export default function CodePlayground() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeDemo, setActiveDemo] = useState(0)
  const [copied, setCopied] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

  const codeDemos = [
    {
      title: "React Component",
      language: "jsx",
      description: "A reusable button component with TypeScript",
      code: `interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ 
  variant, 
  children, 
  onClick 
}) => {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;`,
      output: "✨ Interactive button component ready!",
    },
    {
      title: "Node.js API",
      language: "javascript",
      description: "Express.js REST API endpoint",
      code: `const express = require('express');
const app = express();

app.use(express.json());

// GET all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      success: true,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
      output: "🚀 Server running on port 3000",
    },
    {
      title: "MongoDB Query",
      language: "javascript",
      description: "Database operations with Mongoose",
      code: `const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Create new user
const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};`,
      output: "💾 User created successfully!",
    },
    {
      title: "Algorithm Challenge",
      language: "javascript",
      description: "Binary search implementation",
      code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// Test the function
const numbers = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(numbers, 7)); // Output: 3`,
      output: "🎯 Found at index: 3",
    },
  ]

  const copyCode = async () => {
    await navigator.clipboard.writeText(codeDemos[activeDemo].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const runCode = () => {
    setIsRunning(true)
    setTimeout(() => setIsRunning(false), 2000)
  }

  return (
    <section className="py-20 px-4 bg-gray-900/30 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Code Playground
          </h2>

          <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto text-lg">
            Interactive code examples showcasing my programming skills. Click on different demos to explore various
            technologies and implementations!
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Demo Selection */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-purple-400" />
                Select Demo
              </h3>
              {codeDemos.map((demo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card
                    className={`cursor-pointer transition-all duration-300 ${
                      activeDemo === index
                        ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/50"
                        : "bg-gray-800/50 border-gray-700/50 hover:border-gray-600/50"
                    }`}
                    onClick={() => setActiveDemo(index)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={`${activeDemo === index ? "bg-purple-600" : "bg-gray-600"} text-white`}>
                          {demo.language}
                        </Badge>
                        <h4 className="text-white font-semibold">{demo.title}</h4>
                      </div>
                      <p className="text-gray-400 text-sm">{demo.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Code Editor */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 overflow-hidden">
                <CardHeader className="bg-gray-800/50 border-b border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center gap-2">
                      <Terminal className="w-5 h-5 text-green-400" />
                      {codeDemos[activeDemo].title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={copyCode}
                        className="border-gray-600 hover:border-gray-500 bg-transparent text-gray-300"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? "Copied!" : "Copy"}
                      </Button>
                      <Button
                        size="sm"
                        onClick={runCode}
                        disabled={isRunning}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        {isRunning ? "Running..." : "Run"}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative">
                    <pre className="bg-gray-900 text-gray-300 p-6 overflow-x-auto text-sm font-mono leading-relaxed">
                      <code>{codeDemos[activeDemo].code}</code>
                    </pre>
                    {isRunning && (
                      <motion.div
                        className="absolute inset-0 bg-green-500/10 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 border border-green-500/50">
                          <div className="flex items-center gap-2 text-green-400">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                              <Play className="w-4 h-4" />
                            </motion.div>
                            Executing code...
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Output Terminal */}
                  <div className="bg-black/50 border-t border-gray-700/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-gray-400 text-sm font-mono">Output</span>
                    </div>
                    <motion.div
                      key={activeDemo}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 font-mono text-sm"
                    >
                      {isRunning ? (
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                        >
                          Processing...
                        </motion.span>
                      ) : (
                        codeDemos[activeDemo].output
                      )}
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Tech Stack Used */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Technologies Demonstrated</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JavaScript", "Algorithms", "REST APIs"].map(
                (tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                  >
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 text-sm">
                      {tech}
                    </Badge>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
