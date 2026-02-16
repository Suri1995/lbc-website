import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] items-center justify-between py-7 md:py-20 px-[14px] md:px-0">
      <div className="container md:px-[64px]">
        <div className="relative overflow-hidden rounded-[28px] text-primary-foreground">
          <div className="absolute inset-0">
            <img
              src="/modern-luxury-real-estate-development-at-golden-ho.jpg"
              alt="Investment Opportunity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>

          <div className="absolute left-0 top-0 h-full w-[55%] -skew-x-12 bg-primary-foreground/10 opacity-30" />
          <div className="absolute right-0 top-0 h-full w-[40%] skew-x-12 bg-primary-foreground/10 opacity-25" />

          <div className="relative flex flex-col items-center gap-6 px-6 py-10 text-center sm:px-10 md:flex-row md:justify-between md:gap-10 md:py-12 md:text-left">
            <div className="max-w-[760px]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
                Your 2026 Investment Starts with the Right Land
              </h2>
              <p className="mt-3 text-sm sm:text-base md:text-lg text-primary-foreground/90 text-balance">
                Don't miss out on prime opportunities. Connect with our expert team today.
              </p>
            </div>

            <Button asChild size="lg" variant="secondary" className="h-12 px-6 sm:px-8 rounded-xl text-base w-full sm:w-auto">
              <Link href="#contact" className="inline-flex items-center justify-center">
                Talk to Our Expert <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}