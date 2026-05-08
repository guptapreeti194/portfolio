"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Home, User, Code, FolderOpen, Award, Briefcase, GraduationCap, Trophy } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home", icon: <Home className="h-5 w-5" /> },
  { name: "About", href: "#about", icon: <User className="h-5 w-5" /> },
  { name: "Skills", href: "#skills", icon: <Code className="h-5 w-5" /> },
  { name: "Projects", href: "#projects", icon: <FolderOpen className="h-5 w-5" /> },
  { name: "Coding", href: "#coding", icon: <Award className="h-5 w-5" /> },
  { name: "Experience", href: "#experience", icon: <Briefcase className="h-5 w-5" /> },
  { name: "Education", href: "#education", icon: <GraduationCap className="h-5 w-5" /> },
  { name: "Achievements", href: "#achievements", icon: <Trophy className="h-5 w-5" /> },
]

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState("home")
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      // Scroll to the target element with smooth behavior
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for navbar
        behavior: "smooth",
      })

      // Update URL without causing a page reload
      window.history.pushState(null, "", `#${sectionId}`)
    }
  }

  // Scroll active item into view
  useEffect(() => {
    if (mounted && scrollContainerRef.current) {
      const activeItem = document.getElementById(`mobile-nav-${activeSection}`)
      if (activeItem) {
        const container = scrollContainerRef.current
        const scrollLeft = activeItem.offsetLeft - container.offsetWidth / 2 + activeItem.offsetWidth / 2

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        })
      }
    }
  }, [activeSection, mounted])

  useEffect(() => {
    setMounted(true)
    // Explicitly set the active section to "home" on initial load
    setActiveSection("home")

    const handleScroll = () => {
      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))

      // Find the current section in view
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check for active section
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-3 left-3 right-3 z-50 md:hidden rounded-[1.5rem] border border-border bg-card/80 shadow-2xl backdrop-blur-2xl">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto py-2 px-2 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {navItems.map((item) => (
          <button
            key={item.name}
            id={`mobile-nav-${item.href.substring(1)}`}
            onClick={() => scrollToSection(item.href.substring(1))}
            className={`flex flex-col items-center justify-center min-w-[4.5rem] px-3 py-2 mx-1 rounded-2xl transition-colors relative ${
              activeSection === item.href.substring(1)
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-accent/70 hover:text-foreground"
            }`}
          >
            {item.icon}
            <span className="text-xs mt-1 whitespace-nowrap">{item.name}</span>
            {activeSection === item.href.substring(1) && (
              <motion.div
                layoutId="mobileActiveSection"
                className="absolute bottom-0 left-0 right-0 mx-auto w-10 h-0.5 bg-primary dark:bg-primary/80 rounded-full"
                style={{ bottom: "2px" }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
