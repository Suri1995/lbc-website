import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="container mx-auto w-full max-w-[1280px] items-center justify-between py-7 md:py-10 px-[14px] md:px-[64px]">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="text-xl font-bold">
              LBC <span className="text-accent">Real Estate</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building Trust. Creating Value. Shaping Tomorrow.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="h-4 w-4 text-primary" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-4 w-4 text-primary" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-primary" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="h-4 w-4 text-primary" />
              </Link>
            </div>
          </div>

          <div className="text-center space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Residential Plots
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Commercial Plots
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Investment Advisory
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  NRI Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  RERA Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-border">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2026 LBC Groups. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right max-w-[760px] leading-relaxed">
              Disclaimer: All representations and information are subject to change. Please verify details before making
              investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}