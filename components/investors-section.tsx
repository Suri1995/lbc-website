import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Building2, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "25-35%",
    label: "Average Annual Appreciation",
    description: "Consistent growth in property value year over year",
  },
  {
    icon: Building2,
    value: "15+",
    label: "Infrastructure Projects",
    description: "Nearby upcoming metro, highways, and commercial zones",
  },
  {
    icon: BarChart3,
    value: "₹50L+",
    label: "Average ROI in 3 Years",
    description: "Long-term investment returns for our investors",
  },
]

export function InvestorsSection() {
  return (
    <section id="investors" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
            For Investors
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Maximize Your Investment Returns
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ideal for NRI investors and long-term wealth creation through strategic real estate
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-border/50 hover:border-primary/50 transition-colors duration-300"
            >
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <h3 className="text-xl font-semibold">{stat.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
