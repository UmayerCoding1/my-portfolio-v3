import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Md. Umayer Hossain - Full Stack Developer | MERN Stack Expert",
  icons: {
    icon: "favicon.ico", 
  },
  description:
    "Experienced Full Stack Web Developer specializing in MERN stack development. Creating innovative digital solutions with React, Node.js, MongoDB, and modern web technologies. Based in Bangladesh, working globally.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Express.js",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Bangladesh",
    "Freelancer",
  ].join(", "),
  authors: [{ name: "Md. Umayer Hossain", url: "https://umayerhossain.dev" }],
  creator: "Md. Umayer Hossain",
  openGraph: {
    title: "Md. Umayer Hossain - Full Stack Developer",
    description:
      "Experienced Full Stack Web Developer specializing in MERN stack development. Creating innovative digital solutions with modern web technologies.",
    type: "website",
    locale: "en_US",
    siteName: "Umayer Hossain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Umayer Hossain - Full Stack Developer",
    description:
      "Experienced Full Stack Web Developer specializing in MERN stack development. Creating innovative digital solutions.",
    creator: "@umayerhossain",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
