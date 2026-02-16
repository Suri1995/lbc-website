import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  { slug: "hill-county", name: "Hill County", location: "Near Kondapochamma Temple" },
  { slug: "yehvi-farm-lands-phase-2", name: "Yehvi Farm Lands – Phase II", location: "Warangal Highway" },
]

export default function OpenPlotsLanding() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-3 mb-12">
            <h1 className="text-4xl font-bold">Open Plots</h1>
            <p className="text-muted-foreground">Select a project to view available open plots</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((p) => (
              <Card key={p.slug}>
                <CardContent className="p-6 flex items-center justify-between gap-6">
                  <div>
                    <div className="text-xl font-semibold">{p.name}</div>
                    <div className="text-sm text-muted-foreground">{p.location}</div>
                  </div>
                  <Button asChild>
                    <Link href={`/open-plots/${p.slug}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}