"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, MapPin, User, Code, Briefcase, ExternalLink, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" ref={ref} className="section-shell relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/90 to-transparent" />
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={itemVariants} className="mb-10 text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              className="inline-block mb-3"
            >
              <span className="section-kicker">About Me</span>
            </motion.div>
            <h2 className="section-title text-foreground">Who I Am</h2>
            <p className="section-lead mx-auto mt-4 max-w-2xl">
              A compact overview of my background, current focus, and the kind of work I enjoy doing most.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Profile Card */}
            <motion.div
              variants={itemVariants}
              className="panel-soft md:col-span-1 overflow-hidden rounded-[1.75rem] hover-lift"
            >
              <div className="flex h-full flex-col p-6">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 rounded-2xl bg-primary/10 p-3">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Preeti Gupta</h3>
                </div>

                <p className="mb-6 text-sm text-muted-foreground">
                  Computer Science student at KIIT UNIVERSITY with a passion for software development and problem-solving.
                </p>

                {/* Contact Info */}
                <div className="mt-auto space-y-3">
                  <div className="flex items-center rounded-2xl border border-border bg-background/60 p-3">
                    <div className="mr-3 rounded-xl bg-primary/10 p-2">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium text-foreground">preeti.gt2004@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center rounded-2xl border border-border bg-background/60 p-3">
                    <div className="mr-3 rounded-xl bg-sky-500/10 p-2">
                      <MapPin className="h-4 w-4 text-sky-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-medium text-foreground">Bhubaneswar, Odisha, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center mt-6 space-x-4">
                  <Link
                    href="https://github.com/guptapreeti194"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border bg-background/70 p-2 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/pg194/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border bg-background/70 p-2 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="panel-soft overflow-hidden rounded-[1.75rem] hover-lift md:col-span-2">
              <div className="p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="mb-4 flex items-start">
                      <div className="mr-4 rounded-2xl bg-primary/10 p-3">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">Technical Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {["C++", "Java", "Python", "JavaScript", "React", "Next.js", "Express.js", "MySQL"].map(
                            (skill, index) => (
                              <span
                                key={index}
                                className="rounded-full border border-border bg-background/70 px-2 py-1 text-xs font-medium text-muted-foreground"
                              >
                                {skill}
                              </span>
                            ),
                          )}
                          <Link
                            href="#skills"
                            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                          >
                            More <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 flex items-start">
                      <div className="mr-4 rounded-2xl bg-sky-500/10 p-3">
                        <Briefcase className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">Experience</h3>
                        <p className="text-sm text-muted-foreground">
                          Right now, I’m working on real-time systems and backend development, trying to understand how scalable applications are actually built in practice.
                        </p>
                        <Link href="#experience" className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:underline">
                          View details <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <div className="flex items-start">
                    <div className="mr-4 rounded-2xl bg-emerald-500/10 p-3">
                      <User className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">About Me</h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        Computer Science student at KIIT UNIVERSITY with a passion for web development, competitive programming,
                        and open-source contributions. Currently working on real-time systems and scalable backend
                        architectures.
                      </p>

                      <div className="mt-4 rounded-2xl border border-primary/15 bg-primary/8 p-4">
                        <p className="text-sm italic text-foreground/90">
                          "I believe in creating technology that makes a positive impact on people's lives."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
