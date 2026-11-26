import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { BlogExplorer } from "@/components/blog/BlogExplorer";
import { Newsletter } from "@/components/sections/Newsletter";

export const metadata: Metadata = {
  title: "Blog",
  description: "Expert insights on web development, mobile apps, backend engineering, AI, cloud, video editing and graphic design from the Alpha Fussion team.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative flex h-[200px] w-full items-center justify-center overflow-hidden bg-hero text-center text-white">
        <div className="bg-grid pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="animate-spin-slow pointer-events-none absolute -right-32 top-1/2 size-[640px] -translate-y-1/2 rounded-full border border-brand-400/20" />
        <div className="pointer-events-none absolute -right-10 top-1/2 size-[440px] -translate-y-1/2 rounded-full border border-cyan-glow/20" />
        <div className="relative px-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Blog</h1>
          <nav aria-label="Breadcrumb" className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-white sm:text-base">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="size-4" />
            <span aria-current="page" className="underline decoration-2 underline-offset-4">Blog</span>
          </nav>
        </div>
      </section>

      <Section id="articles">
        <BlogExplorer />
      </Section>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Newsletter />
      </div>
    </>
  );
}
