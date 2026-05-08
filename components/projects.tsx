"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useMemo, useState } from "react"

const projects = [
  {
    category: "self",
    title: "NexSync",
    description:
      "A real-time collaborative coding platform with live code sync, chat, version history, and AI-powered code review features.",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "AI"],
    image: "/nexsync.png", // 👉 put your screenshot here
    //githubLink: "https://github.com/your-repo",
    date: "2026",
  },
  {
    category: "Semester Project",
    title: "AlgoCity",
    description:
      "A structured DSA learning platform where users can practice problems step by step.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/algo-city.png",
   // githubLink: null,
    date: "2026",
  },
  {
    category: "Semester Project",
    title: "ChronoDB",
    description:
      "A time-travel database system with versioning and efficient data retrieval.",
    technologies: ["C++", "DBMS"],
    image: "/chrono-db.png",
    githubLink: null,
    date: "2026",
  },
  {
    category: "hackathon",
    title: "Personal CRM Intelligence",
    description:
      "An AI-based CRM system for managing contacts and smart follow-ups.",
    technologies: ["React", "Node.js", "AI"],
    image: "/projects/crm.png",
    githubLink: null,
    date: "Hackathon",
  },
  {
    category: "self",
    title: "Bug Detective",
    description:
      "AI-powered system to detect bugs and generate test cases.",
    technologies: ["Python", "AI"],
    image: "/bug-detective.png",
    githubLink: null,
    date: "Main Project",
  },
  {
    category: "self",
    title: "StudyLife Pro",
    description:
      "A productivity platform to track study progress and tasks.",
    technologies: ["Next.js", "Firebase"],
    image: "/study-life.png",
    githubLink: null,
    date: "2026",
  },
  {
    category: "self",
    title: "Resume Screening System",
    description:
      "AI-based system to filter and rank resumes automatically.",
    technologies: ["Python", "ML"],
    image: "/rs.png",
    githubLink: null,
    date: "2026",
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"self" | "Semester Project" | "hackathon">("self")
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })

  const visibleProjects = useMemo(
    () => projects.filter((p) => p.category === activeTab),
    [activeTab]
  )

  return (
    <section id="projects" ref={ref} className="section-shell relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto max-w-6xl"
        >
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="section-kicker">My Work</span>
            <h2 className="section-title">Projects</h2>

            <div className="mt-6 inline-flex border p-1 rounded-full">
              {["self", "Semester Project", "hackathon"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-4 py-2 rounded-full ${
                    activeTab === tab ? "bg-black text-white" : ""
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-12">
            {visibleProjects.map((project) => (
              <div key={project.title} className="rounded-xl overflow-hidden border">
                <div className="md:grid md:grid-cols-2">

                  {/* IMAGE */}
                  <div className="relative aspect-video overflow-hidden rounded-xl">
  <img
    src={project.image || "/placeholder.svg"}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
  />
                    <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black/70">
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        {project.date}
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 border rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="mb-4 text-gray-500">{project.description}</p>

                    {/* GITHUB BUTTON */}
                    {project.githubLink && (
                      <Button asChild variant="outline">
                        <Link href={project.githubLink} target="_blank">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-10 text-center">
            <Button asChild variant="ghost">
              <Link href="https://github.com/guptapreeti194" target="_blank">
                View More Projects on GitHub
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}