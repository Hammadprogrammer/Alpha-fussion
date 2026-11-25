"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { nav } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);

  if (openPath !== pathname) {
    setOpenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-lg shadow-brand-900/5 backdrop-blur-lg" : "bg-white"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.label} className="group relative">
              <Link
                href={item.href}
                className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-brand-600" : "text-navy-900 hover:text-brand-600"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />}
                {isActive(item.href) && (
                  <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-brand-500" />
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full w-60 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="card overflow-hidden p-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-navy-900 transition-colors hover:bg-brand-50 hover:text-brand-600"
                      >
                        {c.label}
                        <ArrowRight className="size-3.5 opacity-0 transition-all group-hover:opacity-60" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5 sm:inline-flex"
          >
            Get In Touch <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-lg text-navy-900 hover:bg-brand-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-brand-100 bg-white shadow-xl lg:hidden"
          >
            <ul className="max-h-[calc(100dvh-5rem)] space-y-1 overflow-y-auto overscroll-contain px-4 py-4">
              {nav.map((item, i) => (
                <motion.li key={item.label} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.04 }}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg px-3 py-2.5 font-medium ${isActive(item.href) ? "bg-brand-50 text-brand-600" : "text-navy-900"}`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 border-l border-brand-100 pl-3">
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} className="block py-2 text-sm text-slate-600 hover:text-brand-600">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.li>
              ))}
              <li className="pt-3 sm:hidden">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-brand-600 to-brand-500 py-3 font-semibold text-white shadow-lg shadow-brand-500/30"
                >
                  Get In Touch <ArrowRight className="size-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
