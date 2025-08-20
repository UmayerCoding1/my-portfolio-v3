"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, BookOpen, Heart, MessageCircle, Share2 } from "lucide-react"

export default function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  const blogPosts = [
    {
      id: 1,
      title: "My Journey from Zero to Full Stack Developer",
      excerpt:
        "How I learned web development from scratch during my computer science degree and built my first full-stack application.",
      content:
        "Starting my journey in web development was both exciting and overwhelming. In this post, I share the resources, challenges, and milestones that shaped my path to becoming a full-stack developer...",
      category: "Career",
      readTime: "5 min read",
      date: "2024-01-15",
      likes: 24,
      comments: 8,
      tags: ["Web Development", "Learning", "Career", "MERN Stack"],
      featured: true,
    },
    {
      id: 2,
      title: "Building My First E-commerce Platform",
      excerpt: "A detailed walkthrough of creating a complete e-commerce solution using React, Node.js, and MongoDB.",
      content:
        "For my final year project, I decided to build a comprehensive e-commerce platform. This post covers the architecture decisions, challenges faced, and lessons learned...",
      category: "Project",
      readTime: "8 min read",
      date: "2024-01-10",
      likes: 18,
      comments: 12,
      tags: ["React", "Node.js", "MongoDB", "E-commerce"],
      featured: true,
    },
    {
      id: 3,
      title: "Understanding React Hooks: A Beginner's Guide",
      excerpt: "Demystifying React Hooks with practical examples and use cases for new developers.",
      content:
        "React Hooks revolutionized how we write React components. In this comprehensive guide, I break down the most commonly used hooks with real-world examples...",
      category: "Tutorial",
      readTime: "6 min read",
      date: "2024-01-05",
      likes: 31,
      comments: 15,
      tags: ["React", "JavaScript", "Frontend", "Tutorial"],
      featured: false,
    },
    {
      id: 4,
      title: "Database Design Best Practices",
      excerpt: "Key principles I learned while designing databases for my academic and personal projects.",
      content:
        "Good database design is crucial for any application's success. Here are the best practices I've learned through my coursework and project experience...",
      category: "Database",
      readTime: "7 min read",
      date: "2023-12-28",
      likes: 22,
      comments: 9,
      tags: ["Database", "MongoDB", "PostgreSQL", "Design"],
      featured: false,
    },
    {
      id: 5,
      title: "My Hackathon Experience: Lessons Learned",
      excerpt: "Reflections on participating in multiple hackathons and what I gained from each experience.",
      content:
        "Hackathons have been an incredible part of my learning journey. From my first nervous participation to winning competitions, here's what I've learned...",
      category: "Experience",
      readTime: "4 min read",
      date: "2023-12-20",
      likes: 19,
      comments: 6,
      tags: ["Hackathon", "Experience", "Learning", "Competition"],
      featured: false,
    },
    {
      id: 6,
      title: "Essential VS Code Extensions for Web Developers",
      excerpt: "A curated list of VS Code extensions that have significantly improved my development workflow.",
      content:
        "As a developer, having the right tools can make a huge difference in productivity. Here are my must-have VS Code extensions and how they've helped me...",
      category: "Tools",
      readTime: "3 min read",
      date: "2023-12-15",
      likes: 27,
      comments: 11,
      tags: ["VS Code", "Tools", "Productivity", "Development"],
      featured: false,
    },
  ]

  const categories = ["All", "Career", "Project", "Tutorial", "Database", "Experience", "Tools"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <section id="blog" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            My Blog
          </h2>

          <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto text-lg">
            Sharing my learning journey, project experiences, and technical insights. Follow along as I document my
            growth as a developer and share knowledge with the community!
          </p>

          {/* Featured Posts */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-orange-400" />
              Featured Posts
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredPost(post.id)}
                  onHoverEnd={() => setHoveredPost(null)}
                  className="group cursor-pointer"
                >
                  <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 h-full overflow-hidden">
                    <div className="relative">
                      <div className="h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                        <motion.div
                          animate={hoveredPost === post.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <BookOpen className="w-16 h-16 text-orange-400" />
                        </motion.div>
                      </div>
                      <Badge className="absolute top-4 left-4 bg-orange-600 text-white">Featured</Badge>
                    </div>

                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                        <Clock className="w-4 h-4 ml-2" />
                        {post.readTime}
                      </div>
                      <CardTitle className="text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {post.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {post.comments}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-orange-400 hover:text-orange-300 hover:bg-orange-500/10"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                    : "border-gray-600 hover:border-gray-500 hover:bg-gray-800/50 bg-transparent"
                }`}
              >
                {category}
                <Badge variant="secondary" className="ml-2 bg-gray-700 text-gray-300">
                  {category === "All" ? blogPosts.length : blogPosts.filter((p) => p.category === category).length}
                </Badge>
              </Button>
            ))}
          </motion.div>

          {/* All Posts Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-gray-700 text-gray-300">{post.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-white group-hover:text-orange-400 transition-colors text-lg line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-400 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3 text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {post.likes}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 p-2"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Want to Read More?</h3>
            <p className="text-gray-400 mb-6">
              Follow my blog for regular updates on my learning journey and technical insights!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-full"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Visit Full Blog
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
