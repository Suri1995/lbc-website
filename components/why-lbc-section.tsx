import { Shield, MapPin, TrendingUp, IndianRupee, Headphones } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Shield,
    title: "Clear Titles & Legal Compliance",
    description: "100% HMDA/RERA approved properties with transparent documentation",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Strategic locations near IT hubs, highways, and growth corridors",
  },
  {
    icon: TrendingUp,
    title: "High Appreciation Potential",
    description: "Proven track record of 20-30% annual appreciation in our projects",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "No hidden costs. Clear pricing with flexible payment plans",
  },
  {
    icon: Headphones,
    title: "Strong After-Sales Support",
    description: "Dedicated support team for all your post-purchase needs",
  },
]

export function WhyLBCSection() {
  return (
    <section id="why-lbc" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
            Why Choose LBC
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Excellence in Every Transaction
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver more than just property—we deliver peace of mind and lasting value
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border/50 hover:border-accent/50 transition-colors duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
