import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheck, Clock, Eye, Headphones, Rocket, ShieldCheck, Target } from "lucide-react";
import { allTechs, services } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { MediaCard } from "@/components/sections/MediaCard";
import { CheckList, FeatureGrid } from "@/components/sections/FeatureGrid";
import { TechPills } from "@/components/sections/TechStack";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = { title: "About Us" };

const missionVision = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To empower businesses of every size with reliable, secure and innovative digital solutions that streamline operations, strengthen their brand and accelerate sustainable growth.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be a globally trusted technology partner, recognised for engineering excellence, transparent collaboration and solutions that create measurable, long-term value for our clients.",
  },
];

const reasons = [
  { icon: Rocket, title: "Innovative Solutions", text: "Modern technologies and forward-thinking ideas." },
  { icon: ShieldCheck, title: "Reliable & Secure", text: "Industry best practices in every project." },
  { icon: Clock, title: "On-Time Delivery", text: "Clear milestones and committed deadlines." },
  { icon: Headphones, title: "Dedicated Support", text: "A responsive team before and after launch." },
];

const highlights = [
  "End-to-End Project Ownership",
  "Transparent Communication",
  "Agile & Structured Delivery",
  "Scalable, Future-Ready Code",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Alpha Fussion"
        title={<>Innovating Today, <br />Building <Highlight>Tomorrow</Highlight></>}
        description="Alpha Fussion is a full-service technology company that helps startups, growing businesses and established enterprises succeed in the digital world. We combine strategy, design and engineering to deliver websites, mobile applications, backend systems, AI integrations, cloud infrastructure and creative media that are built to perform. Every engagement is driven by a clear understanding of your goals, a transparent process and a commitment to quality, so you receive solutions that are secure, scalable and ready for the future."
        image="/images/server.jpg"
        imageAlt="Modern data center infrastructure"
        actions={
          <>
            <Button href="/services">Explore Our Services</Button>
            <Button href="/contact" variant="outline">Talk to Our Team</Button>
          </>
        }
      />

      <Section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <MediaCard src="/images/tech-desk.jpg" alt="Laptop on a modern workspace" aspect="aspect-[4/3]" />
        <Reveal direction="right">
          <SectionHeading align="left" eyebrow="Who We Are" title={<>Your Trusted <Highlight>Technology Partner</Highlight></>} />
          <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600 sm:text-base">
            Alpha Fussion is a Lahore-based IT solutions company serving clients across the globe. Our multidisciplinary team of developers, designers and strategists works as an extension of your business, translating complex requirements into clean, intuitive and high-performing digital products.
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600 sm:text-base">
            From the first consultation to deployment and ongoing support, we take full ownership of every project. We follow proven engineering standards, communicate openly at every stage and measure our success by the results we deliver for you.
          </p>
          <div className="mt-6"><CheckList items={highlights} cols={2} /></div>
          <Button href="/approach" className="mt-8">Discover Our Approach</Button>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          eyebrow="What We Do"
          title={<>Complete Digital <Highlight>Services</Highlight> Under One Roof</>}
          description="A comprehensive range of services designed to support every stage of your digital journey, from concept and design to development, deployment and growth."
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ slug, title, short, icon: Icon, tint, highlights: points }) => (
            <StaggerItem key={slug} className="h-full">
              <Link
                href={`/services/${slug}`}
                className="card group relative flex h-full flex-col overflow-hidden p-6 transition-shadow duration-300 hover:shadow-2xl hover:shadow-brand-500/20"
              >
                <span className={`grid size-14 place-items-center rounded-2xl ${tint} transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{short}</p>
                <ul className="mt-4 flex-1 space-y-2 border-t border-brand-100 pt-4">
                  {points.slice(0, 3).map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-navy-900">
                      <CircleCheck className="mt-0.5 size-4 shrink-0 fill-brand-600 text-white" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn More <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-linear-to-r from-brand-600 to-cyan-glow transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="grid items-center gap-12 pt-0 lg:grid-cols-[1.4fr_1fr] lg:divide-x lg:divide-brand-100">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Choose Us"
            title={<>We Bring Your Ideas <Highlight>to Life</Highlight></>}
            description="With a skilled team, a client-first mindset and a disciplined delivery process, we build solutions that are dependable today and adaptable tomorrow."
          />
          <div className="mt-8"><FeatureGrid items={reasons} compact /></div>
        </div>
        <Stagger className="space-y-8 lg:pl-12">
          {missionVision.map(({ icon: Icon, title, text }) => (
            <StaggerItem key={title} className="flex gap-5">
              <span className="grid size-16 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600"><Icon className="size-8" /></span>
              <div>
                <h3 className="text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Our Expertise"
          title={<>Technologies <Highlight>We Work With</Highlight></>}
          description="We select proven, industry-leading tools and frameworks for every project, ensuring performance, security and long-term maintainability."
        />
        <div className="mx-auto mt-10 max-w-5xl [&>div]:justify-center"><TechPills names={allTechs} /></div>
      </Section>

      <Section className="pt-0">
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-linear-to-br from-brand-50 to-brand-100 p-5 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
          <Reveal direction="right">
            <SectionHeading
              align="left"
              eyebrow="Our Team"
              title={<>A Team of Passionate <Highlight>Developers & Creators</Highlight></>}
            />
            <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600 sm:text-base">
              Our people are the foundation of everything we deliver. We bring together experienced software engineers, UI/UX designers, cloud specialists, video editors and graphic designers who share a passion for solving real business problems.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600 sm:text-base">
              We invest in continuous learning, follow modern development practices and collaborate closely with every client, so your project benefits from fresh ideas, technical depth and genuine commitment to your success.
            </p>
            <Button href="/contact" className="mt-8">Let&apos;s Work Together</Button>
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
