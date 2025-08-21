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
const SmarJobAi = "smartJobAi.png";

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

  const projects = [
    {
      id: 1,
      title: "Smart Job AI",
      description:
        "An AI-powered job matching platform that connects job seekers with their perfect opportunities using intelligent resume analysis and personalized job recommendations.",
      image: SmarJobAi,
      category: "Full-stack",
      tech: [
        "Next js",
        "TypeScript",
        "Mongoose",
        "Redux Toolkit",
        "Zod",
        "React-hook-form",
        "Tanstack Query",
        "Axios",
        "ImageKit",
        "bcryptjs",
        "Json Web Token",
        "Tailwind CSS",
        "Shadcn UI",
        "react-countup",
        "react-day-picker",
        "react-redux",
        "recharts",
        "sonner",
        "lucide-react",
        "framer-motion",
      ],
      github: "https://github.com/UmayerCoding1/next-smart-job-ai",
      live: "https://next-smart-job-ai.vercel.app",
      date: "2025",
      status: "Development",
    },
    {
      id: 2,
      title: "Carsetgo",
      description:
        "CarSetGo is a modern MERN stack platform for renting and selling cars, enhanced with AI features like auto description generation and image analysis. It supports user, seller, and admin roles with secure JWT auth, Stripe payments, Cloudinary uploads, and a smooth UI using Tailwind and Framer Motion.",
      image: "https://umayer--hossain.vercel.app/assets/carsetgo-D3GCAZXZ.png",
      category: "Full-stack",
      tech: [
        "mongoose",
        "Express",
        "React",
        "Node.js",
        "Tailwind CSS",
        "axios",
        "bcryptjs",
        "googleapis",
        "react-router-dom",
        "lucide-react",
        "sonner",
        "tanstack-query",
        "react-hook-form",
        "react-dropzone",
        "react-chartjs-2",
        "motion",
        "chart.js",
        "json webtoken",
        "helmet",
        "stripe",
        "multer",
        "cloudinary",
      ],
      client: "https://github.com/UmayerCoding1/CarSetGo/tree/main/client",
      server: "https://github.com/UmayerCoding1/CarSetGo/tree/main/server",
      live: "https://carsetgo.vercel.app",
      date: "2025",
      status: "Production",
    },
    {
      id: 3,
      title: "TravelBD",
      description:
        "A full-stack travel agency website featuring user authentication, destination management, booking system, and payment integration. Users can browse destinations, make bookings, and process payments securely. Admins can manage destinations, track bookings, and view analytics through an intuitive dashboard.",
      image: "https://umayer--hossain.vercel.app/assets/travelbd-CBjAG_vX.png",
      category: "Full-stack",
      tech: [
        "@types/mongoose-aggregate-paginate-v2",
        "bcrypt",
        "cloudinary",
        "cookie-parser",
        "cors",
        "dotenv",
        "express",
        "jsonwebtoken",
        "mongoose",
        "multer",
        "npm",
        "sslcommerz-lts",
        "aos",
        "axios",
        "chart.js",
        "date-fns",
        "dayjs",
        "firebase",
        "react",
        "react-chartjs-2",
        "react-date-range",
        "react-datepicker",
        "react-dom",
        "react-helmet",
        "react-hook-form",
        "react-hot-toast",
        "react-icons",
        "react-query",
        "react-router",
        "react-router-dom",
        "react-slick",
        "swiper",
        "tailwind-scrollbar",
      ],
      client: "https://github.com/UmayerCoding1/travelbd-client",
      server: "https://github.com/UmayerCoding1/travelbd-server",
      live: "https://travelbd-158bd.web.app",
      date: "2024",
      status: "Production",
    },
    {
      id: 4,
      title: "E Market Hub",
      description:
        "A full-stack e-commerce platform with user authentication, product management, cart functionality, and payment integration.",
      image: "https://umayer--hossain.vercel.app/assets/ecoommers-DU9PnGyf.png",
      category: "Full-stack",
      tech: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Tailwind CSS",
        "axios",
        "react-router-dom",
        "react-hook-form",
        "react-icons",
        "react-hot-toast",
        "tanstack-query",
        "react-tabs",
        "swiper",
        "firebase",
        "react-pdf",
        "MUI",
        "json webtoken",
        "helmet",
        "sslcommerz",
        "multer",
        "cloudinary",
      ],
      client: "https://github.com/UmayerCoding1/eMarket-hub-client",
      server: "https://github.com/UmayerCoding1/E-Market-hub-server",
      live: "https://emarket-hub.web.app",
      date: "2024",
      status: "Production",
    },
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

                      {/* <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {p.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            {p.forks}
                          </div>
                        </div>
                      </div> */}

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

      {showSelectedProject && (
        <div
          onClick={() => setShowSelectedProject(false)}
          className="absolute top-0 left-0 bg-black/50  w-full h-screen flex items-center justify-center p-3"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white  w-1/3 h-[500px] text-black text-2xl rounded-lg"
          >
            <p
              className=" top-2 right-2 cursor-pointer z-10 text-2xl inline-block"
              onClick={() => setShowSelectedProject(false)}
            >
              X
            </p>
            <Image
              src={selectedProject?.image || "/placeholder.svg"}
              alt={selectedProject?.title || "Project"}
              width={500}
              height={300}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
            />

            <div className="p-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  {selectedProject?.title}
                </h2>
                <p className="text-sm text-gray-500 font-medium">
                  {selectedProject?.description}
                </p>

                <div className="flex flex-wrap gap-1  my-10">
                  {selectedProject?.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-black text-gray-300 text-xs"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
