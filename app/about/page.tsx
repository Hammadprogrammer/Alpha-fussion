import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Target } from "lucide-react";
import { aboutReasons, stats } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { PageHero } from "@/components/sections/PageHero";
import { MediaCard } from "@/components/sections/MediaCard";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { TechLogos } from "@/components/sections/TechStack";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = { title: "About Us" };

const missionVision = [
  { icon: Target, title: "Our Mission", text: "To empower businesses with cutting-edge technology and deliver exceptional digital solutions." },
  { icon: Eye, title: "Our Vision", text: "To be a global leader in IT solutions and innovation." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Alpha Fussion"
        title={<>Innovating Today, <br />Building <Highlight>Tomorrow</Highlight></>}
        description="We are a full-stack IT solutions company, dedicated to turning ideas into powerful digital experiences."
        image="/images/office-2.jpg"
        imageAlt="Alpha Fussion office"
        actions={<Button href="/services">Our Services</Button>}
      />

      <Section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <MediaCard src="/images/react-code.jpg" alt="Code on a laptop screen" />
        <Reveal direction="right">
          <SectionHeading align="left" eyebrow="Who We Are" title="Your Trusted IT Partner" />
          <p className="mt-4 leading-relaxed text-slate-600">
            Alpha Fussion is a modern IT services company, offering innovative web, mobile, and software solutions. With a passion for technology and a commitment to quality, we help businesses grow in the digital world.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            From stunning websites to powerful mobile apps and scalable backend systems — we build solutions that are fast, secure, and future-ready.
          </p>
          <Button href="/approach" className="mt-7">Learn More About Us</Button>
        </Reveal>
      </Section>

      <Section className="grid gap-12 pt-0 lg:grid-cols-[1.4fr_1fr] lg:divide-x lg:divide-brand-100">
        <div>
          <SectionHeading align="left" eyebrow="Why Choose Us" title="We Bring Your Ideas to Life" description="With a skilled team and a client-first approach, we deliver high-quality solutions that make a difference." />
          <div className="mt-8"><FeatureGrid items={aboutReasons} compact /></div>
        </div>
        <Stagger className="space-y-8 lg:pl-12">
          {missionVision.map(({ icon: Icon, title, text }) => (
            <StaggerItem key={title} className="flex gap-5">
              <span className="grid size-16 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600"><Icon className="size-8" /></span>
              <div>
                <h3 className="text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="grid items-center gap-10 pt-0 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <SectionHeading align="left" eyebrow="Our Expertise" title="Technologies We Work With" description="We use the latest technologies to build scalable and modern solutions." />
          <div className="mt-8"><TechLogos /></div>
        </div>
        <Reveal direction="left" className="bg-hero grid grid-cols-3 divide-x divide-white/10 rounded-3xl px-3 py-6 text-center text-white shadow-2xl shadow-brand-900/30 sm:p-8">
          {[{ value: 2, suffix: "+", label: "Years Experience", icon: stats[1].icon }, { ...stats[0], label: "Happy Clients" }, { value: 100, suffix: "%", label: "Client Satisfaction", icon: stats[2].icon }].map(({ icon: Icon, value, suffix, label }) => (
            <div key={label} className="px-2">
              <Icon className="mx-auto size-6 text-brand-400 sm:size-7" />
              <p className="mt-3 text-2xl font-extrabold sm:text-3xl"><Counter value={value} suffix={suffix} /></p>
              <p className="mt-1 text-xs text-white/70">{label}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-linear-to-br from-brand-50 to-brand-100 p-5 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-12">
          <Reveal direction="right">
            <SectionHeading align="left" eyebrow="Our Team" title="A Team of Passionate Developers & Creators" description="Our team consists of skilled developers, designers, and problem solvers who are always ready to bring your ideas to life." />
            <Button href="/contact" className="mt-7">Let&apos;s Work Together</Button>
          </Reveal>
          <Reveal direction="left" scale className="relative order-first aspect-[4/3] overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl lg:order-last">
            <Image src="/images/team.jpg" alt="Our team collaborating" fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
