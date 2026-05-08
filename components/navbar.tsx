"use client"

import { useState, useEffect, useCallback } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Coding", href: "#coding" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Function to handle smooth scrolling
  const scrollToSection = useCallback((sectionId: string) => {
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      // Close the mobile menu first
      setIsMenuOpen(false)
      
      // Add a small delay to allow menu to close smoothly
      setTimeout(() => {
        // Get the navbar height for proper offset
        const navbar = document.querySelector('header')
        const navbarHeight = navbar ? navbar.offsetHeight : 80
        
        // Calculate the target position
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight - 20 // Extra 20px padding
        
        // Scroll to the target element with smooth behavior
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })

        // Update URL without causing a page reload
        window.history.pushState(null, "", `#${sectionId}`)
      }, isMenuOpen ? 300 : 0) // Delay only if menu was open
    }
  }, [isMenuOpen])

  useEffect(() => {
    setMounted(true)
    // Explicitly set the active section to "home" on initial load
    setActiveSection("home")

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1))
      
      // Get navbar height for accurate calculation
      const navbar = document.querySelector('header')
      const navbarHeight = navbar ? navbar.offsetHeight : 80
      const scrollOffset = navbarHeight + 50 // Add some extra offset

      // Find the current section in view
      let currentSection = "home" // Default to home
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if section is in viewport considering navbar height
          if (rect.top <= scrollOffset && rect.bottom >= scrollOffset) {
            currentSection = section
            break
          }
        }
      }
      
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check for active section
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.querySelector('header')
      if (navbar && !navbar.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  if (!mounted) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 shadow-sm backdrop-blur-xl py-2" : "bg-background/65 backdrop-blur-xl py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 text-left">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-card text-sm font-semibold text-foreground shadow-sm">
              PG
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Preeti <span className="text-primary">Gupta</span>
            </span>
          </button>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden items-center gap-1 rounded-full border border-border bg-card/70 p-1.5 shadow-sm backdrop-blur-xl md:flex"
        >
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href.substring(1))}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="desktopActiveNav"
                  className="absolute inset-0 -z-10 rounded-full bg-foreground shadow-sm"
                  transition={{ type: "tween", duration: 0.2 }}
                />
              )}
            </button>
          ))}
        </motion.nav>

        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full border-border bg-card/80"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:hidden"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-border bg-card/80"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ rotate: isMenuOpen ? -90 : 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: isMenuOpen ? 90 : -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/30 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-glass shadow-2xl overflow-hidden relative z-10 border-b border-border"
            >
              <nav className="flex flex-col py-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        scrollToSection(link.href.substring(1))
                      }}
                      className={`px-6 py-3 text-sm font-medium block transition-colors w-full text-left touch-manipulation ${
                        activeSection === link.href.substring(1)
                          ? "text-foreground bg-muted"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/70"
                      }`}
                    >
                      {link.name}
                    </button>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
