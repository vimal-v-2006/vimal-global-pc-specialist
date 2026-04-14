"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function FadeIn({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div {...fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

export function FloatyGlow() {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-auto right-8 top-8 size-40 rounded-full bg-cyan-400/20 blur-3xl"
      animate={{ y: [0, -12, 0], opacity: [0.35, 0.7, 0.35] }}
      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    />
  );
}
