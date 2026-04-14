export function TestimonialCard({
  name,
  country,
  quote,
}: {
  name: string;
  country: string;
  quote: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <p className="text-base leading-8 text-slate-200">“{quote}”</p>
      <div className="mt-5 border-t border-white/10 pt-5">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-slate-400">{country}</p>
      </div>
    </div>
  );
}
