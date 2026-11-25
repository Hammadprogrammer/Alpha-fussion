import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
};

export function Eyebrow({ children, center, light }: { children: ReactNode; center?: boolean; light?: boolean }) {
  return (
    <p className={`flex items-center gap-2 text-sm font-semibold ${light ? "text-cyan-glow" : "text-brand-600"} ${center ? "justify-center" : ""}`}>
      <span className="h-0.5 w-8 rounded bg-current" />
      {children}
      {center && <span className="h-0.5 w-8 rounded bg-current" />}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "center", light, className = "" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto max-w-2xl text-center" : ""} ${className}`}>
      <Eyebrow center={center} light={light}>{eyebrow}</Eyebrow>
      <h2 className={`mt-3 text-[1.7rem] font-extrabold leading-tight tracking-tight sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>{title}</h2>
      {description && <p className={`mt-3 text-[0.95rem] leading-relaxed sm:mt-4 sm:text-base ${light ? "text-white/70" : "text-slate-600"}`}>{description}</p>}
    </Reveal>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="text-gradient">{children}</span>;
}
