import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(({ slug, title, short, icon: Icon, tint }) => (
        <StaggerItem key={slug}>
          <Link
            href={`/services/${slug}`}
            className="card group relative flex h-full items-start gap-4 overflow-hidden p-6 transition-shadow duration-300 hover:shadow-2xl hover:shadow-brand-500/20"
          >
            <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-linear-to-r from-brand-600 to-cyan-glow transition-transform duration-500 group-hover:scale-x-100" />
            <span className={`grid size-14 shrink-0 place-items-center rounded-2xl ${tint} transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
              <Icon className="size-7" />
            </span>
            <div className="flex-1">
              <h3 className="font-bold text-navy-900">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{short}</p>
              {detailed && (
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn More <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </div>
            {!detailed && (
              <span className="grid size-8 shrink-0 place-items-center self-center rounded-full bg-brand-600 text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="size-4" />
              </span>
            )}
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
