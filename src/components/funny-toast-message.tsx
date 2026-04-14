"use client";

import { useEffect } from "react";

export function FunnyToastMessage({
  message,
  onClose,
}: {
  message: string | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!message) return;
    const timer = window.setTimeout(onClose, 2800);
    return () => window.clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[60] max-w-sm rounded-2xl border border-cyan-400/30 bg-slate-950/95 px-5 py-4 text-sm text-cyan-100 shadow-[0_20px_80px_rgba(8,145,178,0.35)] backdrop-blur-xl">
      {message}
    </div>
  );
}
