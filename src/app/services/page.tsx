import { SectionShell } from "@/components/section-shell";
import { ServiceCard } from "@/components/service-card";
import { legalNotice, serviceHighlights } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="pb-10">
      <SectionShell
        eyebrow="Services"
        title="Useful tech help for real people, power users, and systems in distress"
        description="Visually rich service cards, clean breakdowns, and one important legal line so nobody gets cute with piracy."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceHighlights.map((item) => (
            <ServiceCard key={item.key} item={item} />
          ))}
        </div>
        <div className="mt-8 rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">
          {legalNotice}
        </div>
      </SectionShell>
    </div>
  );
}
