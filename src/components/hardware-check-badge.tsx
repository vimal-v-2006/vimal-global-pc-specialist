import { cn } from "@/lib/utils";

export function HardwareCheckBadge({ vendor }: { vendor: string }) {
  if (!vendor) {
    return null;
  }

  const normalized = vendor.toLowerCase();
  const isNvidia = normalized.includes("nvidia");

  return (
    <div
      className={cn(
        "rounded-2xl border px-4 py-3 text-sm font-medium",
        isNvidia
          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
          : "border-amber-400/30 bg-amber-400/10 text-amber-100",
      )}
    >
      {isNvidia ? "Great for AI setup" : "Some AI tools may be limited"}
    </div>
  );
}
