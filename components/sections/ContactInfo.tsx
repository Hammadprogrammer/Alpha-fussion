import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

const items = [
  { icon: Phone, title: "Phone Number", value: site.phone, note: "Mon – Fri, 9 AM – 8 PM", href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: Mail, title: "Email Address", value: site.email, note: "We reply within 24 hours", href: `mailto:${site.email}` },
  { icon: MapPin, title: "Our Office", value: site.city, note: "State Life Building, Lahore", href: "#map" },
];

export function ContactInfo() {
  return (
    <Stagger className="space-y-4">
      {items.map(({ icon: Icon, title, value, note, href }) => (
        <StaggerItem key={title}>
          <a href={href} className="card group flex items-center gap-4 p-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white">
              <Icon className="size-6" />
            </span>
            <div>
              <p className="text-sm font-bold text-navy-900">{title}</p>
              <p className="font-semibold text-navy-900">{value}</p>
              <p className="text-xs text-slate-500">{note}</p>
            </div>
          </a>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
