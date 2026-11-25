"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CircleCheck, Layers, Mail, MessageSquareText, Send, Settings, User, type LucideIcon } from "lucide-react";
import { services } from "@/lib/data";

const inputCls =
  "w-full rounded-xl border border-brand-100 bg-white py-3 pl-11 pr-4 text-sm text-navy-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100";

function Field({ label, icon: Icon, children }: { label: string; icon: LucideIcon; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy-900">{label}</span>
      <span className="relative block">
        <Icon className="pointer-events-none absolute left-4 top-3.5 size-4 text-slate-400" />
        {children}
      </span>
    </label>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    form.reset();
    setStatus("sent");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your Name *" icon={User}>
          <input name="name" required placeholder="Enter your name" className={inputCls} />
        </Field>
        <Field label="Your Email *" icon={Mail}>
          <input name="email" type="email" required placeholder="Enter your email" className={inputCls} />
        </Field>
        <Field label="Subject *" icon={Layers}>
          <select name="subject" required defaultValue="" className={`${inputCls} appearance-none`}>
            <option value="" disabled>Select a subject</option>
            <option>New Project</option>
            <option>Get a Quote</option>
            <option>Support</option>
            <option>Partnership</option>
          </select>
        </Field>
        <Field label="Service Interest" icon={Settings}>
          <select name="service" defaultValue="" className={`${inputCls} appearance-none`}>
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Your Message *" icon={MessageSquareText}>
        <textarea name="message" required rows={4} placeholder="Tell us about your project..." className={`${inputCls} resize-y`} />
      </Field>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        disabled={status === "sending"}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-brand-600 to-brand-500 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/30 disabled:opacity-70"
      >
        <Send className={`size-4 ${status === "sending" ? "animate-bounce" : ""}`} />
        {status === "sending" ? "Sending..." : "Send Message"}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </motion.button>

      <AnimatePresence>
        {status === "sent" && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
          >
            <CircleCheck className="size-5" /> Thank you! Your message has been sent. We&apos;ll get back to you soon.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
