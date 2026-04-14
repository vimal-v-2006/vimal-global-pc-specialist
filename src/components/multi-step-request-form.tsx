"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "http://localhost:4100";
const REQUESTS_ENDPOINT = `${API_BASE_URL}/requests`;
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HardwareCheckBadge } from "@/components/hardware-check-badge";
import { FunnyToastMessage } from "@/components/funny-toast-message";
import {
  aiTools,
  creativeApps,
  essentialApps,
  gamingApps,
  legalNotice,
  serviceHighlights,
} from "@/lib/data";
import { cn } from "@/lib/utils";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  contactApp: string;
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  osVersion: string;
  formFactor: string;
  gpuVendor: string;
  categories: string[];
  selectedTools: string[];
  customRequest: string;
  skipSpecs: boolean;
  skipNeeds: boolean;
  skipTools: boolean;
  skipCustom: boolean;
  acceptedTerms: boolean;
  paymentChoice: string;
  paymentScreenshot: string;
  paymentScreenshotDataUrl: string;
  paymentStage: "choose" | "qr" | "thanks" | "done";
};

const steps = [
  "Basic Info",
  "PC Specs",
  "What Do You Need?",
  "Specific Tools / Apps",
  "Custom Request",
  "Payment",
];

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  contactApp: "WhatsApp",
  cpu: "",
  gpu: "",
  ram: "",
  storage: "",
  osVersion: "",
  formFactor: "Laptop",
  gpuVendor: "NVIDIA",
  categories: [],
  selectedTools: [],
  customRequest: "",
  skipSpecs: false,
  skipNeeds: false,
  skipTools: false,
  skipCustom: false,
  acceptedTerms: false,
  paymentChoice: "$1 for foreigners",
  paymentScreenshot: "",
  paymentScreenshotDataUrl: "",
  paymentStage: "choose",
};

const validationMessages: Record<number, string> = {
  0: "Bro, I need your name, phone, and email. I'm helpful, not psychic. 😅",
  5: "Tick the terms box so we can keep this smooth and legal ✅",
};

