"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navigation } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm font-semibold tracking-[0.18em] text-white uppercase"
        >
          <span className="flex size-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-white/5 text-xl shadow-[0_0_30px_rgba(34,211,238,0.2)]">
            💻
          </span>
          <span className="hidden leading-tight sm:inline">Vimal Global PC Specialist</span>
          <span className="sm:hidden">VGPS</span>
        </Link>

        <div className="hidden justify-center xl:flex">
          <nav className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full border border-transparent bg-white/[0.02] px-3 py-2 text-center text-sm text-slate-300 transition hover:border-white/10 hover:bg-white/8 hover:text-white",
                    active && "border-white/10 bg-white/10 text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex shrink-0 items-center justify-end gap-3">
          <Link
            href="/pricing"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 lg:inline-flex xl:hidden"
          >
            Pricing
          </Link>
          <Link
            href="/request-support"
            className="hidden rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:inline-flex"
          >
            Book a Fix
          </Link>
          <button
            type="button"
            className="inline-flex rounded-full border border-white/10 p-2 text-slate-200 xl:hidden"
            aria-label="Open navigation"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
