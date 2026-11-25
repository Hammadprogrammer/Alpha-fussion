import Image from "next/image";
import Link from "next/link";

export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2 ${className}`} aria-label="Alpha Fussion home">
      <span className={`relative grid size-11 place-items-center overflow-hidden rounded-xl ${dark ? "bg-white p-1" : ""}`}>
        <Image
          src="/logo-mark.png"
          alt="Alpha Fussion logo"
          width={595}
          height={450}
          className="h-auto w-full transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
          priority
        />
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${dark ? "text-white" : "text-navy-900"}`}>
        Alpha <span className="text-brand-500">Fussion</span>
      </span>
    </Link>
  );
}
