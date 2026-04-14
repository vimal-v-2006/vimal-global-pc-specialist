import { PricingCard } from "@/components/pricing-card";
import { SectionShell } from "@/components/section-shell";
import { pricingPlans } from "@/lib/data";

export default function PricingPage() {
  return (
    <SectionShell
      eyebrow="Pricing"
      title="Flexible pricing for clean fixes, major rescues, and custom weirdness"
      description="Final price depends on complexity, apps requested, hardware compatibility, and time required."
    >
      <div className="grid gap-6 lg:grid-cols-3 xl:grid-cols-5">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </div>
    </SectionShell>
  );
}
