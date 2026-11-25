import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  if (!detailed)
    return (
      <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ slug, title, short, image, icon: Icon, tint }) => (
          <StaggerItem key={slug}>
            <Link
              href={`/services/${slug}`}
              className="card group relative flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-brand-500/20"
            >
              <span className="relative block aspect-video overflow-hidden bg-white">
                <Image src={image} alt={title} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-contain transition-transform duration-700 group-hover:scale-105" />
              </span>
              <div className="relative flex flex-1 flex-col border-t border-brand-100 p-6">
                <span className={`absolute -top-7 left-6 grid size-14 place-items-center rounded-2xl shadow-lg ring-4 ring-white ${tint} transition-transform duration-500 group-hover:rotate-6`}>
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn More <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-linear-to-r from-brand-600 to-cyan-glow transition-transform duration-500 group-hover:scale-x-100" />
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    );

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
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                Learn More <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
