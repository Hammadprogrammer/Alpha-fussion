"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronRight, Plus } from "lucide-react";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const active = open === i;
        return (
          <div key={f.q} className={`card overflow-hidden transition-colors ${active ? "border-brand-300" : ""}`}>
            <button
              onClick={() => setOpen(active ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-navy-900"
              aria-expanded={active}
            >
              <span className="flex items-center gap-2">
                <ChevronRight className={`size-4 text-brand-500 transition-transform ${active ? "rotate-90" : ""}`} />
                {f.q}
              </span>
              <motion.span animate={{ rotate: active ? 45 : 0 }} className="text-brand-600">
                <Plus className="size-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                  <p className="px-5 pb-4 pl-11 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
