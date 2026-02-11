import { features, pillars } from "./data";

export default function FeatureSection() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
            Built for performance
          </p>
          <h2 className="section-title mt-4 text-brand-900">
            A premium experience from admin to player.
          </h2>
          <p className="mt-4 text-base text-brand-700">
            Inspired by your dashboards, Roost Golf keeps every role focused with clear
            data, delightful UI, and instant actions.
          </p>
          <div className="mt-6 space-y-4">
            {pillars.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-5 shadow-card">
                <p className="text-lg font-semibold text-brand-900">{item.title}</p>
                <p className="mt-2 text-sm text-brand-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-card transition hover:-translate-y-1 motion-safe:animate-rise"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="h-10 w-10 rounded-2xl bg-brand-100" />
              <p className="mt-5 text-lg font-semibold text-brand-900">{item.title}</p>
              <p className="mt-2 text-sm text-brand-700">{item.caption}</p>
            </div>
          ))}
          <div className="col-span-full rounded-3xl bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 p-8 text-white shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-100">Mobile first</p>
            <p className="mt-3 text-2xl font-semibold">
              Designed for speed, clarity, and smooth game flow.
            </p>
            <p className="mt-3 text-sm text-white/80">
              Every interaction is optimized for touch, quick access, and instant updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
