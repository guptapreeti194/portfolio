"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="dark:absolute dark:inset-0 dark:-z-10 dark:bg-[linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] dark:bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[80vh] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl">
              Hi, I&apos;m
              <br />
              Preeti.
            </h1>

            <p className="mt-8 max-w-2xl text-3xl font-medium leading-snug text-foreground/90 md:text-5xl">
              Pre final year student at KIIT UNIVERSITY.
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              Over the past years at KIIT UNIVERSITY, I&apos;ve worked across full-stack development,
              competitive coding, and machine learning, building a strong project portfolio.
            </p>

            {/* <div className="mt-10">
              <Button asChild className="rounded-full px-7">
                <Link href="#about">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mx-auto w-full max-w-xl"
          >
            <div className="mx-auto aspect-square w-[16rem] overflow-hidden rounded-full border-4 border-card shadow-xl sm:w-[20rem] md:w-[24rem]">
              <Image
                src="/Original.png"
                alt="Preeti Gupta"
                width={800}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
