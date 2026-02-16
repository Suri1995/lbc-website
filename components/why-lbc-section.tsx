import {
  ShieldCheck,
  MapPin,
  ClipboardCheck,
  Leaf,
  Route,
  Handshake,
  IndianRupee,
  Headphones,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: ShieldCheck,
    title: "100% Clear Title & Documentation",
    description:
      "Clear-title plots with transparent paperwork so you invest with confidence and peace of mind.",
  },
  {
    icon: ClipboardCheck,
    title: "Spot Registration Available",
    description: "Faster purchase process with on-ground support for registration and documentation guidance.",
  },
  {
    icon: MapPin,
    title: "Strategic Location & Connectivity",
    description: "Well-connected layouts near key highways, growth corridors, and major landmarks around the region.",
  },
  {
  icon: Route,
  title: "Planned Layout with Wide Roads",
  description:
    "Well-laid internal roads and a thoughtfully planned layout designed for long-term value and usability.",
},
  {
    icon: Leaf,
    title: "Green Living & Plantation Benefits",
    description: "Avenue plantation/greenery with plantation support (like mango/mahagani) and drip-friendly development.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing & Easy Plans",
    description: "Clear per-sq.yd pricing with structured plan options and timelines—no hidden surprises.",
  },
  {
    icon: Headphones,
    title: "Dedicated After-Sales Support",
    description: "Help even after purchase—plot assistance, updates, and a responsive support team when you need it.",
  },
  {
    icon: Handshake,
    title: "Trust-First Customer Experience",
    description: "A customer-focused approach built on clarity, long-term relationships, and reliable execution.",
  },
]

const planHighlights = [
  {
    label: "Plan A",
    price: "₹2,000",
    unit: "per sq. yd",
    note: "45 days",
    badge: "Fast Plan",
  },
  {
    label: "Plan B",
    price: "₹2,250",
    unit: "per sq. yd",
    note: "60 days",
    badge: "Value Plan",
  },
]

export function WhyLBCSection() {
  return (
    <section id="why-lbc" className="relative w-full py-10 md:py-20 bg-[#f5fffa]">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-[64px]">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
            Why Choose LBC
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
            Trust, Transparency & Long-Term Value
          </h2>

          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
            From clear-title documentation and spot registration to planned layouts, greenery, and straightforward
            pricing—LBC is built for stress-free land investment.
          </p>
        </div>

        <div className="mb-10 grid gap-4 md:mb-14 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/70 p-5 backdrop-blur">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/15 blur-2xl" />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold">
                  PLAN OPTIONS
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Choose a plan that matches your timeline—clear pricing, simple steps.
                </p>
              </div>

              <div className="flex gap-3">
                {planHighlights.map((p) => (
                  <div
                    key={p.label}
                    className="relative min-w-[160px] overflow-hidden rounded-xl border border-border/60 bg-gradient-to-b from-amber-200/30 to-amber-100/10 p-4"
                  >
                    <div className="mb-2 inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
                      {p.badge}
                    </div>
                    <div className="flex items-baseline justify-between">
                      <p className="text-sm font-semibold">{p.label}</p>
                      <p className="text-[11px] text-muted-foreground">{p.note}</p>
                    </div>
                    <p className="mt-2 text-2xl font-extrabold tracking-tight">{p.price}</p>
                    <p className="text-xs text-muted-foreground">{p.unit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-3 rounded-2xl border border-border/60 bg-background/70 p-5 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold">
                ON-GROUND HIGHLIGHTS
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Spot Registration
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border/60 bg-secondary/20 p-4">
                <p className="text-sm font-semibold">LRS Paid</p>
                <p className="mt-1 text-xs text-muted-foreground">Compliance-first approach for smoother ownership.</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-secondary/20 p-4">
                <p className="text-sm font-semibold">Vaasthu Layout</p>
                <p className="mt-1 text-xs text-muted-foreground">Planned plots aligned with layout principles.</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-secondary/20 p-4">
                <p className="text-sm font-semibold">33 ft Roads</p>
                <p className="mt-1 text-xs text-muted-foreground">Better access, movement and future usability.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border/60 bg-background/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/10 blur-2xl" />
                <div className="absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-primary/10 blur-2xl" />
              </div>

              <CardContent className="relative p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-accent/10">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>

                <h3 className="text-lg font-semibold leading-snug">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}