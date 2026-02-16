"use client"

import { useMemo, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

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

function approxNeedsReadMore(text: string) {
  return text.trim().length > 110
}

export function TestimonialsSection() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})
  const needsReadMore = useMemo(() => testimonials.map((t) => approxNeedsReadMore(t.content)), [])

  return (
    <section
      id="testimonials"
      className="mx-auto w-full max-w-[1280px] items-center justify-between py-7 md:py-20 px-[14px] md:px-0"
    >
      <div className="container md:px-[64px]">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 md:mb-12">
          <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium">
            Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            What Our Clients Say
          </h2>
          <p className="text-[15px] sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real stories from satisfied customers who trusted us with their investments
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, index) => {
            const isExpanded = !!expanded[index]
            const showReadMore = needsReadMore[index]

            return (
              <Card
                key={index}
                className="relative overflow-hidden border-border/60 bg-background/70 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="pointer-events-none absolute left-5 top-5">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                <CardContent className="p-6 sm:p-7 flex flex-col h-full">
                  <div className="flex gap-1 pt-8">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <div className="mt-4">
                    <p
                      className={[
                        "text-sm sm:text-base text-muted-foreground leading-relaxed",
                        !isExpanded ? "line-clamp-2" : "",
                      ].join(" ")}
                    >
                      {t.content}
                    </p>

                    {showReadMore && (
                      <button
                        type="button"
                        onClick={() => setExpanded((p) => ({ ...p, [index]: !p[index] }))}
                        className="mt-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>

                  <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-secondary/40 border border-border/60 flex items-center justify-center text-sm font-semibold text-foreground">
                      {t.name
                        .split(" ")
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join("")}
                    </div>

                    <div className="min-w-0">
                      <div className="font-semibold text-foreground truncate">{t.name}</div>
                      <div className="text-sm text-muted-foreground truncate">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}