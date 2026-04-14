export function PaymentQRSection() {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="flex size-36 items-center justify-center rounded-[1.5rem] border border-dashed border-cyan-400/30 bg-slate-950 text-center text-6xl">
          💸
        </div>
        <div className="space-y-3 text-sm text-slate-300">
          <p className="text-lg font-semibold text-white">Payment flow</p>
          <p>Choose $1 for foreign clients or ₹50 for Indian clients, open the QR, upload the payment screenshot, then finish the request. Or choose pay later and submit directly.</p>
          <ul className="space-y-2">
            <li>• Small booking amount</li>
            <li>• Screenshot upload for paid options</li>
            <li>• Pay later option still available</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
