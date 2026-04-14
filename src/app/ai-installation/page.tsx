import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { aiTools } from "@/lib/data";

export default function AIInstallationPage() {
  return (
    <SectionShell
      eyebrow="AI installation"
      title="Need AI on your PC? Let’s wake up the machine."
      description="Local model tooling, hardware checks, practical expectations, and clean setup help for people who want usable AI instead of vague YouTube wizardry."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-lg font-semibold text-white">AI stacks supported</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {aiTools.map((tool) => (
              <div key={tool} className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-200">
                {tool}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">Reality check</p>
          <h2 className="mt-3 text-3xl font-black text-white">Hardware matters, hype does not.</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-cyan-50/90">
            <li>• NVIDIA GPUs are generally the smoothest path for local AI setups.</li>
            <li>• AMD and Intel can still work for some flows, but tool support varies.</li>
            <li>• CPU-only setups are possible, just slower. Very much slower sometimes.</li>
            <li>• The goal is a realistic, stable setup, not fake promises and sadness.</li>
          </ul>
          <Link href="/request-support" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50">
            Start My AI Setup
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
