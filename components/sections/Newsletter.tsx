"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-hero relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl px-8 py-10 text-white shadow-2xl shadow-brand-900/30 lg:flex-row lg:justify-between"
    >
      <Send className="animate-float absolute left-8 top-1/2 hidden size-14 -translate-y-1/2 text-white/80 lg:block" />
      <div className="text-center lg:ml-24 lg:text-left">
        <p className="text-sm text-white/70">Subscribe to Our Newsletter</p>
        <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">Get the Latest Updates</h2>
        <p className="mt-1 text-sm text-white/70">Be the first to know about new blog posts, services and tech insights.</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
          e.currentTarget.reset();
        }}
        className="flex w-full max-w-md overflow-hidden rounded-full bg-white p-1.5"
      >
        <input type="email" required placeholder="Your Email Address" className="min-w-0 flex-1 bg-transparent px-4 text-sm text-navy-900 outline-none" />
        <button className="rounded-full bg-linear-to-r from-brand-600 to-brand-500 px-6 py-2.5 text-sm font-semibold transition-transform hover:scale-105">
          {done ? "Subscribed!" : "Subscribe"}
        </button>
      </form>
    </motion.div>
  );
}
