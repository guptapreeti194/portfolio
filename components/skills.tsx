"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const allSkills = [
  "C++",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "SQL",
  "React JS",
  "Next JS",
  "Node JS",
  "Express JS",
  "Firebase",
  "MongoDB",
  "MySQL",
  "Drizzle ORM",
  "Git",
  "Postman",
  "VSCode",
  "Sublime Text",
  "Docker",
  "Apache Kafka",
  "Grafana",
  "Prometheus",
  "Loki",
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="skills" ref={ref} className="section-shell relative overflow-hidden">
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
              <span className="section-kicker">My Expertise</span>
            </motion.div>
            <h2 className="section-title text-foreground">Technical Skills</h2>
            <p className="section-lead mx-auto mt-4 max-w-2xl">
              The stack I use most often to build reliable products and ship quickly.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="panel-soft overflow-hidden rounded-[1.75rem] p-6 md:p-8"
            >
              <div className="flex flex-wrap gap-2.5">
                {allSkills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    transition={{ duration: 0.25, delay: 0.1 + skillIndex * 0.02 }}
                    className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-600 dark:bg-slate-700/70 dark:text-slate-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground italic">
              Continuously learning and expanding my technical skillset
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
