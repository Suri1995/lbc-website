"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { ImagesSlider } from "@/components/ui/images-slider"

export function HeroSection() {
  const images = [
    "/luxury-real-estate-development-aerial-view-with-mo.jpg",
    "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  ]

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <ImagesSlider images={images} autoplay direction="up" overlay={false} className="w-full h-full">
          <div />
        </ImagesSlider>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/50 to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Building Trust. Creating Value. <span className="text-accent">Shaping Tomorrow.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto text-balance font">
            Premium Plots & Real Estate Investments with High Returns
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary/80 hover:bg-primary text-primary-foreground text-base h-12 px-8">
              <a href="#contact">
                Book Site Visit <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="text-base h-12 px-8 bg-accent/70">
              <a href="#projects">
                <Download className="mr-2 h-5 w-5 " /> Download Brochure
              </a>
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}