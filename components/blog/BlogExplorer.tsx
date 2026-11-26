"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Search } from "lucide-react";
import { blogCategories, posts } from "@/lib/data";
import { BlogCard } from "./BlogCard";

const PER_PAGE = 6;

export function BlogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<"new" | "old">("new");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = posts.filter(
      (p) => (!category || p.category === category) && (!q || `${p.title} ${p.excerpt}`.toLowerCase().includes(q)),
    );
    return sort === "new" ? list : [...list].reverse();
  }, [query, category, sort]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const reset = () => setPage(1);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
      <div>
        <div className="flex justify-end">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "new" | "old")}
            className="rounded-xl border border-brand-100 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-brand-400"
          >
            <option value="new">Latest First</option>
            <option value="old">Oldest First</option>
          </select>
        </div>

        <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, transition: { delay: i * 0.06 } }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <BlogCard post={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {visible.length === 0 && <p className="card mt-8 p-10 text-center text-slate-500">No articles found.</p>}

        {pages > 1 && (
          <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`grid size-10 place-items-center rounded-full text-sm font-semibold transition-all ${
                  n === current ? "bg-brand-600 text-white shadow-lg shadow-brand-500/40" : "border border-brand-100 bg-white text-navy-900 hover:border-brand-400"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(pages, current + 1))}
              className="grid size-10 place-items-center rounded-full border border-brand-100 bg-white text-navy-900 hover:border-brand-400"
              aria-label="Next page"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        )}
      </div>

      <aside className="space-y-6">
        <div className="flex overflow-hidden rounded-xl border border-brand-100 bg-white">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              reset();
            }}
            placeholder="Search articles..."
            className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
          />
          <span className="grid w-12 place-items-center bg-brand-600 text-white"><Search className="size-4" /></span>
        </div>

        <div className="card p-5">
          <h3 className="flex items-center gap-2 font-bold text-navy-900"><span className="h-4 w-1 rounded bg-brand-600" />Categories</h3>
          <ul className="mt-4 space-y-1">
            {blogCategories.map(({ name, icon: Icon }) => {
              const count = posts.filter((p) => p.category === name).length;
              const active = category === name;
              return (
                <li key={name}>
                  <button
                    onClick={() => {
                      setCategory(active ? null : name);
                      reset();
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-all hover:translate-x-1 ${
                      active ? "bg-brand-600 text-white" : "text-navy-900 hover:bg-brand-50"
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Icon className={`size-4 ${active ? "" : "text-brand-500"}`} />{name}</span>
                    <span className={active ? "" : "text-slate-500"}>{count}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="card p-5">
          <h3 className="flex items-center gap-2 font-bold text-navy-900"><span className="h-4 w-1 rounded bg-brand-600" />Recent Posts</h3>
          <ul className="mt-4 space-y-4">
            {posts.slice(0, 3).map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group flex gap-3">
                  <span className="relative aspect-video w-24 shrink-0 self-start overflow-hidden rounded-lg bg-white ring-1 ring-brand-100">
                    <Image src={p.image} alt={p.title} fill sizes="96px" className="object-cover transition-transform group-hover:scale-110" />
                  </span>
                  <span>
                    <span className="line-clamp-2 text-sm font-semibold text-navy-900 group-hover:text-brand-600">{p.title}</span>
                    <span className="text-xs text-slate-500">{p.date}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-hero relative overflow-hidden rounded-2xl p-6 text-white shadow-xl shadow-brand-900/30">
          <h3 className="text-lg font-bold">Have a Project in Mind?</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            Our experts are ready to help you plan, design and build the right digital solution for your business.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-600 transition-transform hover:-translate-y-0.5"
          >
            Get a Free Consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </aside>
    </div>
  );
}
