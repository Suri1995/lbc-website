import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Home, TrendingUp, CheckCircle2, Phone, Mail, TreePine } from "lucide-react"
import Link from "next/link"

const farmPlots = [
  {
    id: 1,
    projectSlug: "yehvi-farm-lands-phase-2",
    name: "LBC Weekend Farms",
    location: "Shamirpet, Hyderabad",
    image: "/luxury-farmhouse-with-landscaping-and-pond.jpg",
    plotSize: "1000-3000 Sq. Yards",
    price: "₹8,500/Sq. Yard",
    distance: "45 minutes from Hyderabad",
    features: [
      "Farmhouse Construction Allowed",
      "Electricity & Water",
      "Gated Community",
      "24/7 Security",
      "Club House & Pool",
      "Organic Farming Support",
    ],
  },
  {
    id: 2,
    projectSlug: "yehvi-farm-lands-phase-2",
    name: "LBC Nature Retreat",
    location: "Bibinagar, Near Hyderabad",
    image: "/farmland-retreat-with-trees-and-natural-landscape.jpg",
    plotSize: "2000-5000 Sq. Yards",
    price: "₹6,800/Sq. Yard",
    distance: "35 minutes from Hyderabad",
    features: [
      "HMDA Layout Approved",
      "Underground Power Lines",
      "Drip Irrigation Setup",
      "Compound Wall",
      "Children's Play Area",
      "Guest House Facility",
    ],
  },
  {
    id: 3,
    projectSlug: "hill-county",
    name: "LBC Eco Farms",
    location: "Srisailam Highway",
    image: "/eco-friendly-farm-with-solar-panels-and-greenery.jpg",
    plotSize: "1500-4000 Sq. Yards",
    price: "₹7,200/Sq. Yard",
    distance: "50 minutes from Hyderabad",
    features: [
      "Solar Panel Ready",
      "Rainwater Harvesting",
      "Fruit Trees Plantation",
      "Wide Internal Roads",
      "Meditation Center",
      "Organic Farming Training",
    ],
  },
]

const projectsMeta: Record<string, { name: string; locationLabel?: string }> = {
  "hill-county": { name: "Hill County", locationLabel: "Near Kondapochamma Temple" },
  "yehvi-farm-lands-phase-2": { name: "Yehvi Farm Lands – Phase II", locationLabel: "Warangal Highway" },
}

export default async function FarmPlotsProjectPage({
  params,
}: {
  params: Promise<{ projectSlug: string }>
}) {
  const { projectSlug } = await params

  const project = projectsMeta[projectSlug]
  const filteredPlots = farmPlots.filter((p) => p.projectSlug === projectSlug)

  const projectTitle = project?.name ?? projectSlug.replaceAll("-", " ")
  const projectSub = project?.locationLabel ?? ""

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
              {projectTitle} — Farm Plots
            </h1>

            {projectSub ? <p className="text-primary-foreground/90 mb-2 text-lg">{projectSub}</p> : null}

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Escape the city chaos with your own farmhouse plot. Perfect for weekend retreats, organic farming, and a
              sustainable lifestyle close to nature.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#plots">Explore Farm Plots</Link>
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

      <section id="plots" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Available Farm Plot Projects {project ? `— ${projectTitle}` : ""}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium farm plot communities near Hyderabad with world-class amenities
            </p>
          </div>

          {filteredPlots.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center border rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-2">No farm plots found</h3>
              <p className="text-muted-foreground mb-6">We don’t have farm plot listings for this project yet.</p>
              <Button asChild>
                <Link href="/farm-plots">Go Back</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-8">
              {filteredPlots.map((plot) => (
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
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>{plot.location}</span>
                        </div>
                        <div className="text-sm text-primary font-medium">{plot.distance}</div>
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
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-3">Premium Amenities</div>
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
                        Schedule Visit
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">The Farm Plot Lifestyle</h2>
              <p className="text-lg text-muted-foreground">More than just land - it's a lifestyle upgrade</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Weekend Retreats</h3>
                  <p className="text-muted-foreground text-sm">
                    Escape to your private farmhouse every weekend. Enjoy quality time with family away from city life.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Organic Farming</h3>
                  <p className="text-muted-foreground text-sm">
                    Grow your own organic vegetables and fruits. Live a healthier, self-sustainable lifestyle.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Investment Growth</h3>
                  <p className="text-muted-foreground text-sm">
                    Farm plots near metro cities show consistent 25-40% annual appreciation as cities expand.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Retirement Planning</h3>
                  <p className="text-muted-foreground text-sm">
                    Build your retirement home in nature. Perfect for peaceful golden years close to the city.
                  </p>
                </CardContent>
              </Card>
            </div>
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