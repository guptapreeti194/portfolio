"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    institution: "Kalinga Institute of Industrial Technology (KIIT UNIVERSITY)",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "July 2023 – July 2027",
    location: "Bhubaneswar, India",
    grade: "8.33 GPA",
    year: "2027",
  },
  {
    institution: "Modern Academy",
    degree: "Class XII (CBSE)",
    duration: "April 2020 – April 2022",
    location: "Bihar, India",
    grade: "76.6%",
    year: "2022",
  },
  {
    institution: "Secondary Delhi Public School",
    degree: "Class X (CBSE)",
    duration: "April 2008 – April 2020",
    location: "Bihar, India",
    grade: "91.4%",
    year: "2020",
  },
]

export default function Education() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" ref={ref} className="section-shell relative overflow-hidden">
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
              <span className="section-kicker">My Journey</span>
            </motion.div>
            <h2 className="section-title text-foreground">Education</h2>
            <p className="section-lead mx-auto mt-4 max-w-2xl">
              A quick view of my academic path and the subjects that shaped my foundation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-10"
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="timeline-rail flex flex-col gap-6 md:flex-row">
                  {/* Year indicator */}
                  <div className="hidden md:flex md:flex-col items-center md:items-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-sm">
                      <span className="text-lg font-bold text-primary">{edu.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <motion.div
                    className="panel-soft flex-1 rounded-[1.75rem] p-6 md:p-7"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <div className="mb-3 inline-block rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {edu.degree}
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-foreground">{edu.institution}</h3>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                        <span>{edu.duration}</span>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-sky-600 flex-shrink-0" />
                        <span>{edu.location}</span>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground">
                        <Award className="h-4 w-4 mr-2 text-emerald-600 flex-shrink-0" />
                        <span>
                          Grade: <strong>{edu.grade}</strong>
                        </span>
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
