import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { services, site } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";
import { SocialIcons } from "@/components/ui/SocialIcons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Our Approach", href: "/approach" },
  { label: "Blog", href: "/blog" },
];

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <div className="mt-4 space-y-2.5 text-sm text-white/65">{children}</div>
    </div>
  );
}

const linkCls = "block transition-all duration-200 hover:translate-x-1 hover:text-cyan-glow";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute -right-40 -top-40 size-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo dark />
          <p className="mt-4 text-sm text-white/65">{site.tagline}</p>
          <SocialIcons className="mt-6" />
        </div>
        <Column title="Quick Links">
          {quickLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkCls}>
              {l.label}
            </Link>
          ))}
        </Column>
        <Column title="Our Services">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className={linkCls}>
              {s.title}
            </Link>
          ))}
        </Column>
        <Column title="Contact Us">
          <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-cyan-glow">
            <Mail className="size-4 text-brand-400" /> {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-cyan-glow">
            <Phone className="size-4 text-brand-400" /> {site.phone}
          </a>
          <p className="flex items-center gap-3">
            <MapPin className="size-4 text-brand-400" /> {site.city}
          </p>
        </Column>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/55 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms &amp; Conditions</Link>
            <Link href="#" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
