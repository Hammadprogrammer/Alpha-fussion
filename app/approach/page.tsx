import type { Metadata } from "next";
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
        description="A smart, structured and collaborative process that turns your ideas into powerful digital solutions. We begin by understanding your needs, listening carefully to your goals, ideas and challenges. Next, we plan and strategize, crafting a tailored roadmap built for the best results. Our experts then design and develop your product with creativity, clean code and modern technologies. Every feature is tested and optimized to ensure top performance, security and quality. Finally, we launch your project and help it grow with ongoing support, because your success is always our priority."
        image="/p1.png"
        imageAlt="How we work: understand, plan, design, test and launch"
        illustration
        aspect="aspect-[1672/941]"
        floats={[]}
        actions={<Button href="/contact">Let&apos;s Work Together</Button>}
      />

      <Section>
        <SectionHeading eyebrow="Our Process" title={<>Our Development <Highlight>Process</Highlight></>} description="A clear and transparent process to ensure your project is a success." />
        <div className="mt-14"><ProcessSteps steps={approachSteps} numbered boxed /></div>
      </Section>

      <Section className="grid items-center gap-12 pt-0 lg:grid-cols-2">
        <MediaCard src="/p2.png" alt="Why our approach stands out" aspect="aspect-[1672/941]" illustration />
        <Reveal direction="right">
          <SectionHeading align="left" eyebrow="Why Choose Us" title={<>Why Our Approach <Highlight>Stands Out?</Highlight></>} description="We don't just design, we create solutions that help you grow, stand out and succeed." />
          <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600 sm:text-base">
            Every project starts with goal-focused design, because your goals are our priority. Our team brings fresh, creative ideas and a strategic approach where every decision has a purpose. With proven results that drive real growth, a collaborative process that combines your ideas with our expertise, and a commitment to always delivering on schedule, we give you a smarter approach with greater impact.
          </p>
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
