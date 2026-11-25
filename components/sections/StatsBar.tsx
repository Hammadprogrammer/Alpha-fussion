import { stats } from "@/lib/data";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";

export function StatsBar() {
  return (
    <Reveal scale>
      <div className="bg-hero relative grid grid-cols-2 gap-6 overflow-hidden rounded-3xl px-6 py-8 text-white shadow-2xl shadow-brand-900/30 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
        {stats.map(({ icon: Icon, value, suffix, label }) => (
          <div key={label} className="flex items-center justify-center gap-4">
            <Icon className="size-9 text-brand-400" />
            <div>
              <p className="text-3xl font-extrabold">
                <Counter value={value} suffix={suffix} />
              </p>
              <p className="text-sm text-white/70">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
