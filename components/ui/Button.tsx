import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "light" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-linear-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50",
  outline: "border border-white/30 text-white hover:bg-white/10",
  light: "bg-white text-brand-600 hover:bg-brand-50 shadow-lg",
  ghost: "border border-brand-200 bg-white text-brand-600 hover:bg-brand-50",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode | false;
  className?: string;
};

export function Button({ href, children, variant = "primary", icon, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {children}
      {icon !== false && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">{icon ?? <ArrowRight className="size-4" />}</span>
      )}
    </Link>
  );
}
