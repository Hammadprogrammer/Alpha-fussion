import type { Metadata } from "next";
import Image from "next/image";
import { Headphones, Mail, MapPin, MessageSquareText, Phone, Zap } from "lucide-react";
import { site } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Highlight } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = { title: "Contact Us" };

const chips = [
  { icon: Zap, label: "Quick Response" },
  { icon: Headphones, label: "24/7 Support" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact Us"
        title={<>Let&apos;s Build Something <Highlight>Amazing</Highlight> Together</>}
        description="Have a project in mind, a question, or just want to say hello? We'd love to hear from you!"
        image="/images/phone-app.jpg"
        imageAlt="Smartphone"
        floats={[Mail, MessageSquareText, Phone, MapPin]}
        actions={chips.map(({ icon: Icon, label }) => (
          <span key={label} className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-white/5 px-5 py-2.5 text-sm">
            <Icon className="size-4 text-cyan-glow" /> {label}
          </span>
        ))}
      />

      <Section className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
        <div className="space-y-4">
          <ContactInfo />
          <Reveal direction="up" className="group relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl">
            <Image src="/images/building.jpg" alt="Alpha Fussion office building" fill sizes="(min-width:1024px) 420px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
          </Reveal>
        </div>
        <Reveal direction="left" className="card p-6 sm:p-10">
          <Eyebrow>Get In Touch</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900">Send Us a Message</h2>
          <p className="mb-8 mt-2 text-slate-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
          <ContactForm />
        </Reveal>
      </Section>

      <Section id="map" className="grid gap-8 pt-0 lg:grid-cols-2">
        <Reveal direction="right" className="card overflow-hidden p-2">
          <iframe
            title={`${site.name} location`}
            src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
            className="h-full min-h-80 w-full rounded-xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
        <Reveal direction="left">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Frequently Asked Questions</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold text-navy-900">Got Questions?</h2>
            </div>
            <Button href="/contact" variant="ghost" className="py-2">View All FAQs</Button>
          </div>
          <p className="mb-6 mt-2 text-sm text-slate-600">Here are some common questions. If you need more help, feel free to contact us.</p>
          <FAQ />
        </Reveal>
      </Section>

      <CTABanner cta="Contact Us Now" href={`mailto:${site.email}`} />
    </>
  );
}
