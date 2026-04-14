import { SectionShell } from "@/components/section-shell";
import { aboutHighlights } from "@/lib/data";

export default function AboutPage() {
  return (
    <SectionShell
      eyebrow="About Vimal"
      title="Passionate PC specialist, AI installer, and enemy of unnecessary lag"
      description="Confident, human, approachable, and actually interested in solving the problem instead of using twelve paragraphs to say reinstall your drivers."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 leading-8 text-slate-300 backdrop-blur-xl">
          <p>
            Vimal is the kind of PC specialist who enjoys taking a machine from sluggish nonsense to clean, stable, and actually fun to use. The focus is practical remote support, AI tool setup, optimization, legal software installation, and solving the kind of technical mess that ruins a productive day.
          </p>
          <p className="mt-4">
            The vibe is bold because the problems are real. Clients get honest guidance, realistic hardware expectations, and a process designed for normal humans, power users, creators, and gamers who want help without being talked down to.
          </p>
        </div>
        <div className="grid gap-4">
          {aboutHighlights.map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">
              {item}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
