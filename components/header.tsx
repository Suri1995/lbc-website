"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

type ActiveKey = "home" | "about" | "projects" | "contact"

function getActiveFromHash(hash: string): ActiveKey {
  if (hash === "#about") return "about"
  if (hash === "#projects") return "projects"
  if (hash === "#contact") return "contact"
  return "home"
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [active, setActive] = useState<ActiveKey>("home")

  useEffect(() => {
    const sync = () => setActive(getActiveFromHash(window.location.hash))
    sync()
    window.addEventListener("hashchange", sync)
    return () => window.removeEventListener("hashchange", sync)
  }, [])

  const navClass = (id: ActiveKey) =>
    `font-medium whitespace-nowrap transition-colors ${
      active === id ? "text-cyan-200" : "text-white/90 hover:text-cyan-200"
    }`

  const mobileNavClass = (id: ActiveKey) =>
    `text-sm font-medium transition-colors ${
      active === id ? "text-cyan-200" : "text-white/90 hover:text-cyan-200"
    }`

  const handleNavClick = (id: ActiveKey) => {
    setActive(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-[500] w-full border-b border-white/10 backdrop-blur bg-black/80">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10 2xl:px-16 flex h-16 xl:h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-2" onClick={() => handleNavClick("home")}>
          <Image
            src="/lbc-logo.png"
            alt="LBC Groups"
            width={180}
            height={64}
            className="h-10 lg:h-11 xl:h-12 2xl:h-[70px] w-auto"
            priority
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">
          <div className="flex items-center gap-8">
            <a href="/" className={navClass("home")} onClick={() => handleNavClick("home")}>
              Home
            </a>

            <a href="/#about" className={navClass("about")} onClick={() => handleNavClick("about")}>
              About Us
            </a>

            <a
              href="/#projects"
              className={navClass("projects")}
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </a>

            <a
              href="/#contact"
              className={navClass("contact")}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-cyan-100 hover:bg-cyan-200 text-black px-4 lg:px-5 xl:px-6 2xl:px-8 h-9 lg:h-10 xl:h-11 2xl:h-12 text-sm lg:text-base xl:text-lg"
            >
              <a href="/#contact" onClick={() => handleNavClick("contact")}>
                Enquire Now
              </a>
            </Button>
          </div>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur">
          <nav className="mx-auto w-full max-w-[1600px] 2xl:max-w-[1900px] px-4 sm:px-6 lg:px-10 2xl:px-16 flex flex-col gap-4 py-4">
            <a href="/" className={mobileNavClass("home")} onClick={() => handleNavClick("home")}>
              Home
            </a>

            <a
              href="/#about"
              className={mobileNavClass("about")}
              onClick={() => handleNavClick("about")}
            >
              About Us
            </a>

            <a
              href="/#projects"
              className={mobileNavClass("projects")}
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </a>

            <a
              href="/#contact"
              className={mobileNavClass("contact")}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </a>

            <Button asChild className="bg-cyan-100 hover:bg-cyan-200 text-black w-full">
              <a href="/#contact" onClick={() => handleNavClick("contact")}>
                Enquire Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}