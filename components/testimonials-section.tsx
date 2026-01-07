import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "NRI Investor",
    content:
      "LBC Real Estate made my investment journey seamless. Clear documentation and transparent process. My plot value has already appreciated 30% in 2 years!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Home Buyer",
    content:
      "Excellent customer service and genuine people. They helped me find the perfect plot near my office. Highly recommend LBC for anyone looking for trustworthy real estate.",
    rating: 5,
  },
  {
    name: "Vikram Reddy",
    role: "Long-term Investor",
    content:
      "I've purchased 3 plots from LBC over the years. Their locations are always strategic and the appreciation has been excellent. True professionals!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from satisfied customers who trusted us with their investments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed italic">"{testimonial.content}"</p>
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
