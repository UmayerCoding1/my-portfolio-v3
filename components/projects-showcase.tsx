"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/mock-data";

type projectType =
  | {
      id: number;
      title: string;
      description: string;
      image: string;
      category: string;
      tech: string[];
      github?: string;
      client?: string;
      server?: string;
      live: string;
      // stars: number;
      // forks: number;
      date: string;
    }
  | undefined;
export default function ProjectsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<projectType | null>(
    null
  );
  const [showSelectedProject, setShowSelectedProject] = useState(false);

  const categories = [
    "All",
    "Full-stack",
    "Frontend",
    "Personal",
    "Learning",
    // "Academic",
  ];

 

  const handleSelectedProject = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId);
    setSelectedProject(project);
    setShowSelectedProject(true);
  };

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/30 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Projects
          </h2>

          {/* filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((c) => (
              <Button
                key={c}
                size="sm"
                variant={activeFilter === c ? "default" : "outline"}
                className={
                  activeFilter === c
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "border-gray-600 hover:border-gray-500 bg-transparent"
                }
                onClick={() => setActiveFilter(c)}
              >
                {c}
                <Badge
                  variant="secondary"
                  className="ml-2 bg-gray-700 text-gray-300"
                >
                  {c === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === c).length}
                </Badge>
              </Button>
            ))}
          </div>

          {/* projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={p.image || "/placeholder.svg"}
                        alt={p.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <Badge
                          variant="outline"
                          className="border-blue-500/50 text-blue-400 text-xs"
                        >
                          {p.date}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-white text-lg flex items-center gap-2 justify-between">
                        {p.title}
                        <Badge
                          className={`
                          ${p.status === "Production" && "bg-green-500"}
                          ${p.status === "Development" && "bg-blue-500"}
                          ${p.status === "In Progress" && "bg-yellow-500"}
                          
                          `}
                        >
                          {p.status}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="text-gray-400 text-sm line-clamp-2">
                        {p.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {p.tech.slice(0, 5).map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="bg-gray-700/50 text-gray-300 text-xs"
                          >
                            {t}
                          </Badge>
                        ))}
                        {p.tech.length > 5 && (
                          <Badge
                            onClick={() => handleSelectedProject(p.id)}
                            variant="secondary"
                            className="bg-[#7E22CE] text-gray-300 hover:bg-[#580f98] cursor-pointer text-xs"
                          >
                            more+
                          </Badge>
                        )}
                      </div>

                     

                      <div className="flex gap-2">
                        {p.github && (
                          <Link href={p?.github || "#"} className="flex-1">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full border-gray-600 hover:border-gray-500 bg-transparent"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </Link>
                        )}

                        {p.client && (
                          <Link href={p?.client || "#"} className="flex-1">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full border-gray-600 hover:border-gray-500 bg-transparent"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Client
                            </Button>
                          </Link>
                        )}
                        {p.server && (
                          <Link href={p?.server || "#"} className="flex-1">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full border-gray-600 hover:border-gray-500 bg-transparent"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Server
                            </Button>
                          </Link>
                        )}
                        {p.live && (
                          <Link href={p.live} className="flex-1">
                            <Button
                              size="sm"
                              className="w-full bg-purple-600 hover:bg-purple-700"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      
    </section>
  );
}
