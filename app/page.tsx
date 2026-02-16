import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { WhyLBCSection } from "@/components/why-lbc-section"
import { InvestorsSection } from "@/components/investors-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
    <Header />
    <main className="min-h-screen">
      <HeroSection />
      <div className="bg-[radial-gradient(circle_at_center,#f5f1e6_0%,#e6d9b8_30%,#d2c18f_55%,#b8a66c_80%,#8f804f_100%)]">
      <AboutSection />
      </div>
      <div className="bg-gray-200">
      <ProjectsSection />
      </div>
      <WhyLBCSection />
      <InvestorsSection />
      <div className="bg-[#faf0e6]"><TestimonialsSection /></div>
      <CTASection />
      <ContactSection />
    </main>
    <div className="bg-gray-200">
      <Footer />
      </div>
    </>
  )
}
