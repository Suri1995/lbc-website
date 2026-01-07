import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Droplets, TrendingUp, CheckCircle2, Phone, Mail, Sprout } from "lucide-react"
import Link from "next/link"

const agriculturalPlots = [
  {
    id: 1,
    name: "LBC Green Farms",
    location: "Nalgonda District, Telangana",
    image: "/agricultural-farmland-with-irrigation.jpg",
    plotSize: "1-5 Acres",
    price: "₹25 Lakhs/Acre",
    waterSource: "Borewell & Canal",
    soilType: "Red Soil - High Fertility",
    features: ["Clear Title Deeds", "Road Access", "Electricity Available", "Irrigation Facility", "Fenced Boundary"],
  },
  {
    id: 2,
    name: "LBC Organic Estates",
    location: "Khammam District, Telangana",
    image: "/organic-farming-land-with-natural-environment.jpg",
    plotSize: "2-10 Acres",
    price: "₹30 Lakhs/Acre",
    waterSource: "River Proximity & Borewell",
    soilType: "Black Soil - Premium Quality",
    features: [
      "Organic Certification Ready",
      "Water Abundant",
      "Forest Department NOC",
      "Survey Numbers Clear",
      "Approach Road 20ft",
    ],
  },
  {
    id: 3,
    name: "LBC Agricultural Paradise",
    location: "Krishna District, Andhra Pradesh",
    image: "/agricultural-land-near-krishna-river.jpg",
    plotSize: "3-15 Acres",
    price: "₹35 Lakhs/Acre",
    waterSource: "Krishna Canal & Bore",
    soilType: "Alluvial Soil - Highly Fertile",
    features: [
      "Prime Location",
      "Multiple Crop Suitable",
      "Market Proximity",
      "Storage Facility Nearby",
      "Well Maintained",
    ],
  },
]

export default function AgriculturalPlotsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-medium mb-6 text-accent-foreground">
              Agricultural Land
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Premium Agricultural Plots for Sustainable Farming
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Invest in fertile agricultural land with excellent water resources, clear titles, and high-yield
              potential. Perfect for organic farming, orchards, and commercial agriculture.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#plots">View Available Land</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="#contact">Schedule Farm Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Why Invest in Agricultural Land?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure your future with sustainable agricultural investments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Steady Returns</h3>
                <p className="text-muted-foreground">
                  Agricultural land provides consistent returns through crop yields and long-term appreciation in land
                  value.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Droplets className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Water Resources</h3>
                <p className="text-muted-foreground">
                  All our agricultural plots come with reliable water sources including borewells, canals, or river
                  proximity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sprout className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Fertile Soil</h3>
                <p className="text-muted-foreground">
                  Premium quality soil suitable for multiple crops, organic farming, and sustainable agricultural
                  practices.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Available Agricultural Land</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully selected agricultural properties with excellent farming potential
            </p>
          </div>

          <div className="grid gap-8">
            {agriculturalPlots.map((plot) => (
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

                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Plot Size</div>
                        <div className="font-semibold">{plot.plotSize}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Price</div>
                        <div className="font-semibold text-accent">{plot.price}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Water Source</div>
                        <div className="font-semibold">{plot.waterSource}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Soil Type</div>
                        <div className="font-semibold">{plot.soilType}</div>
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
              Start Your Agricultural Investment Journey
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Connect with our agricultural land experts to find the perfect property for your farming needs. We provide
              complete support from selection to documentation.
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
