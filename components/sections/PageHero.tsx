import Image from "next/image";
import type { ReactNode } from "react";
import { CodeXml, Cloud, Settings, Smartphone, type LucideIcon } from "lucide-react";
import { Float, Reveal } from "@/components/motion/Reveal";

type Props = {
  badge: ReactNode;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  actions?: ReactNode;
  floats?: LucideIcon[];
  large?: boolean;
  illustration?: boolean;
  aspect?: string;
};

const positions = [
  "left-0 top-6 sm:-left-6",
  "right-2 -top-4",
  "-right-4 bottom-16",
  "left-10 -bottom-6",
];

export function PageHero({ badge, title, description, image, imageAlt, actions, floats = [CodeXml, Cloud, Smartphone, Settings], large, illustration, aspect }: Props) {
  return (
    <section className="bg-hero relative overflow-hidden text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="animate-spin-slow pointer-events-none absolute -right-32 top-1/2 size-[640px] -translate-y-1/2 rounded-full border border-brand-400/20" />
      <div className="pointer-events-none absolute -right-10 top-1/2 size-[440px] -translate-y-1/2 rounded-full border border-cyan-glow/20" />

      <div className={`relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 ${large ? "py-12 sm:py-20 lg:py-28" : "py-12 sm:py-16 lg:py-20"}`}>
        <div>
          <Reveal direction="down" duration={0.5}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/15 px-4 py-1.5 text-xs font-medium text-brand-100">
              <span className="relative flex size-2">
                <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-cyan-glow" />
                <span className="relative inline-flex size-2 rounded-full bg-cyan-glow" />
              </span>
              {badge}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className={`mt-5 font-extrabold leading-[1.1] tracking-tight ${large ? "text-[2.1rem] sm:text-5xl lg:text-6xl" : "text-[2rem] sm:text-5xl"}`}>
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/75 sm:text-lg">{description}</p>
          </Reveal>
          {actions && (
            <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              {actions}
            </Reveal>
          )}
        </div>

        <Reveal direction="right" delay={0.2} scale className="relative order-first mx-auto w-full max-w-xl lg:order-last">
          <div className="absolute -inset-3 rounded-[2rem] bg-brand-500/30 blur-3xl sm:-inset-6" />
          <div
            className={`relative overflow-hidden rounded-2xl border sm:rounded-3xl border-white/15 shadow-2xl shadow-brand-900/60 ${
              illustration ? `animate-float bg-white ${aspect ?? "aspect-[3/2]"}` : (aspect ?? "aspect-[4/3]")
            }`}
          >
            <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 560px, 100vw" className={illustration ? "object-contain" : "object-cover"} />
            {!illustration && <div className="absolute inset-0 bg-linear-to-tr from-navy-950/70 via-brand-700/20 to-transparent" />}
          </div>
          {floats.slice(0, 4).map((Icon, i) => (
            <Float key={i} delay={0.4 + i * 0.25} className={`absolute hidden sm:block ${positions[i]}`}>
              <div className="grid size-14 place-items-center rounded-2xl border border-white/20 bg-white/10 text-cyan-glow shadow-lg shadow-brand-500/40 backdrop-blur-md">
                <Icon className="size-7" />
              </div>
            </Float>
          ))}
        </Reveal>
      </div>

      <svg className="relative block h-12 w-full text-[#f6f8ff] sm:h-16" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0 80V40C240 80 480 10 720 30s480 50 720 10v40H0Z" />
      </svg>
    </section>
  );
}
