import type { Metadata } from "next";
import Image from "next/image";
import { CircleCheck, CodeXml } from "lucide-react";
import { processSteps, whyUs } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { Float, Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title={<>Comprehensive IT Solutions for Your <Highlight>Growth</Highlight></>}
        description="From web and mobile apps to AI-powered solutions, we provide end-to-end IT services to turn your ideas into scalable digital products."
        image="/images/tech-desk.jpg"
        imageAlt="Glowing laptop"
        actions={<Button href="#offer">Explore Our Services</Button>}
      />

      <Section id="offer">
        <SectionHeading eyebrow="Our Services" title="What We Offer" description="Innovative, reliable, and scalable IT services to meet your business needs." />
        <ServicesGrid detailed />
      </Section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-2xl bg-linear-to-br from-brand-50 to-brand-100/60 p-5 sm:rounded-3xl sm:p-8 lg:grid-cols-[0.8fr_2fr] lg:p-12">
          <Reveal direction="right">
            <Eyebrow>Our Process</Eyebrow>
            <h2 className="mt-3 text-[1.7rem] font-extrabold leading-tight text-navy-900 sm:text-3xl">How We Work</h2>
            <p className="mt-3 text-slate-600">A simple and transparent process to bring your ideas to life.</p>
            <Button href="/contact" className="mt-6">Start Your Project</Button>
          </Reveal>
          <ProcessSteps steps={processSteps} />
        </div>
      </div>

      <Section className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal direction="right" className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-brand-900/20 sm:rounded-3xl">
            <Image src="/images/workspace.jpg" alt="Team workspace with laptops" fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
          </div>
          <Float className="absolute -top-5 right-2 sm:-right-4 sm:-top-6" delay={0.3}>
            <span className="grid size-12 place-items-center rounded-2xl bg-navy-900 text-white shadow-xl sm:size-16"><CodeXml className="size-6 sm:size-8" /></span>
          </Float>
          <Float className="absolute -bottom-5 right-3 sm:-bottom-6 sm:right-6" delay={0.6}>
            <span className="card flex items-center gap-2 px-3 py-2.5 text-xs font-semibold text-navy-900 sm:px-4 sm:py-3 sm:text-sm">
              <CircleCheck className="size-5 fill-brand-600 text-white" /> Your Success is Our Priority
            </span>
          </Float>
        </Reveal>
        <div>
          <SectionHeading align="left" eyebrow="Why Choose Alpha Fussion" title="Your Trusted IT Partner" description="We are committed to delivering high-quality solutions with innovation, professionalism, and dedicated support." />
          <div className="mt-8">
            <FeatureGrid items={whyUs} compact />
          </div>
        </div>
      </Section>

      <CTABanner title="Ready to Build Something Amazing?" />
    </>
  );
}
