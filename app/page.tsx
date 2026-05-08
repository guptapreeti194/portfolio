"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import CodingProfiles from "@/components/coding-profiles"
import Education from "@/components/education"
import Achievements from "@/components/achievements"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import MobileNav from "@/components/mobile-nav"

export default function Home() {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    // Force the initial active section to be "home"
    const forceHomeActive = () => {
      // Dispatch a scroll event to trigger the active section detection
      window.scrollTo(0, 0)
      setTimeout(() => {
        window.dispatchEvent(new Event("scroll"))
      }, 100)
    }

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault()
        const targetId = anchor.hash.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Scroll to the target element with smooth behavior
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for navbar
            behavior: "smooth",
          })

          // Update URL without causing a page reload
          window.history.pushState(null, "", anchor.hash)
        }
      }
    }

    // Handle initial hash navigation
    const handleInitialHashNavigation = () => {
      // Check if there's a hash in the URL on page load
      if (window.location.hash) {
        const id = window.location.hash.substring(1)
        const element = document.getElementById(id)

        if (element) {
          // Add a slight delay to ensure all components are rendered
          setTimeout(() => {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: "smooth",
            })
          }, 100)
        }
      } else {
        // If no hash, ensure we're at the top and "home" is active
        window.scrollTo(0, 0)
      }
    }

    document.addEventListener("click", handleAnchorClick)
    handleInitialHashNavigation()
    forceHomeActive()

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return (
    <main className="site-shell min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CodingProfiles />
      <Experience />
      <Education />
      <Achievements />
      <Footer />
      <ScrollToTop />
      <MobileNav />
    </main>
  )
}
