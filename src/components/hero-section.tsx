import Link from "next/link";
import { heroBadges, trustPoints } from "@/lib/data";
import { FadeIn, FloatyGlow } from "@/components/motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(129,140,248,0.18),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#020617_100%)]">
      <FloatyGlow />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(2,6,23,0.1),_rgba(2,6,23,0.85))]" />
      <div className="relative mx-auto grid min-h-[75vh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <FadeIn className="space-y-8">
          <div className="flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                {badge}
              </span>
            ))}
          </div>
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">⚡ Remote PC Rescue, AI Setup, and Tech Magic</p>
            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Your PC is crying. Vimal is here. 🛠️
            </h1>
            <p className="text-3xl font-black tracking-tight text-cyan-300 sm:text-4xl">
              Just $1 or ₹50 💸
            </p>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Worldwide remote support for optimization, software setup, AI tools, troubleshooting, and performance fixes, without the boring tech nonsense 😌
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request-support"
              className="rounded-full bg-cyan-400 px-6 py-3.5 text-center text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Book a Fix
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white/10"
            >
              Pricing
            </Link>
            <Link
              href="/ai-installation"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white/10"
            >
              Install AI on My PC
            </Link>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.55)] backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm text-slate-400">Machine diagnosis 🧠</p>
                <p className="mt-2 text-2xl font-bold text-white">Fast, funny, accurate</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">Your PC is not dead. It’s just being dramatic. 😮‍💨</p>
              </div>
              <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                <p className="text-sm text-cyan-100">AI readiness 🤖</p>
                <p className="mt-2 text-2xl font-bold text-white">RTX? We cook.</p>
                <p className="mt-3 text-sm leading-6 text-cyan-50/90">Need AI on your PC? Let’s make your machine smarter than your classmates. 🚀</p>
              </div>
              <div className="sm:col-span-2 rounded-3xl border border-white/10 bg-[linear-gradient(120deg,_rgba(15,23,42,0.95),_rgba(30,41,59,0.8))] p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Trust without the fluff</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {trustPoints.map((point) => (
                    <div key={point} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
