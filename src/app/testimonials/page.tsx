import { SectionShell } from "@/components/section-shell";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/lib/data";

export default function TestimonialsPage() {
  return (
    <SectionShell
      eyebrow="Testimonials"
      title="Global proof that the machines can, in fact, be saved"
      description="Sample testimonials from multiple countries so the brand feels active, trusted, and already in motion."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} {...item} />
        ))}
      </div>
    </SectionShell>
  );
}
