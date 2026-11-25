import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { posts } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { BlogCard } from "@/components/blog/BlogCard";
import { CTABanner } from "@/components/sections/CTABanner";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  return (
    <Suspense fallback={<section className="bg-hero min-h-[420px]" />}>
      <BlogPost params={params} />
    </Suspense>
  );
}

async function BlogPost({ params }: Pick<PageProps<"/blog/[slug]">, "params">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).concat(posts.filter((p) => p.slug !== post.slug)).slice(0, 3);

  return (
    <>
      <section className="bg-hero relative overflow-hidden text-white">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-4xl px-4 pb-32 pt-10 text-center sm:px-6 sm:pb-40 sm:pt-14">
          <Reveal direction="down">
            <Link href="/blog" className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-1.5 text-xs hover:bg-white/10">
              <ArrowLeft className="size-3.5" /> Back to Blog
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="mt-6 inline-block rounded-full bg-brand-600 px-3 py-1 text-xs font-medium">{post.category}</span>
            <h1 className="mt-4 text-[1.75rem] font-extrabold leading-tight sm:text-5xl">{post.title}</h1>
            <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
              <span className="flex items-center gap-1.5"><Calendar className="size-4" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="size-4" /> {post.readTime}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto -mt-24 max-w-4xl px-4 sm:-mt-32 sm:px-6">
        <Reveal scale className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl shadow-brand-900/30 sm:aspect-[16/8] sm:rounded-3xl">
          <Image src={post.image} alt={post.title} fill priority sizes="(min-width: 1024px) 900px, 100vw" className="object-cover" />
        </Reveal>
        <article className="card mt-6 space-y-5 p-5 text-base leading-relaxed text-slate-700 sm:mt-10 sm:p-12 sm:text-lg">
          <p className="text-lg font-medium text-navy-900 sm:text-xl">{post.excerpt}</p>
          {post.body.map((para, i) => (
            <Reveal key={i} delay={i * 0.05}><p>{para}</p></Reveal>
          ))}
        </article>
      </div>

      <Section>
        <SectionHeading eyebrow="Keep Reading" title="Related Articles" />
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <StaggerItem key={p.slug}><BlogCard post={p} /></StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTABanner />
    </>
  );
}
