import type { Metadata } from "next";
import { CircleCheck, ClipboardList, Lightbulb, Rocket } from "lucide-react";
import { approachPoints, approachSteps, values } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { MediaCard } from "@/components/sections/MediaCard";
import { CheckList, ValueCards } from "@/components/sections/FeatureGrid";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = { title: "Our Approach" };

export default function ApproachPage() {
  return (
    <>
      <PageHero
        badge="Our Approach"
        title={<>Our <Highlight>Approach</Highlight></>}
        description="A smart, structured, and collaborative approach to turn your ideas into powerful digital solutions."
        image="/images/meeting.jpg"
        imageAlt="Team planning a project"
        floats={[ClipboardList, Lightbulb, CircleCheck, Rocket]}
        actions={<Button href="/contact">Let&apos;s Work Together</Button>}
      />

      <Section>
        <SectionHeading eyebrow="Our Process" title={<>Our Development <Highlight>Process</Highlight></>} description="A clear and transparent process to ensure your project is a success." />
        <div className="mt-14"><ProcessSteps steps={approachSteps} numbered boxed /></div>
      </Section>

      <Section className="grid items-center gap-12 pt-0 lg:grid-cols-2">
        <MediaCard src="/images/network.jpg" alt="Connected technology network" />
        <Reveal direction="right">
          <SectionHeading align="left" eyebrow="Why Choose Us" title={<>Why Our Approach <Highlight>Stands Out?</Highlight></>} description="We combine technical expertise with a customer-first mindset to deliver high-quality solutions, on time and within budget." />
          <div className="mt-6"><CheckList items={approachPoints} cols={2} /></div>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="card p-8 lg:p-12">
          <SectionHeading eyebrow="Our Values" title={<>Our Core <Highlight>Values</Highlight></>} description="Our approach is built on strong values that drive everything we do." />
          <div className="mt-10"><ValueCards items={values} /></div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
