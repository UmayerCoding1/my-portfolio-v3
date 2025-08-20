'use client';
import { Button } from "@/components/ui/button";

import { Github, Linkedin, Mail, Download } from "lucide-react";
import { LiveCodingAnimation } from "./live-coding-animation";
import Link from "next/link";

export function HeroSection() {

  const scrollTo = (href: string) => {
      const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <section className="min-h-screen  flex items-center max-w-7xl mx-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-accent/10 text-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  Available for new opportunities
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-primary">Umayer Hossain</span>
              </h1>

              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                Full-Stack Developer
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I craft scalable web applications using modern technologies like
                Node.js, TypeScript, and Next Js. Passionate about clean code,
                performance optimization, and creating exceptional user
                experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                 onClick={() => scrollTo("#contact")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>

              <Link href="/Md Umayer Hossain.pdf" target="_blank" download={true}>
              <Button variant="outline" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button></Link>
            </div>

            <div className="flex gap-4">
              <Link href={"https://github.com/UmayerCoding1"} target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                >
                  <Github className="w-5 h-5" />
                </Button>
              </Link>
              <Link href={'https://www.linkedin.com/in/umayer-hossain-604999351/'} target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </Link>
               <Link
      href="https://mail.google.com/mail/?view=cm&fs=1&to=umayer.hossain10@gmail.com" // আপনার ইমেইল বসান
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="ghost"
        size="icon"
        className="hover:text-primary"
      >
        <Mail className="w-5 h-5" />
      </Button>
    </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                'MongoDB',
                'Tailwind CSS'
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Live Coding Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl">
              <LiveCodingAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
