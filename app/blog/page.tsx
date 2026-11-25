import type { Metadata } from "next";
import { CodeXml, Lightbulb, Newspaper, PenLine } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Highlight } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { BlogExplorer } from "@/components/blog/BlogExplorer";
import { Newsletter } from "@/components/sections/Newsletter";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Our Blog"
        title={<>Latest Insights &amp; <br /><Highlight>Tech Updates</Highlight></>}
        description="Stay updated with the latest trends, tips, and insights in technology, development, and digital innovation."
        image="/images/startup.jpg"
        imageAlt="Team working on laptops"
        floats={[CodeXml, Lightbulb, Newspaper, PenLine]}
        actions={<Button href="#articles">Explore Our Blog</Button>}
      />

      <Section id="articles">
        <BlogExplorer />
      </Section>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Newsletter />
      </div>
    </>
  );
}
