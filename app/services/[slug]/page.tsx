import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, Gauge, Play, ShieldCheck } from "lucide-react";
import { processSteps, services } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { MediaCard } from "@/components/sections/MediaCard";
import { CheckList, FeatureGrid } from "@/components/sections/FeatureGrid";
import { TechOrbit, TechPills } from "@/components/sections/TechStack";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTABanner } from "@/components/sections/CTABanner";
import Link from "next/link";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

const getService = (slug: string) => services.find((s) => s.slug === slug);

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  return s ? { title: s.title, description: s.short } : {};
}

export default function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  return (
    <Suspense fallback={<section className="bg-hero min-h-[560px]" />}>
      <ServiceDetail params={params} />
    </Suspense>
  );
}

async function ServiceDetail({ params }: Pick<PageProps<"/services/[slug]">, "params">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const [first, ...rest] = service.title.split(" ");

  return (
    <>
      <PageHero
        badge={<Link href="/services" className="flex items-center gap-1.5"><ArrowLeft className="size-3.5" /> Back to Services</Link>}
        title={<>{first} <Highlight>{rest.join(" ")}</Highlight></>}
        description={service.heroText ?? service.short + " We build fast, secure and scalable solutions tailored to your needs."}
        image={service.heroImage ?? service.image}
        imageAlt={service.title}
        illustration={!!service.heroImage}
        aspect={service.heroAspect}
        floats={service.heroImage ? [] : [service.icon, Gauge, ShieldCheck, service.features[0].icon]}
        actions={
          <>
            <Button href="/contact">Start Your Project</Button>
            <Button href="#about" variant="outline" icon={<Play className="size-4 fill-current" />}>Watch Demo</Button>
          </>
        }
      />

      <Section id="about" className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal direction="right">
          <Eyebrow>About Our Service</Eyebrow>
          <h2 className="mt-3 text-[1.7rem] font-extrabold leading-tight text-navy-900 sm:text-3xl">Custom {service.title} for Every Business</h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600 sm:text-base">{service.description}</p>
          <div className="mt-6"><CheckList items={service.highlights} /></div>
        </Reveal>
        {service.aboutImage ? (
          <MediaCard src={service.aboutImage} alt={`${service.title} illustration`} direction="right" aspect="aspect-[1672/941]" illustration className="order-first lg:order-last" />
        ) : (
          <MediaCard src="/images/code-screen.jpg" alt={`${service.title} at work`} play direction="right" className="order-first lg:order-last" />
        )}
      </Section>

      <Section className="pt-0">
        <SectionHeading eyebrow="Our Key Features" title={`Why Choose Our ${service.title}?`} />
        <div className="mt-10"><FeatureGrid items={service.features} /></div>
      </Section>

      <Section className="grid items-center gap-8 pt-0 lg:grid-cols-2 lg:gap-12">
        <Reveal scale><TechOrbit /></Reveal>
        <div>
          <SectionHeading align="left" eyebrow="Our Technologies" title="Powered by Modern Technologies" description="We use the latest and most reliable technologies to build solutions that are fast, scalable and future-ready." />
          <div className="mt-6"><TechPills names={service.techs} /></div>
        </div>
      </Section>

      <Section className="grid items-center gap-10 pt-0 lg:grid-cols-[0.8fr_2fr]">
        <Reveal direction="right">
          <Eyebrow>Our Work Process</Eyebrow>
          <h2 className="mt-3 text-[1.7rem] font-extrabold leading-tight text-navy-900 sm:text-3xl">Simple &amp; Transparent Process</h2>
          <p className="mt-3 text-slate-600">From idea to launch — we keep the process simple, clear and collaborative.</p>
          <Button href="/contact" className="mt-6">Get Started</Button>
        </Reveal>
        <ProcessSteps steps={processSteps} />
      </Section>

      <CTABanner title="Let's Build Something Amazing Together" text={`Get a professional ${service.title.toLowerCase()} solution that grows your business.`} cta="Contact Us" />
    </>
  );
}
