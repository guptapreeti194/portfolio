"use client"

import { Github, Linkedin } from "lucide-react"

export default function Footer() {
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

  return (
    <footer className="border-t border-border bg-background/80 py-8 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">Preeti Gupta</p>
            <p className="mt-1 text-sm text-muted-foreground">Computer Science Student and Developer</p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <a
              href="https://github.com/guptapreeti194"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pg194/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>

          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
