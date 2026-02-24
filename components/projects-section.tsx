"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Maximize2 } from "lucide-react"

const projects = [
  {
    id: 1,
    slug: "hill-county",
    defaultType: "open-plots",
    name: "Hill County",
    location: "Near Kondapochamma Temple",
    image: "/luxury-gated-community-with-green-spaces-and-moder.jpg",
    plotSize: "121 Sq. Yards per plot",
    type: "Residential Plots",
  },
  {
    id: 2,
    slug: "yehvi-farm-lands-phase-2",
    defaultType: "farm-plots",
    name: "Yehvi Farm Lands – Phase II",
    location: "Near Kolanpaka Jain temple",
    image: "/premium-residential-plots-with-wide-roads-and-stre.jpg",
    plotSize: "200-500 Sq. Yards",
    type: "Gated Community",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-[1280px] items-center justify-between py-7 md:py-20 px-[14px] md:px-0">
      <div className="container md:px-[64px]">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
            Our Projects
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Premium Real Estate Investments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of high-value properties in prime locations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-6 space-y-2">
                <CardTitle className="text-2xl font-bold">{project.name}</CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Maximize2 className="h-4 w-4" />
                  <span className="text-sm font-medium">{project.plotSize}</span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={"\#contact"}>View Plots</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}