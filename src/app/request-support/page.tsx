import { MultiStepRequestForm } from "@/components/multi-step-request-form";
import { PaymentQRSection } from "@/components/payment-qr-section";
import { SectionShell } from "@/components/section-shell";

export default function RequestSupportPage() {
  return (
    <SectionShell
      eyebrow="Request support"
      title="Fast booking, less typing, more fixing"
      description="Just the basics up front, optional PC spec detection, skip-friendly category steps, and dead-simple payment choices."
    >
      <div className="grid gap-8 xl:grid-cols-[1.25fr_0.75fr]">
        <MultiStepRequestForm />
        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-lg font-semibold text-white">What happens after submission?</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <li>• Vimal reviews the request and replies on your chosen chat app.</li>
              <li>• If needed, PC specs can be checked later during the conversation.</li>
              <li>• Remote access details can be shared later on WhatsApp or Telegram.</li>
              <li>• You can pay now with the tiny booking fee or just choose pay later.</li>
            </ul>
          </div>
          <PaymentQRSection />
        </div>
      </div>
    </SectionShell>
  );
}
