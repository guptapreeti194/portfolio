"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Code, CheckCircle2, TrendingUp, Award } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Static data for coding profiles
const codingProfiles = [
  {
    platform: "Codeforces",
    username: "guptapreeti194",
    //rating: "1388",
    //rank: "Pupil",
    //solved: "227 Problems",
    //contests: "17 contests",
    link: "https://www.codechef.com/users/guptapreeti194",
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
    textColor: "text-white",
    icon: <Code className="h-5 w-5" />,
  },
  {
    platform: "GeeksforGeeks",
    username: "preetigbpih",
    //rating: "1668",
    //rank: "3 Star",
    solved: "10+ problems",
    contests: "0 contests",
    link: "https://practice.geeksforgeeks.org/leaderboard",
    color: "bg-gradient-to-r from-amber-500 to-amber-600",
    textColor: "text-white",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    platform: "LeetCode",
    username: "preeti_gupta194",
   // rating: "1,588",
   // rank: "",
   // solved: "72 problems",
    //contests: "1 contests",
    link: "https://leetcode.com/u/preeti_gupta194/",
    color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
    textColor: "text-white",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    platform: "GitHub",
    username: "guptapreeti194",
    rating: "",
    rank: "",
    repos: "23 repositories",
    contributions: "1583 contributions",
    link: "https://github.com/guptapreeti194",
    color: "bg-gradient-to-r from-gray-700 to-gray-800",
    textColor: "text-white",
    icon: <Award className="h-5 w-5" />,
  },
]

export default function CodingProfiles() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [expandedProfile, setExpandedProfile] = useState<number | null>(null)

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
    <section id="coding" ref={ref} className="section-shell relative overflow-hidden">
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
              <span className="section-kicker">My Profiles</span>
            </motion.div>
            <h2 className="section-title text-foreground">Coding Profiles</h2>
            <p className="section-lead mx-auto mt-4 max-w-2xl">
              The competitive programming and open-source profiles I use to track growth.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid gap-6 md:grid-cols-2"
          >
            {codingProfiles.map((profile, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                layoutId={`profile-${index}`}
              >
                <motion.div
                  className={`panel-soft overflow-hidden rounded-[1.75rem] transition-all duration-300 ${
                    expandedProfile === index ? "scale-105 z-20" : "hover:-translate-y-2"
                  }`}
                  onClick={() => setExpandedProfile(expandedProfile === index ? null : index)}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <div className="mr-3 rounded-2xl bg-primary/10 p-2 text-primary">{profile.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{profile.platform}</h3>
                          <p className="text-sm text-muted-foreground">@{profile.username}</p>
                        </div>
                      </div>
                      <Link
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>

                    {profile.rating && (
                      <div className="mb-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Rating</span>
                          <span className="font-bold text-foreground">{profile.rating}</span>
                        </div>
                        {profile.rank && (
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Rank</span>
                            <span className="text-foreground">{profile.rank}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Expanded details */}
                    {expandedProfile === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 border-t border-border pt-4"
                      >
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {profile.solved && (
                            <div>
                              <p className="text-muted-foreground">Solved</p>
                              <p className="font-medium text-foreground">{profile.solved}</p>
                            </div>
                          )}
                          {profile.contests && (
                            <div>
                              <p className="text-muted-foreground">Contests</p>
                              <p className="font-medium text-foreground">{profile.contests}</p>
                            </div>
                          )}
                          {profile.repos && (
                            <div>
                              <p className="text-muted-foreground">Repositories</p>
                              <p className="font-medium text-foreground">{profile.repos}</p>
                            </div>
                          )}
                          {profile.contributions && (
                            <div>
                              <p className="text-muted-foreground">Contributions</p>
                              <p className="font-medium text-foreground">{profile.contributions}</p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Click to expand indicator */}
                {expandedProfile !== index && (
                  <div className="absolute bottom-3 right-3 rounded-full border border-border bg-background/70 px-2 py-1 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    Click for details
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            * Click on a profile card to see more details
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
