"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type PlotKey = "" | "open-plots" | "agricultural-plots" | "farm-plots"
type ActiveKey =
  | "home"
  | "about"
  | "projects"
  | "why"
  | "testimonials"
  | "contact"
  | PlotKey

function getPlotFromPath(pathname: string): { key: PlotKey; label: string } {
  if (pathname === "/open-plots") return { key: "open-plots", label: "Open Plots" }
  if (pathname === "/agricultural-plots") return { key: "agricultural-plots", label: "Agricultural Plots" }
  if (pathname === "/farm-plots") return { key: "farm-plots", label: "Farm Plots" }
  return { key: "", label: "Plot Types" }
}

function getActiveFromHash(hash: string): ActiveKey {
  if (hash === "#about") return "about"
  if (hash === "#projects") return "projects"
  if (hash === "#why-lbc") return "why"
  if (hash === "#testimonials") return "testimonials"
  if (hash === "#contact") return "contact"
  return "home"
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const initial = (() => {
    if (typeof window === "undefined") {
      return {
        active: "home" as ActiveKey,
        plotActive: "" as PlotKey,
        plotLabel: "Plot Types",
      }
    }

    const plot = getPlotFromPath(window.location.pathname)
    if (plot.key) {
      return {
        active: plot.key as ActiveKey,
        plotActive: plot.key,
        plotLabel: plot.label,
      }
    }

    return {
      active: getActiveFromHash(window.location.hash),
      plotActive: "" as PlotKey,
      plotLabel: "Plot Types",
    }
  })()

  const [active, setActive] = useState<ActiveKey>(initial.active)
  const [plotActive, setPlotActive] = useState<PlotKey>(initial.plotActive)
  const [plotLabel, setPlotLabel] = useState<string>(initial.plotLabel)

  useEffect(() => {
    if (typeof window === "undefined") return

    const syncFromUrl = () => {
      const plot = getPlotFromPath(window.location.pathname)

      if (plot.key) {
        setPlotActive(plot.key)
        setPlotLabel(plot.label)
        setActive(plot.key)
        return
      }

      setPlotActive("")
      setPlotLabel("Plot Types")
      setActive(getActiveFromHash(window.location.hash))
    }

    syncFromUrl()

    const onHashChange = () => syncFromUrl()
    window.addEventListener("hashchange", onHashChange)

    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const navClass = (id: ActiveKey) =>
    `font-medium whitespace-nowrap ${
      active === id ? "text-accent font-bold" : "text-white hover:text-accent"
    }`

  const mobileNavClass = (id: ActiveKey) =>
    `text-sm font-medium transition-colors ${
      active === id ? "text-accent font-bold" : "text-white hover:text-accent"
    }`

  const plotTriggerClass = () =>
    `flex items-center gap-1 font-medium whitespace-nowrap ${
      plotActive ? "text-accent font-bold" : "text-white hover:text-accent"
    }`

  const selectPlot = (key: PlotKey, label: string) => {
    setPlotActive(key)
    setPlotLabel(label)
    setActive(key)
  }

  const selectNav = (id: Exclude<ActiveKey, PlotKey>) => {
    setActive(id)
    setPlotActive("")
    setPlotLabel("Plot Types")
  }

  const selectNavAndClose = (id: Exclude<ActiveKey, PlotKey>) => {
    selectNav(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-[500] w-full border-b border-border/40 backdrop-blur bg-black">
      <div className="mx-auto w-full max-w-[1280px]  px-4 sm:px-6 lg:px-10 2xl:px-16 flex h-16 xl:h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-2" onClick={() => selectNav("home")}>
          <Image
            src="/lbc-logo.png"
            alt="LBC Groups"
            width={180}
            height={64}
            className="h-10 lg:h-11 xl:h-12 2xl:h-[70px] w-auto"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">
          <div className="flex gap-8">
            <a href="/" onClick={() => selectNav("home")} className={navClass("home")}>
              Home
            </a>

            <a href="/#about" onClick={() => selectNav("about")} className={navClass("about")}>
              About Us
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className={plotTriggerClass()}>
                {plotLabel}
                <ChevronDown className="h-4 w-4 xl:h-5 xl:w-5" />
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <a
                    href="/open-plots"
                    className="cursor-pointer"
                    onClick={() => selectPlot("open-plots", "Open Plots")}
                  >
                    Open Plots
                  </a>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <a
                    href="/agricultural-plots"
                    className="cursor-pointer"
                    onClick={() => selectPlot("agricultural-plots", "Agricultural Plots")}
                  >
                    Agricultural Plots
                  </a>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <a
                    href="/farm-plots"
                    className="cursor-pointer"
                    onClick={() => selectPlot("farm-plots", "Farm Plots")}
                  >
                    Farm Plots
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/#projects" onClick={() => selectNav("projects")} className={navClass("projects")}>
              Projects
            </a>

            {/* <a href="/#why-lbc" onClick={() => selectNav("why")} className={navClass("why")}>
              Why LBC
            </a>

            <a
              href="/#testimonials"
              onClick={() => selectNav("testimonials")}
              className={navClass("testimonials")}
            >
              Testimonials
            </a> */}

            <a href="/#contact" onClick={() => selectNav("contact")} className={navClass("contact")}>
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-cyan-100 hover:bg-accent text-black hover:text-white px-4 lg:px-5 xl:px-6 2xl:px-8 h-9 lg:h-10 xl:h-11 2xl:h-12 text-sm lg:text-base xl:text-lg"
            >
              <a href="/#contact" onClick={() => selectNav("contact")}>
                Enquire Now
              </a>
            </Button>
          </div>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-black/90 backdrop-blur">
          <nav className="mx-auto w-full max-w-[1600px] 2xl:max-w-[1900px] px-4 sm:px-6 lg:px-10 2xl:px-16 flex flex-col gap-4 py-4">
            <a href="/" onClick={() => selectNavAndClose("home")} className={mobileNavClass("home")}>
              Home
            </a>

            <a href="/#about" onClick={() => selectNavAndClose("about")} className={mobileNavClass("about")}>
              About Us
            </a>

            <div className="pl-4 space-y-2 border-l-2 border-accent/70">
              <div className="text-xs font-semibold text-muted-foreground">PLOT TYPES</div>

              <a
                href="/open-plots"
                onClick={() => {
                  selectPlot("open-plots", "Open Plots")
                  setMobileMenuOpen(false)
                }}
                className={`block ${mobileNavClass("open-plots")}`}
              >
                Open Plots
              </a>

              <a
                href="/agricultural-plots"
                onClick={() => {
                  selectPlot("agricultural-plots", "Agricultural Plots")
                  setMobileMenuOpen(false)
                }}
                className={`block ${mobileNavClass("agricultural-plots")}`}
              >
                Agricultural Plots
              </a>

              <a
                href="/farm-plots"
                onClick={() => {
                  selectPlot("farm-plots", "Farm Plots")
                  setMobileMenuOpen(false)
                }}
                className={`block ${mobileNavClass("farm-plots")}`}
              >
                Farm Plots
              </a>
            </div>

            <a
              href="/#projects"
              onClick={() => selectNavAndClose("projects")}
              className={mobileNavClass("projects")}
            >
              Projects
            </a>

            {/* <a href="/#why-lbc" onClick={() => selectNavAndClose("why")} className={mobileNavClass("why")}>
              Why LBC
            </a>

            <a
              href="/#testimonials"
              onClick={() => selectNavAndClose("testimonials")}
              className={mobileNavClass("testimonials")}
            >
              Testimonials
            </a> */}

            <a
              href="/#contact"
              onClick={() => selectNavAndClose("contact")}
              className={mobileNavClass("contact")}
            >
              Contact
            </a>

            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              <a href="/#contact" onClick={() => selectNavAndClose("contact")}>
                Enquire Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}