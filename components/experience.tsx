"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    position: "Artificial Intelligence Intern",
    company: "Infosys Springboard",
    duration: "Oct 2025 – Dec 2025",
    year: "2025",
    location: "Remote",
    description:
      "Built ClauseEase AI, an AI-powered document intelligence system to process and simplify complex text from PDFs, DOCX, and TXT files, integrated locally hosted LLaMA models using Ollama for question answering, summarization, and multi-language translation, designed an interactive Streamlit interface for real-time document analysis and chat-based interaction, and worked with NLP techniques and modular backend logic to handle document parsing and intelligent responses.",
    link: "https://infyspringboard.onwingspan.com/web/en/login",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "MySQL", "Python", "Streamlit", "NLP", "LLaMA (Ollama)"]
  },
  {
    position: "Contributor",
    company: "GirlScript Summer of Code (GSSoC) 2025",
    duration: "May 2025 – Aug 2025",
    year: "2025",
    location: "Remote",
    description:
      "Contributed to the open-source project 'GSSoC Website' by fixing bugs, implementing new features, and improving documentation. Collaborated with a global team of developers to enhance the user experience and functionality of the GSSoC platform.",
    link: "https://gssoc.girlscript.org/",
    skills: ["Open Source", "Bug Fixing", "Enhancement", "Feature Implementation", "Documentation"],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" ref={ref} className="section-shell relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/90 to-transparent" />
      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 bottom-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-6xl"
        >
          <motion.div className="mb-12 text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              className="inline-block mb-3"
            >
              <span className="section-kicker">Professional Path</span>
            </motion.div>
            <h2 className="section-title text-foreground">Work Experience</h2>
            <p className="section-lead mx-auto mt-4 max-w-2xl">
              Selected roles and contributions that show how I work in production settings.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-10"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="timeline-rail flex flex-col gap-6 md:flex-row">
                  {/* Year indicator */}
                  <div className="hidden md:flex md:flex-col items-center md:items-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-sm">
                      <span className="text-lg font-bold text-primary">
                        {exp.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <motion.div
                    className="panel-soft flex-1 overflow-hidden rounded-[1.75rem]"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <div className="h-1.5 bg-gradient-to-r from-primary via-sky-500 to-emerald-500" />

                    <div className="p-6 md:p-7">
                      {/* Position */}
                      <div className="flex items-start">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                          <div className="flex items-center mt-1">
                            <span className="font-medium text-primary">{exp.company}</span>
                            {exp.link && (
                              <Link
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-muted-foreground hover:text-primary"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="mt-4 space-y-4">
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-4 w-4 mr-1 text-primary" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-sky-600" />
                            {exp.location}
                          </div>
                        </div>

                        <p className="text-muted-foreground">{exp.description}</p>

                        {/* Skills */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
