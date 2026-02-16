import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1280px] py-6 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-[64px]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-accent/10 px-4 py-1 text-xs font-medium text-accent sm:text-sm">
    About LBC Real Estate
  </div>

  <h2 className="mt-2 md:mb-10 text-2xl font-bold tracking-tight leading-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">
    Your Trusted Partner in Real Estate Excellence
  </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-5">
            <p className="text-[15px] sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              At LBC Real Estate, we don't just sell land — we build lasting relationships based on trust, transparency,
              and exceptional value. With years of industry experience in Telangana & Andhra Pradesh, we specialize in
              premium plots and high-return real estate investments.
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                "Years of proven industry experience",
                "100% clear-title properties",
                "Strategic growth locations",
                "Customer-first approach",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full max-w-[560px] mx-auto h-[240px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/professional-real-estate-team-at-modern-office-wit.jpg"
              alt="About LBC Real Estate"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}