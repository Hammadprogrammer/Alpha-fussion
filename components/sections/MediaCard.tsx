import Image from "next/image";
import { Play } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  src: string;
  alt: string;
  play?: boolean;
  direction?: "left" | "right";
  className?: string;
  badge?: React.ReactNode;
  aspect?: string;
  illustration?: boolean;
};

export function MediaCard({ src, alt, play = false, direction = "left", className = "", badge, aspect = "aspect-[16/10]", illustration }: Props) {
  return (
    <Reveal direction={direction} className={`relative ${className}`}>
      {illustration && <div className="absolute -inset-2 rounded-[2rem] bg-brand-400/25 blur-3xl sm:-inset-4" />}
      <div className={`group relative overflow-hidden rounded-2xl shadow-2xl sm:rounded-3xl shadow-brand-900/20 ${aspect} ${illustration ? "animate-float bg-white ring-1 ring-brand-100" : ""}`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 600px, 100vw" className={`transition-transform duration-700 group-hover:scale-105 ${illustration ? "object-contain" : "object-cover"}`} />
        {!illustration && <div className="absolute inset-0 bg-linear-to-tr from-navy-950/50 via-transparent to-brand-500/20" />}
        {play && (
          <button aria-label="Play video" className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center">
            <span className="animate-pulse-ring absolute inset-0 rounded-full bg-white/50" />
            <span className="relative grid size-16 place-items-center rounded-full bg-white text-brand-600 shadow-xl transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 size-7 fill-current" />
            </span>
          </button>
        )}
      </div>
      {badge}
    </Reveal>
  );
}
