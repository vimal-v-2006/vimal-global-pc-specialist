import Link from "next/link";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export function PricingCard({ title, price, description, features, cta, popular }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_16px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl",
        popular && "border-cyan-400/40 bg-cyan-400/10",
      )}
    >
      {popular ? (
        <span className="absolute right-5 top-5 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-950">
          Most Wanted
        </span>
      ) : null}
      <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">{title}</p>
      <div className="mt-4 text-4xl font-black text-white">{price}</div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-slate-200">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-cyan-300" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="/request-support"
        className={cn(
          "mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition",
          popular ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200" : "border border-white/10 bg-white/5 text-white hover:bg-white/10",
        )}
      >
        {cta}
      </Link>
    </div>
  );
}
