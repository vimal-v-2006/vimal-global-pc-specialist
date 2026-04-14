"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.question} className="rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setOpen(active ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-white">{item.question}</span>
              <ChevronDown className={cn("size-5 text-slate-400 transition", active && "rotate-180 text-cyan-300")} />
            </button>
            {active ? <p className="px-6 pb-6 text-sm leading-7 text-slate-300">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
