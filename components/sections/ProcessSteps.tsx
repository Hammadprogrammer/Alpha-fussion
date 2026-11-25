import { ArrowRight, type LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

type Step = { icon: LucideIcon; title: string; text: string };

export function ProcessSteps({ steps, numbered = false, boxed = false }: { steps: Step[]; numbered?: boolean; boxed?: boolean }) {
  const cols = steps.length > 4 ? "md:grid-cols-3 xl:grid-cols-6" : "lg:grid-cols-4";
  return (
    <Stagger className={`grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 ${cols}`} stagger={0.12}>
      {steps.map(({ icon: Icon, title, text }, i) => (
        <StaggerItem key={title} className="relative">
          <div className={`group flex h-full flex-col items-center text-center ${boxed ? "card px-3 pb-5 pt-8 sm:px-4 sm:pb-6" : ""}`}>
            {numbered && (
              <span className="absolute -top-3 left-1/2 grid size-7 -translate-x-1/2 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white shadow-lg shadow-brand-500/40">
                {i + 1}
              </span>
            )}
            <span className="relative grid size-14 place-items-center rounded-full border border-brand-100 bg-white text-brand-600 shadow-lg shadow-brand-500/10 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white sm:size-16">
              <span className="absolute inset-0 rounded-full border-2 border-brand-400/40 opacity-0 group-hover:animate-pulse-ring group-hover:opacity-100" />
              <Icon className="size-6 sm:size-7" />
            </span>
            <h3 className="mt-4 text-[0.95rem] font-bold text-navy-900 sm:text-base">
              {!numbered && `${i + 1}. `}
              {title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">{text}</p>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className={`absolute -right-5 top-10 hidden size-5 text-brand-400 ${steps.length > 4 ? "xl:block" : "lg:block"}`} />
          )}
        </StaggerItem>
      ))}
    </Stagger>
  );
}
