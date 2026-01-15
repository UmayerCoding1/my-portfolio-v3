"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Loader2 } from "lucide-react"
import { projects } from "@/lib/mock-data"

interface ProjectData {
   id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tech: string[];       // array of technologies used
  client?: string;       // client repo URL
  server?: string;       // server repo URL
  live: string;         // live demo URL
  date: string;         // project year
  status: string;   
}



export default function ProjectDetailsPage({ params }: { params: { id: number } }) {
    
  const [project, setProject] = useState<ProjectData | null>(null)

  useEffect(() => {
    const projectId = Number(params.id);
    const project = projects.find((p) => p.id === projectId)
    console.log( 'Project id',typeof projectId);
    setProject(project || null)
  }, [params.id])

  

  if (!projects) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0C1220] to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project not found</h1>
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  if(!project){
    return <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin"/>
    </div>
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0C1220] to-slate-950">
      {/* Header Navigation */}
      <header className="border-b border-slate-700/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all"
          >
            <ExternalLink size={18} />
            View Live
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-4 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium">
                  {project.category}
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">{project.title}</h1>
                <p className="text-lg text-slate-300 leading-relaxed max-w-lg">{project.description}</p>
              </div>

              {/* Status and Date */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Status</p>
                  <p className="text-lg font-semibold text-green-400">{project.status}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Release Date</p>
                  <p className="text-lg font-semibold text-white">{project.date}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-0.5"
                >
                  Live Demo
                </a>
                {project.client && (
                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-slate-700/50 border border-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
                  >
                    <Github size={18} />
                    Client Code
                  </a>
                )}
                {project.server && (
                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-slate-700/50 border border-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
                  >
                    <Github size={18} />
                    Server Code
                  </a>
                )}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-slate-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1220]/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 sm:py-24 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-slate-300 text-lg">
              Built with modern tools and frameworks for optimal performance and scalability.
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {project.tech.map((tech, index) => (
              <div
                key={index}
                className="group px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all backdrop-blur-sm"
              >
                <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "User Authentication",
                description: "Secure login and registration system with JSON Web Tokens",
              },
              {
                title: "Product Management",
                description: "Comprehensive admin panel for managing products and inventory",
              },
              {
                title: "Shopping Cart",
                description: "Intuitive cart functionality with real-time updates",
              },
              {
                title: "Payment Integration",
                description: "Secure payment processing with SSLCommerz integration",
              },
              {
                title: "File Upload",
                description: "Cloud-based image management with Cloudinary",
              },
              {
                title: "Responsive Design",
                description: "Mobile-first approach with Tailwind CSS styling",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Interested in this project?</h2>
          <p className="text-slate-300 text-lg mb-8">Explore the live demo to see the platform in action.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/50"
            >
              View Live Project
            </a>
            <Link
              href="/"
              className="px-8 py-3 bg-slate-700/50 border border-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
