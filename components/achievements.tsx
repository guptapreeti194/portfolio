"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Trophy, Medal, Target, Code, Award } from "lucide-react"

const achievements = [
  {
    title: "Amazon HackOn Season 5",
    description: "Cleared DSA round.",
    icon: <Code className="h-6 w-6" />,
    label: "Hackathon",
    link: "",
  },
  {
    title: "PROGRAMMING CAMP 2026",
    description: "Conquered 9 advanced graphs problems.",
    icon: <Code className="h-6 w-6" />,
    label: "Competition",
    link: "",
  },
  {
    title: "Amazon ML Summer School 2025",
    description: "Successfully shortlisted for Amazon ML Summer School 2025.",
    icon: <Award className="h-6 w-6" />,
    label: "ML",
    link: "",
  },
  // {
  //   title: "Mahindra Catapult Techathon 2.0",
  //   description: "Finalist Mahindra Catapult Techathon 2.0.",
  //   icon: <Award className="h-6 w-6" />,
  //   label: "Hackathon",
  //   link: "",
  // },
  // {
  //   title: "Thales GenTech India Hackathon 2025",
  //   description: "Qualified for finals at Thales GenTech India Hackathon 2025.",
  //   icon: <Trophy className="h-6 w-6" />,
  //   label: "Hackathon",
  //   link: "",
  // },
  {
    title: "Tata Imagination 2025",
   // description: "Semi-finalist at Tata Imagination 2025.",
    icon: <Medal className="h-6 w-6" />,
    label: "Hackathon",
    link: "",
  },
  
  // {
  //   title: "University Merit Scholarship",
  //   description: "Awarded for securing a position in the top 5% of students in the department during 2023–24.",
  //   icon: <Trophy className="h-6 w-6" />,
  //   label: "Scholarship",
  //   link: "",
  // },
  // {
  //   title: "BRICSMATH 2021",
  //   description: "Secured 1st rank in the competition.",
  //   icon: <Medal className="h-6 w-6" />,
  //   label: "Competition",
  //   link: "",
  // },
  // {
  //   title: "SOF-IMO 2021-22",
  //   description: "Secured 2nd rank in the International Mathematics Olympiad.",
  //   icon: <Target className="h-6 w-6" />,
  //   label: "Olympiad",
  //   link: "",
  // },
]

export default function Achievements() {
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

  return (
    <section id="achievements" ref={ref} className="section-shell relative overflow-hidden">
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
              <span className="section-kicker">Recognition</span>
            </motion.div>
            <h2 className="section-title text-foreground">Achievements</h2>
            <p className="section-lead mx-auto mt-4 max-w-2xl">A simple snapshot of a few recognitions and wins.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid gap-4 sm:grid-cols-2"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="panel-soft rounded-[1.5rem] p-5 transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex rounded-xl border border-border bg-muted/70 p-2.5 text-foreground">
                    {achievement.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {achievement.label}
                    </p>
                    <h4 className="mt-1 text-base font-semibold leading-6 text-foreground">{achievement.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">Continuously striving for excellence and new challenges.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
