import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Maximize2 } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "LBC Green Valley",
    location: "Shamshabad, Hyderabad",
    image: "/luxury-gated-community-with-green-spaces-and-moder.jpg",
    plotSize: "150-300 Sq. Yards",
    type: "Residential Plots",
  },
  {
    id: 2,
    name: "LBC Premium Enclave",
    location: "Warangal Highway",
    image: "/premium-residential-plots-with-wide-roads-and-stre.jpg",
    plotSize: "200-500 Sq. Yards",
    type: "Gated Community",
  },
  {
    id: 3,
    name: "LBC Smart City Plots",
    location: "Vijayawada",
    image: "/modern-smart-city-development-with-contemporary-vi.jpg",
    plotSize: "100-250 Sq. Yards",
    type: "Smart City Plots",
  },
  {
    id: 4,
    name: "LBC Lake View Estates",
    location: "Khammam District",
    image: "/lakeside-residential-plots-with-scenic-views-and-n.jpg",
    plotSize: "300-600 Sq. Yards",
    type: "Premium Villas",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container">
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
              <CardContent className="p-6 space-y-2">
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
                  <Link href={`/projects/${project.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
