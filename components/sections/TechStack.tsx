import Image from "next/image";
import { techIcons, techs } from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

function TechTile({ name, icon, className = "" }: { name: string; icon: string; className?: string }) {
  return (
    <div
      title={name}
      className={`grid size-12 place-items-center rounded-xl border border-brand-100 bg-white p-2.5 shadow-lg sm:size-14 sm:rounded-2xl sm:p-3 shadow-brand-500/15 transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <Image src={icon} alt={name} width={32} height={32} className="size-full object-contain" />
    </div>
  );
}

export function TechLogos({ names }: { names?: string[] }) {
  const list = names ? techs.filter((t) => names.includes(t.name)) : techs;
  return (
    <Stagger className="flex flex-wrap gap-3" stagger={0.06}>
      {list.map((t) => (
        <StaggerItem key={t.name}>
          <TechTile {...t} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function TechPills({ names }: { names: string[] }) {
  return (
    <Stagger className="flex flex-wrap gap-2.5" stagger={0.05}>
      {names.map((n) => (
        <StaggerItem key={n}>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-medium text-navy-900 shadow-sm transition-colors hover:border-brand-400">
            {techIcons[n] ? (
              <Image src={techIcons[n]} alt="" width={18} height={18} className="size-[18px] object-contain" />
            ) : (
              <span className="size-2 rounded-full bg-linear-to-r from-brand-500 to-cyan-glow" />
            )}
            {n}
          </span>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function TechOrbit() {
  const ring = techs.slice(0, 8);
  return (
    <div className="relative mx-auto aspect-square w-[calc(100%-3.5rem)] max-w-md">
      <div className="absolute inset-[18%] rounded-full bg-brand-500/25 blur-3xl" />
      <div className="absolute inset-[28%] grid place-items-center">
        <span className="animate-pulse-ring absolute inset-0 rounded-3xl border-2 border-brand-400/50" />
        <div className="relative grid size-full place-items-center rounded-2xl border border-brand-100 bg-white p-4 shadow-2xl shadow-brand-500/40 sm:rounded-3xl sm:p-6">
          <Image src="/logo-mark.png" alt="Alpha Fussion" width={595} height={450} className="animate-float h-auto w-full" />
        </div>
      </div>
      <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-brand-300">
        {ring.map((t, i) => {
          const angle = (i / ring.length) * 2 * Math.PI;
          return (
            <div
              key={t.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%` }}
            >
              <TechTile {...t} className="[animation:spin_18s_linear_infinite_reverse]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
