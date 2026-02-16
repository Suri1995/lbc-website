"use client"

import type React from "react"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, MessageCircle, CheckCircle2, Loader2 } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  })

  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const errors = useMemo(() => {
    const e: Record<string, string> = {}
    if (!formData.name.trim()) e.name = "Please enter your name"
    if (!/^\+?\d[\d\s-]{8,}$/.test(formData.phone.trim())) e.phone = "Please enter a valid phone number"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) e.email = "Please enter a valid email"
    if (formData.requirement.trim().length < 10) e.requirement = "Please add a brief requirement (min 10 characters)"
    return e
  }, [formData])

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, phone: true, email: true, requirement: true })
    if (!isValid) return
    setStatus("loading")
    await new Promise((r) => setTimeout(r, 900))
    setStatus("success")
    setFormData({ name: "", phone: "", email: "", requirement: "" })
    setTouched({})
    setTimeout(() => setStatus("idle"), 2500)
  }

  return (
    <section id="contact" className="relative py-10 md:py-20 bg-secondary/30">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-180px] bottom-[-180px] h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
          <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium">
            Contact Us
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Let's Start Your Investment Journey
          </h2>
          <p className="text-[15px] sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and our team will get back to you within 24 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-2 items-start gap-6 md:gap-10 max-w-6xl mx-auto">
          <div className="lg:sticky lg:top-24 self-start">
            <Card className="h-fit border-border/60 bg-background/70 backdrop-blur">
              <CardHeader className="pt-6">
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onBlur={() => setTouched((p) => ({ ...p, name: true }))}
                        className={touched.name && errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                        required
                      />
                      {touched.name && errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
                        className={touched.phone && errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}
                        required
                      />
                      {touched.phone && errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                      className={touched.email && errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                      required
                    />
                    {touched.email && errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <Label htmlFor="requirement">Your Requirement</Label>
                      <span className="text-xs text-muted-foreground">{formData.requirement.length}/500</span>
                    </div>
                    <Textarea
                      id="requirement"
                      placeholder="Tell us about your property requirements..."
                      rows={5}
                      maxLength={500}
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      onBlur={() => setTouched((p) => ({ ...p, requirement: true }))}
                      className={
                        touched.requirement && errors.requirement ? "border-destructive focus-visible:ring-destructive" : ""
                      }
                      required
                    />
                    {touched.requirement && errors.requirement && (
                      <p className="text-xs text-destructive">{errors.requirement}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 pt-2">
                    <Button
                      type="submit"
                      disabled={!isValid || status === "loading"}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {status === "loading" ? (
                        <span className="inline-flex items-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </span>
                      ) : status === "success" ? (
                        <span className="inline-flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          Sent Successfully
                        </span>
                      ) : (
                        "Submit Enquiry"
                      )}
                    </Button>

                    <div className="grid grid-cols-2 gap-3">
                      <Button asChild variant="outline" className="w-full">
                        <a href="tel:+919876543210">Call Now</a>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    By submitting, you agree to be contacted by our team regarding your enquiry.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 md:space-y-6 self-start">
            <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur p-6">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Visit our office or reach out through any of the channels below. We're here to help you make the right
                investment decision.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-border/60">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-border/60">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a
                      href="mailto:info@lbcrealestate.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@lbcrealestate.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-border/60">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Office</div>
                    <p className="text-muted-foreground">
                      Savvys Tulip Cheruku Plaza, 4th Floor
                      <br />
                      New Samathapuri Colony, Nagole Junction
                      <br />
                      Kothapet, Hyderabad, TS 500035
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 border border-border/60">
                    <MessageCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      Click to chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border/60 bg-background/70 backdrop-blur h-64 md:h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9325!2d78.5145!3d17.3975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f7d8f7d8f7d%3A0x3bcb8f7d8f7d8f7d!2sKothapet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}