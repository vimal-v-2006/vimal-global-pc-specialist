import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { PaymentQRSection } from "@/components/payment-qr-section";
import { SectionShell } from "@/components/section-shell";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { funnyProblems, faqItems, howItWorks, pricingPlans, serviceHighlights, testimonials } from "@/lib/data";
import { PricingCard } from "@/components/pricing-card";

export default function Home() {
  return (
    <>
      <HeroSection />

      <SectionShell
        eyebrow="Service highlights"
        title="From slow potato PC to beast mode"
        description="Clean, cinematic service cards for optimization, troubleshooting, legal software installs, AI setup, and all the useful rescue work normal users actually need. No cracked apps, no piracy clownery."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceHighlights.map((item) => (
            <ServiceCard key={item.key} item={item} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="What I can fix"
        title="The machine is being weird. Good, now we have a starting point."
        description="Funny wording, serious outcomes. If your PC is acting dramatic, this is the intervention stage."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {funnyProblems.map((problem) => (
            <div key={problem} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-lg font-semibold text-white backdrop-blur-xl">
              {problem}
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="How it works"
        title="Simple process. Zero mysterious tech priest nonsense."
        description="Users send their details, choose services, add the chaos, pay the consultation fee, then schedule the remote rescue."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {howItWorks.map((item, index) => (
            <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Step {index + 1}</p>
              <p className="mt-3 text-xl font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Testimonials"
        title="Believable praise from people whose machines survived"
        description="Sample social proof cards with personality, because trust matters and boring testimonials should go to jail."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Pricing"
        title="Tiny booking price, much less drama"
        description="$1 for foreign clients, ₹50 for Indian clients, or just choose pay later and explain the task first."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Payments"
        title="Pay fast or pay later"
        description="Choose the amount, scan the QR if needed, upload the screenshot, and finish the request cleanly."
      >
        <PaymentQRSection />
      </SectionShell>

      <SectionShell
        eyebrow="FAQ"
        title="The sensible questions, answered"
        description="Trustworthy answers, no shady promises, no piracy, and no pretending every machine can run a local supercomputer."
      >
        <FAQAccordion items={faqItems} />
      </SectionShell>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-[linear-gradient(135deg,_rgba(34,211,238,0.18),_rgba(15,23,42,0.92))] p-8 shadow-[0_20px_80px_rgba(8,145,178,0.25)]">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-100">Final CTA</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-white">Errors, crashes, weird behavior? Send the patient.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-cyan-50/90">
            Whether it’s AI setup, software installs, performance cleanup, or a PC that woke up and chose violence, the request form is ready.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/request-support" className="rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-50">
              Send a Request
            </Link>
            <Link href="/services" className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
