import Link from "next/link";
import type { ServiceItem } from "@/lib/data";

export function ServiceCard({ item }: { item: ServiceItem }) {
  const Icon = item.icon;

  return (
    <div className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_16px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]">
      <div className="flex size-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
        <Icon className="size-7" />
      </div>
      <div className="mt-5 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm font-medium text-cyan-200">{item.short}</p>
        </div>
        <p className="text-sm leading-7 text-slate-300">{item.description}</p>
        <ul className="space-y-2 text-sm text-slate-300">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-cyan-300" />
              {bullet}
            </li>
          ))}
        </ul>
        <Link
          href="/request-support"
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
        >
          {item.cta}
        </Link>
      </div>
    </div>
  );
}
