import { cn } from "@/lib/utils";

const tones: Record<string, string> = {
  Paid: "border-emerald-400/30 bg-emerald-400/15 text-emerald-200",
  Pending: "border-amber-400/30 bg-amber-400/15 text-amber-200",
  Contacted: "border-sky-400/30 bg-sky-400/15 text-sky-200",
  "In Progress": "border-cyan-400/30 bg-cyan-400/15 text-cyan-200",
  Completed: "border-violet-400/30 bg-violet-400/15 text-violet-200",
  Rejected: "border-rose-400/30 bg-rose-400/15 text-rose-200",
};

export function StatusBadge({ value }: { value: string }) {
  return (
    <span className={cn("inline-flex rounded-full border px-3 py-1 text-xs font-semibold", tones[value] ?? "border-white/10 bg-white/5 text-white")}>{value}</span>
  );
}