export function MultiStepRequestForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [toast, setToast] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (form.paymentStage !== "done") return;
    const timer = window.setTimeout(() => router.push("/"), 2200);
    return () => window.clearTimeout(timer);
  }, [form.paymentStage, router]);

  const selectedServiceTitles = useMemo(
    () => serviceHighlights.filter((item) => form.categories.includes(item.key)).map((item) => item.title),
    [form.categories],
  );

  const optionsByCategory = useMemo(() => {
    const options: string[] = [];
    if (form.categories.includes("ai-setup")) options.push(...aiTools);
    if (form.categories.includes("software-installation")) options.push(...essentialApps);
    if (form.categories.includes("creative-tools")) options.push(...creativeApps);
    if (form.categories.includes("gaming-support")) options.push(...gamingApps);
    return [...new Set(options)];
  }, [form.categories]);

  const showExpandedCustom = form.categories.includes("custom-request");
  const needsQr = form.paymentChoice !== "Pay later";

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function toggleFromArray(field: "categories" | "selectedTools", value: string) {
    setForm((current) => ({
      ...current,
      [field]: current[field].includes(value)
        ? current[field].filter((item) => item !== value)
        : [...current[field], value],
    }));
  }

  function skipSpecs() {
    setForm((current) => ({ ...current, skipSpecs: true }));
    setToast(`Nice 😌 Skipped. We’ll sort specs later on ${form.contactApp}.`);
  }

  function validateStep(currentStep: number) {
    if (currentStep === 0 && (!form.fullName || !form.phone || !form.email)) return false;
    if (currentStep === 5 && !form.acceptedTerms) return false;
    return true;
  }

  function nextStep() {
    if (!validateStep(step)) {
      setToast(validationMessages[step]);
      return;
    }
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function prevStep() {
    if (step === 5 && form.paymentStage !== "choose") {
      setForm((current) => ({ ...current, paymentStage: current.paymentStage === "done" ? "thanks" : "choose" }));
      return;
    }
    setStep((current) => Math.max(current - 1, 0));
  }

  async function submitMock() {
    if (!validateStep(step)) {
      setToast(validationMessages[step]);
      return;
    }

    if (needsQr && form.paymentStage === "choose") {
      setForm((current) => ({ ...current, paymentStage: "qr" }));
      return;
    }

    if (needsQr && form.paymentStage === "qr") {
      if (!form.paymentScreenshot) {
        setToast("Pick your payment screenshot first, chief. 🖼️");
        return;
      }
      setForm((current) => ({ ...current, paymentStage: "thanks" }));
      return;
    }

    if (form.paymentStage === "thanks" || (!needsQr && form.paymentStage === "choose")) {
      setSubmitting(true);
      try {
        const payload = {
          id: `VGPS-${Date.now()}`,
          name: form.fullName,
          phone: form.phone,
          email: form.email,
          contactApp: form.contactApp,
          country: form.paymentChoice === "₹50 for Indians" ? "India" : "International",
          services: form.categories.length > 0 ? form.categories : ["Custom Request"],
          customRequest: form.customRequest || "Will share details on chat.",
          pcSpecs: {
            cpu: form.cpu,
            gpu: form.gpu,
            ram: form.ram,
            storage: form.storage,
            osVersion: form.osVersion,
            formFactor: form.formFactor,
            gpuVendor: form.gpuVendor,
          },
          paymentStatus: needsQr ? "Paid" : "Pending",
          paymentMode: needsQr ? "Screenshot payment" : "Pay later",
          paymentScreenshot: form.paymentScreenshot || "",
          paymentScreenshotDataUrl: form.paymentScreenshotDataUrl || "",
          requestStatus: "Pending",
          submittedDate: new Date().toISOString(),
        };

        const response = await fetch(REQUESTS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Failed to save request");
        }

        setForm((current) => ({ ...current, paymentStage: "done" }));
        setToast("Nice ✨ Request locked in.");
      } catch {
        setToast("Could not send the request right now. Check the backend URL and try again.");
      } finally {
        setSubmitting(false);
      }
    }
  }

  function onScreenshotChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      updateField("paymentScreenshot", file.name);
      updateField("paymentScreenshotDataUrl", typeof reader.result === "string" ? reader.result : "");
      setToast(`Screenshot selected 🖼️ ${file.name}`);
    };
    reader.readAsDataURL(file);
  }

  function submitButtonLabel() {
    if (step !== steps.length - 1) return "Continue";
    if (!needsQr) return form.paymentStage === "done" ? "Done" : "Submit Request";
    if (form.paymentStage === "choose") return "Continue to QR";
    if (form.paymentStage === "qr") return "I Paid, Continue";
    if (form.paymentStage === "thanks") return "Finish Request";
    return "Done";
  }

  return (
    <>
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.4)] backdrop-blur-xl sm:p-8">
        <div className="flex flex-wrap gap-3">
          {steps.map((label, index) => (
            <div
              key={label}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]",
                index === step
                  ? "border-cyan-300/40 bg-cyan-400/15 text-cyan-100"
                  : index < step
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                    : "border-white/10 bg-white/5 text-slate-400",
              )}
            >
              {index + 1}. {label}
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          {step === 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" value={form.fullName} onChange={(value) => updateField("fullName", value)} placeholder="Your good name" />
              <Field label="Phone number" value={form.phone} onChange={(value) => updateField("phone", value)} placeholder="Your WhatsApp-friendly number" />
              <Field label="Email ID" value={form.email} onChange={(value) => updateField("email", value)} placeholder="you@example.com" />
              <SelectField
                label="Choose contact app"
                value={form.contactApp}
                onChange={(value) => updateField("contactApp", value)}
                options={["WhatsApp", "Telegram"]}
              />
            </div>
          ) : null}

          {step === 1 ? (
            <div className="space-y-5">
              <div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">
                Specs are optional. If this part feels boring, skip it and we’ll sort it on {form.contactApp} like civilized chaos managers 😌
              </div>
              <button type="button" onClick={skipSpecs} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Skip This Part
              </button>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="CPU" value={form.cpu} onChange={(value) => updateField("cpu", value)} placeholder="Optional" />
                <Field label="GPU" value={form.gpu} onChange={(value) => updateField("gpu", value)} placeholder="Optional" />
                <Field label="RAM" value={form.ram} onChange={(value) => updateField("ram", value)} placeholder="Optional" />
                <Field label="Storage type" value={form.storage} onChange={(value) => updateField("storage", value)} placeholder="Optional" />
                <Field label="OS version" value={form.osVersion} onChange={(value) => updateField("osVersion", value)} placeholder="Optional" />
                <SelectField
                  label="Laptop or Desktop"
                  value={form.formFactor}
                  onChange={(value) => updateField("formFactor", value)}
                  options={["Laptop", "Desktop"]}
                />
                <SelectField
                  label="NVIDIA / AMD / Intel"
                  value={form.gpuVendor}
                  onChange={(value) => updateField("gpuVendor", value)}
                  options={["NVIDIA", "AMD", "Intel"]}
                />
                <div className="self-end">
                  <HardwareCheckBadge vendor={form.gpuVendor} />
                </div>
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="space-y-5">
              <div className="rounded-[1.5rem] border border-dashed border-white/15 p-5 text-sm leading-7 text-slate-300">
                You can skip this too. No need to explain everything here, I’ll contact you on {form.contactApp} soon, so no panic typing required 😌
              </div>
              <button
                type="button"
                onClick={() => {
                  updateField("skipNeeds", true);
                  setToast(`Nice 😌 Skipped. We’ll talk on ${form.contactApp} soon anyway.`);
                  setStep(3);
                }}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Skip This Part
              </button>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {serviceHighlights.map((service) => (
                  <button
                    key={service.key}
                    type="button"
                    onClick={() => toggleFromArray("categories", service.key)}
                    className={cn(
                      "rounded-[1.5rem] border p-5 text-left transition",
                      form.categories.includes(service.key)
                        ? "border-cyan-400/40 bg-cyan-400/10"
                        : "border-white/10 bg-slate-950/50 hover:border-white/20",
                    )}
                  >
                    <p className="text-base font-semibold text-white">{service.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{service.short}</p>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => toggleFromArray("categories", "custom-request")}
                  className={cn(
                    "rounded-[1.5rem] border p-5 text-left transition",
                    form.categories.includes("custom-request")
                      ? "border-cyan-400/40 bg-cyan-400/10"
                      : "border-white/10 bg-slate-950/50 hover:border-white/20",
                  )}
                >
                  <p className="text-base font-semibold text-white">Custom Request</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Best option if you just want to explain the task directly.</p>
                </button>
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Selected categories</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedServiceTitles.length > 0 ? selectedServiceTitles.map((service) => (
                    <span key={service} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100">
                      {service}
                    </span>
                  )) : <span className="text-sm text-slate-400">No worries. You can skip this and explain later.</span>}
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-dashed border-white/15 p-5 text-sm leading-7 text-slate-300">
                This part is optional too. Don’t rush typing your whole life story here, I’ll contact you on {form.contactApp} soon 😌
              </div>
              <button
                type="button"
                onClick={() => {
                  updateField("skipTools", true);
                  setToast(`Skipped 👍 We’ll sort the tool list on ${form.contactApp}.`);
                  setStep(4);
                }}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Skip This Part
              </button>
              {optionsByCategory.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {optionsByCategory.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleFromArray("selectedTools", option)}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-left text-sm transition",
                        form.selectedTools.includes(option)
                          ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-100"
                          : "border-white/10 bg-slate-950/50 text-slate-200 hover:border-white/20",
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-white/15 p-6 text-sm text-slate-400">
                  Nothing selected here, which is totally fine. Continue or skip, we’ll sort it on chat.
                </div>
              )}
            </div>
          ) : null}

          {step === 4 ? (
            <div className="space-y-4">
              <div className="rounded-[1.5rem] border border-dashed border-white/15 p-5 text-sm leading-7 text-slate-300">
                Don’t stress here either. Just type the rough idea, or skip and I’ll contact you soon on {form.contactApp}. Nice and easy 😎
              </div>
              <button
                type="button"
                onClick={() => {
                  updateField("skipCustom", true);
                  setToast(`All good 👌 I’ll get the details from you on ${form.contactApp}.`);
                  setStep(5);
                }}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Skip This Part
              </button>
              <label className="block text-sm font-semibold text-white">
                Tell me what you want fixed, installed, tuned, or rescued.
              </label>
              <textarea
                value={form.customRequest}
                onChange={(event) => updateField("customRequest", event.target.value)}
                className={cn(
                  "w-full rounded-[1.5rem] border border-white/10 bg-slate-950/60 px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500",
                  showExpandedCustom ? "min-h-72" : "min-h-56",
                )}
                placeholder="Example: install Ollama, fix lag, set up apps, clean startup, or whatever your machine is doing today."
              />
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-slate-300">
                Remote access details can be shared later on {form.contactApp}. No need to dump everything here in a hurry.
              </div>
            </div>
          ) : null}

          {step === 5 ? (
            <div className="space-y-5">
              {form.paymentStage === "choose" ? (
                <>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      "$1 for foreigners",
                      "₹50 for Indians",
                      "Pay later",
                    ].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => updateField("paymentChoice", option)}
                        className={cn(
                          "rounded-[1.5rem] border p-5 text-left transition",
                          form.paymentChoice === option
                            ? "border-cyan-400/40 bg-cyan-400/10"
                            : "border-white/10 bg-slate-950/50 hover:border-white/20",
                        )}
                      >
                        <p className="text-base font-semibold text-white">{option}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {option === "Pay later"
                            ? "Send the request first, payment can happen after the task is done. 😌"
                            : "Simple flat booking price. QR opens in the next step and screenshot is required. 💸"}
                        </p>
                      </button>
                    ))}
                  </div>
                </>
              ) : null}

              {form.paymentStage === "qr" ? (
                <div className="space-y-5 rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-6">
                  <p className="text-xl font-bold text-white">Pay here 💸</p>
                  <p className="text-sm leading-7 text-slate-300">
                    {form.paymentChoice === "₹50 for Indians"
                      ? "If you are Indian, pay ₹50 here 🇮🇳"
                      : "If you are a foreigner, pay $1 here 🌍"}
                  </p>
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white p-3 sm:max-w-md">
                    <Image
                      src="/qr-payment.png"
                      alt="Payment QR code"
                      width={720}
                      height={720}
                      className="h-auto w-full rounded-xl"
                      priority
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-white">Upload screenshot</p>
                    <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-[1.25rem] border border-dashed border-cyan-400/30 bg-slate-950/70 px-5 py-8 text-center text-sm text-slate-300 transition hover:border-cyan-300/50 hover:bg-slate-950">
                      <span className="font-medium text-white">Select from gallery 🖼️</span>
                      <span>Choose your payment screenshot and upload it here.</span>
                      <input type="file" accept="image/*" className="hidden" onChange={onScreenshotChange} />
                    </label>
                    {form.paymentScreenshot ? (
                      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                        Uploaded ✅ {form.paymentScreenshot}
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-400">
                        No screenshot selected yet.
                      </div>
                    )}
                  </div>
                </div>
              ) : null}

              {form.paymentStage === "thanks" ? (
                <div className="rounded-[1.75rem] border border-emerald-400/20 bg-emerald-400/10 p-6 text-sm leading-7 text-emerald-50">
                  <p className="text-xl font-bold text-white">Thank you ✨</p>
                  <p className="mt-3">Payment noted. Click below and I’ll lock the request in properly.</p>
                </div>
              ) : null}

              {form.paymentStage === "done" ? (
                <div className="rounded-[1.75rem] border border-cyan-400/20 bg-cyan-400/10 p-6 text-sm leading-7 text-cyan-50">
                  <p className="text-xl font-bold text-white">You got it ✅</p>
                  <p className="mt-3">I will DM you in a few minutes. Sending you back home now 🚀</p>
                </div>
              ) : null}

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5 text-sm leading-7 text-slate-300">
                <p>{legalNotice}</p>
                <ul className="mt-3 space-y-2">
                  <li>• No illegal software or piracy requests.</li>
                  <li>• Remote support details can be shared later on WhatsApp or Telegram.</li>
                  <li>• Pay later also goes through the same final confirmation flow.</li>
                </ul>
              </div>
              <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                <input
                  type="checkbox"
                  checked={form.acceptedTerms}
                  onChange={(event) => updateField("acceptedTerms", event.target.checked)}
                  className="mt-1"
                />
                I understand this is for legal software and legit support work only ✅
              </label>
            </div>
          ) : null}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Back
          </button>
          {step === steps.length - 1 ? (
            <button
              type="button"
              onClick={submitMock}
              disabled={form.paymentStage === "done" || submitting}
              className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Submitting..." : submitButtonLabel()}
            </button>
          ) : (
            <button
              type="button"
              onClick={nextStep}
              className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Continue
            </button>
          )}
        </div>
      </div>

      <FunnyToastMessage message={toast} onClose={() => setToast(null)} />
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  className,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}) {
  return (
    <label className={cn("block space-y-2", className)}>
      <span className="text-sm font-semibold text-white">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-white">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
