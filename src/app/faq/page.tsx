import { FAQAccordion } from "@/components/faq-accordion";
import { SectionShell } from "@/components/section-shell";
import { faqItems } from "@/lib/data";

export default function FAQPage() {
  return (
    <SectionShell
      eyebrow="FAQ"
      title="Questions people ask before handing over their dramatic computer"
      description="Short answers, clean legal boundaries, and no nonsense about miracle installs."
    >
      <FAQAccordion items={faqItems} />
    </SectionShell>
  );
}
