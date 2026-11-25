import Image from "next/image";
import { Send } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

type Props = {
  title?: string;
  text?: string;
  cta?: string;
  href?: string;
};

export function CTABanner({
  title = "Ready to Start Your Next Project?",
  text = "Let's turn your ideas into reality with Alpha Fussion.",
  cta = "Get In Touch",
  href = "/contact",
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <Reveal scale>
        <div className="bg-hero relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl px-6 py-9 text-center text-white shadow-2xl shadow-brand-900/30 sm:rounded-3xl sm:px-10 md:flex-row md:justify-between md:text-left lg:px-12">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <span className="animate-float grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-500/20 text-cyan-glow sm:size-16">
              <Send className="size-7 sm:size-8" />
            </span>
            <div>
              <h2 className="text-[1.45rem] font-extrabold leading-tight sm:text-3xl">{title}</h2>
              <p className="mt-2 text-sm text-white/75 sm:text-base">{text}</p>
            </div>
          </div>
          <div className="relative flex items-center gap-6">
            <Button href={href} className="shrink-0">{cta}</Button>
            <Image src="/logo-mark.png" alt="" width={595} height={450} className="hidden w-24 rounded-xl bg-white/90 p-2 opacity-90 lg:block" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
