"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/lbc-logo.png" alt="LBC Groups" width={120} height={48} className="h-12 w-auto" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              Plot Types
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/open-plots" className="cursor-pointer">
                  Open Plots
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/agricultural-plots" className="cursor-pointer">
                  Agricultural Plots
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/farm-plots" className="cursor-pointer">
                  Farm Plots
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/#why-lbc" className="text-sm font-medium hover:text-primary transition-colors">
            Why LBC
          </Link>
          <Link href="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/#contact">Enquire Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>

            <div className="pl-4 space-y-2 border-l-2 border-accent">
              <div className="text-xs font-semibold text-muted-foreground">PLOT TYPES</div>
              <Link href="/open-plots" className="block text-sm font-medium hover:text-primary transition-colors">
                Open Plots
              </Link>
              <Link
                href="/agricultural-plots"
                className="block text-sm font-medium hover:text-primary transition-colors"
              >
                Agricultural Plots
              </Link>
              <Link href="/farm-plots" className="block text-sm font-medium hover:text-primary transition-colors">
                Farm Plots
              </Link>
            </div>

            <Link href="/#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/#why-lbc" className="text-sm font-medium hover:text-primary transition-colors">
              Why LBC
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              <Link href="/#contact">Enquire Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
