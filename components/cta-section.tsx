import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/modern-luxury-real-estate-development-at-golden-ho.jpg" alt="Investment Opportunity" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground text-balance">
            Your 2026 Investment Starts with the Right Land
          </h2>
          <p className="text-lg text-primary-foreground/90 text-balance">
            Don't miss out on prime opportunities. Connect with our expert team today.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base h-12 px-8">
            <Link href="#contact">
              Talk to Our Expert <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
