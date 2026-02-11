import { dashboards } from "./data";

export default function DashboardPreviewSection() {
  return (
    <section id="app-preview" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
            App Preview
          </p>
          <h2 className="section-title mt-4 text-brand-900">
            Real dashboards. Real impact.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-brand-700">
            Your three dashboards are the heart of Roost Golf. We highlight them with a
            premium device presentation that feels like a real product launch.
          </p>
        </div>
        <div className="badge">Mobile-first UI</div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {dashboards.map((dash, index) => (
          <div
            key={dash.title}
            className="group rounded-[2.5rem] bg-white p-5 shadow-card transition hover:-translate-y-1"
          >
            <div className="overflow-hidden rounded-[2rem] border border-brand-100 bg-white">
              <img
                src={dash.image}
                alt={dash.title}
                className="h-[520px] w-full object-contain transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-5">
              <p className="text-lg font-semibold text-brand-900">{dash.title}</p>
              <p className="mt-2 text-sm text-brand-700">{dash.caption}</p>
              <div
                className="mt-4 h-1.5 w-full rounded-full shimmer motion-safe:animate-shimmer"
                style={{ animationDelay: `${index * 0.3}s` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
