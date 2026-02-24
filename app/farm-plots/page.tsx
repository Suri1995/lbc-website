import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Home, TrendingUp, CheckCircle2, Phone, Mail, TreePine } from "lucide-react"
import Link from "next/link"

const farmProjects = [
  {
    id: 1,
    slug: "yehvi-farm-lands-phase-2",
    name: "Yehvi Farm Lands – Phase II",
    locationLabel: "Warangal Highway",
    image: "/luxury-farmhouse-with-landscaping-and-pond.jpg",
    highlight: "Premium weekend farm plots with modern amenities near Hyderabad.",
    tags: ["Farmhouse Allowed", "Gated Community", "High Appreciation"],
  },
  {
    id: 2,
    slug: "hill-county",
    name: "Hill County",
    locationLabel: "Near Kondapochamma Temple",
    image: "/eco-friendly-farm-with-solar-panels-and-greenery.jpg",
    highlight: "Eco-farm plots designed for nature living, organic farming, and long-term investment growth.",
    tags: ["Organic Farming", "Eco Living", "Wide Roads"],
  },
]

export default function FarmPlotsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-medium mb-6 text-accent-foreground">
              Farm Plots & Farmhouses
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Your Personal Weekend Getaway Farm Plots
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Escape the city chaos with your own farmhouse plot. Perfect for weekend retreats, organic farming, and a
              sustainable lifestyle close to nature.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#projects">Explore Farm Plot Projects</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="#contact">Book Site Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Why Choose Farm Plots?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The perfect blend of investment and lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <TreePine className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Nature Living</h3>
                <p className="text-muted-foreground">
                  Build your dream farmhouse surrounded by nature. Perfect for weekend getaways and family retreats.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Smart Investment</h3>
                <p className="text-muted-foreground">
                  Farm plots near cities show exceptional appreciation rates of 25-40% annually due to urban expansion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Home className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Ready Amenities</h3>
                <p className="text-muted-foreground">
                  All farm plots come with essential amenities like electricity, water, security, and club facilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Farm Plot Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a project to view available farm plots inside it
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {farmProjects.map((p) => (
              <Card key={p.id} className="overflow-hidden">
                <div className="relative h-56">
                  <img src={p.image || "/placeholder.svg"} alt={p.name} className="w-full h-full object-cover" />
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">{p.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{p.locationLabel}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground">{p.highlight}</p>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href={`/farm-plots/${p.slug}`}>View Plots</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Ready to Own Your Dream Farm Plot?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Book a site visit today and experience the farm plot lifestyle firsthand. Our team will guide you through
              every step of your investment journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a href="tel:+919876543210">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <a href="mailto:info@lbcrealestate.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}