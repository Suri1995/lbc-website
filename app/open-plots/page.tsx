import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Ruler, TrendingUp, CheckCircle2, Phone, Mail } from "lucide-react"
import Link from "next/link"

const openPlots = [
  {
    id: 1,
    name: "LBC Green Valley",
    location: "Shamshabad, Hyderabad",
    image: "/luxury-gated-community-with-green-spaces-and-moder.jpg",
    plotSize: "150-300 Sq. Yards",
    price: "₹3,500/Sq. Yard",
    appreciation: "15-20% annually",
    features: ["HMDA Approved", "Clear Title", "Gated Community", "24/7 Security", "Water & Electricity"],
  },
  {
    id: 2,
    name: "LBC Smart City Plots",
    location: "Vijayawada",
    image: "/modern-smart-city-development-with-contemporary-vi.jpg",
    plotSize: "100-250 Sq. Yards",
    price: "₹4,200/Sq. Yard",
    appreciation: "18-25% annually",
    features: ["VUDA Approved", "Smart Infrastructure", "Wide Roads", "Underground Drainage", "Street Lights"],
  },
  {
    id: 3,
    name: "LBC Premium Enclave",
    location: "Warangal Highway",
    image: "/premium-residential-plots-with-wide-roads-and-stre.jpg",
    plotSize: "200-500 Sq. Yards",
    price: "₹3,800/Sq. Yard",
    appreciation: "20-28% annually",
    features: ["RERA Registered", "Compound Wall", "Children's Park", "Club House", "Swimming Pool"],
  },
]

export default function OpenPlotsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-medium mb-6 text-accent-foreground">
              Open Plots
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Premium Open Plots for Your Dream Home
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Invest in prime open plots with clear titles, excellent connectivity, and high appreciation potential.
              Build your dream home in carefully planned communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#plots">View Available Plots</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="#contact">Schedule Site Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Why Choose Open Plots?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build your dream home exactly the way you envision it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">High Appreciation</h3>
                <p className="text-muted-foreground">
                  Open plots in prime locations show 15-28% annual appreciation, making them excellent long-term
                  investments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Ruler className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Complete Freedom</h3>
                <p className="text-muted-foreground">
                  Design and build your home according to your preferences without restrictions of pre-built properties.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Clear Documentation</h3>
                <p className="text-muted-foreground">
                  All plots come with clear titles, RERA registration, and necessary approvals from local authorities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Plots Section */}
      <section id="plots" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Available Open Plots</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our premium open plot projects in strategic locations
            </p>
          </div>

          <div className="grid gap-8">
            {openPlots.map((plot) => (
              <Card key={plot.id} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={plot.image || "/placeholder.svg"}
                      alt={plot.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 md:p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{plot.name}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4" />
                        <span>{plot.location}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Plot Size</div>
                        <div className="font-semibold">{plot.plotSize}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Price</div>
                        <div className="font-semibold text-accent">{plot.price}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-muted-foreground mb-1">Expected Appreciation</div>
                        <div className="font-semibold text-primary">{plot.appreciation}</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium mb-3">Key Features</div>
                      <div className="grid grid-cols-1 gap-2">
                        {plot.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-accent" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Request Details
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Ready to Invest in Your Dream Plot?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Our team is ready to help you find the perfect open plot for your needs. Schedule a site visit or contact
              us for more information.
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
