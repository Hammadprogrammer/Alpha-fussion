import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { Post } from "@/lib/data";

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 320px, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <span className="absolute bottom-3 left-3 rounded-full bg-brand-600 px-3 py-1 text-xs font-medium text-white">{post.category}</span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-bold leading-snug text-navy-900 transition-colors group-hover:text-brand-600">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1"><Calendar className="size-3.5" /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock className="size-3.5" /> {post.readTime}</span>
        </div>
        <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
          Read More <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
