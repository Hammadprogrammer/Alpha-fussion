import type { ReactNode } from "react";

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20 ${className}`}>
      {children}
    </section>
  );
}
