import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
              About LBC Real Estate
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Your Trusted Partner in Real Estate Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At LBC Real Estate, we don't just sell land — we build lasting relationships based on trust, transparency,
              and exceptional value. With years of industry experience in Telangana & Andhra Pradesh, we specialize in
              premium plots and high-return real estate investments.
            </p>
            <ul className="space-y-4">
              {[
                "Years of proven industry experience",
                "100% clear-title properties",
                "Strategic growth locations",
                "Customer-first approach",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <img src="/professional-real-estate-team-at-modern-office-wit.jpg" alt="About LBC Real Estate" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
