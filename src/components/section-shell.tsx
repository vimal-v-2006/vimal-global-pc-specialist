import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion";

type SectionShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionShell({ eyebrow, title, description, children }: SectionShellProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <FadeIn className="mb-10 max-w-3xl space-y-4">
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p> : null}
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2>
        {description ? <p className="text-lg leading-8 text-slate-300">{description}</p> : null}
      </FadeIn>
      {children}
    </section>
  );
}
