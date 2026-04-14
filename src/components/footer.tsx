import Link from "next/link";
import { footerBlurb, navigation } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 text-sm text-slate-400 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-white">Vimal Global PC Specialist</p>
          <p className="max-w-2xl leading-7">{footerBlurb}</p>
          <p className="text-xs text-slate-500">© 2026 Vimal Global PC Specialist. Fixing broken PCs and broken moods.</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
