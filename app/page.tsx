import { Users } from "lucide-react";
import { techs } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TechOrbit, TechPills } from "@/components/sections/TechStack";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <PageHero
        large
        badge="Innovative IT Solutions"
        title={<>Innovating Today, <br />Building <Highlight>Tomorrow</Highlight></>}
        description="Alpha Fussion is a full-stack IT solutions company, delivering modern web, mobile and cloud solutions to help your business grow in the digital world. Alpha Fussion is a full-stack IT solutions company specializing in web development, mobile applications, and cloud-based solutions. We deliver innovative, scalable, and secure digital solutions that empower businesses to enhance efficiency, strengthen their online presence, and achieve sustainable growth."
        image="/home.png"
        imageAlt="Alpha Fussion IT solutions: web, mobile, backend, WordPress, AI and cloud services"
        illustration
        aspect="aspect-[1672/941]"
        floats={[]}
        actions={
          <>
            <Button href="/services">Explore Our Services</Button>
            <Button href="/about" variant="outline" icon={<Users className="size-4" />}>About Us</Button>
          </>
        }
      />

      <Section>
        <SectionHeading
          eyebrow="Our Services"
          title={<>Comprehensive <Highlight>IT Solutions</Highlight></>}
          description="From development to deployment, we provide end-to-end solutions tailored to your needs."
        />
        <ServicesGrid />
      </Section>

      <Section className="grid items-center gap-12 pt-0 lg:grid-cols-2">
        <Reveal scale><TechOrbit /></Reveal>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our Technologies"
            title={<>Powered by Modern <Highlight>Technologies</Highlight></>}
            description="We use the latest and most reliable technologies to build solutions that are fast, scalable and future-ready."
          />
          <div className="mt-6"><TechPills names={techs.map((t) => t.name)} /></div>
          <Reveal delay={0.2}><Button href="/services" className="mt-8">Explore Our Services</Button></Reveal>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
