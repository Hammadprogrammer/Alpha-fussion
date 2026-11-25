import { CircleCheck, type LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

type Feature = { icon: LucideIcon; title: string; text?: string };

export function FeatureGrid({ items, compact = false, cols = 4 }: { items: Feature[]; compact?: boolean; cols?: 2 | 4 }) {
  return (
    <Stagger className={`grid ${compact ? "gap-3 sm:gap-4" : "gap-3 sm:gap-6"} ${cols === 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2"}`}>
      {items.map(({ icon: Icon, title, text }) =>
        compact ? (
          <StaggerItem key={title}>
            <div className="card group h-full px-3 py-5 text-center transition-colors duration-300 hover:border-brand-300">
              <Icon className="mx-auto size-7 text-brand-600 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6" />
              <h3 className="mt-3 text-sm font-bold text-navy-900">{title}</h3>
              {text && <p className="mt-1.5 text-sm text-slate-600">{text}</p>}
            </div>
          </StaggerItem>
        ) : (
          <StaggerItem key={title}>
            <div className="card group relative h-full overflow-hidden px-3 py-6 text-center transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-brand-500/40 sm:px-6 sm:py-8">
              <span className="absolute inset-0 bg-linear-to-br from-brand-600 via-brand-500 to-cyan-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-white/30 transition-all duration-700 group-hover:left-[150%]" />
              <span className="absolute -right-8 -top-8 size-24 rounded-full bg-white/10 opacity-0 transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />
              <span className="relative mx-auto grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 shadow-md transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[360deg] group-hover:bg-white group-hover:shadow-xl sm:size-16">
                <Icon className="size-6 sm:size-8" />
              </span>
              <h3 className="relative mt-4 text-[0.95rem] font-bold leading-snug text-navy-900 transition-colors duration-500 group-hover:text-white sm:mt-5 sm:text-lg">{title}</h3>
              {text && <p className="relative mt-1.5 text-xs leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-white/90 sm:mt-2 sm:text-sm">{text}</p>}
              <span className="relative mx-auto mt-4 block h-1 w-8 rounded-full bg-brand-200 transition-all duration-500 group-hover:w-16 group-hover:bg-white" />
            </div>
          </StaggerItem>
        ),
      )}
    </Stagger>
  );
}

export function CheckList({ items, cols = 1 }: { items: string[]; cols?: 1 | 2 }) {
  return (
    <Stagger className={`grid gap-3 ${cols === 2 ? "sm:grid-cols-2" : ""}`} stagger={0.07}>
      {items.map((t) => (
        <StaggerItem key={t}>
          <p className="flex items-center gap-2.5 text-sm font-medium text-navy-900">
            <CircleCheck className="size-5 shrink-0 fill-brand-600 text-white" />
            {t}
          </p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function ValueCards({ items }: { items: Feature[] }) {
  return (
    <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, text }) => (
        <StaggerItem key={title}>
          <div className="card group flex h-full items-center gap-4 p-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/30 transition-transform duration-500 group-hover:rotate-12">
              <Icon className="size-7" />
            </span>
            <div>
              <h3 className="font-bold text-navy-900">{title}</h3>
              {text && <p className="mt-1 text-sm text-slate-600">{text}</p>}
            </div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
