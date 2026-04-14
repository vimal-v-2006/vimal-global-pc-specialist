import { SectionShell } from "@/components/section-shell";
import { contactMethods } from "@/lib/data";

export default function ContactPage() {
  return (
    <SectionShell
      eyebrow="Contact"
      title="Need a quote, a remote rescue, or a second opinion on your machine drama?"
      description="Clear contact methods, scheduling direction, and enough personality that the page still feels alive."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {contactMethods.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <Icon className="size-6" />
              </div>
              <p className="mt-5 text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm font-medium text-cyan-100">{item.value}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.hint}</p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
