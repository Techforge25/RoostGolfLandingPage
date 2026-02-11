import { flow } from "./data";

export default function FlowSection({ onOpenFlow }: { onOpenFlow: () => void }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
            Benefits Flow
          </p>
          <h2 className="section-title mt-4 text-brand-900">
            A smooth journey from setup to results.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-700">
            These app screens explain the flow: create teams, run games, score live,
            and review analytics with a seamless golf experience.
          </p>
        </div>
        <button
          className="rounded-full border border-brand-300 bg-white px-6 py-3 text-sm font-semibold text-brand-800 shadow-card"
          onClick={onOpenFlow}
        >
          See Full Flow
        </button>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {flow.map((item) => (
          <div
            key={item.title}
            className="group rounded-[2.2rem] bg-white p-5 shadow-card transition hover:-translate-y-1"
          >
            <div className="flex items-center justify-between text-xs font-semibold text-brand-500">
              <span className="rounded-full bg-brand-50 px-3 py-1">Step {item.step}</span>
              <span className="h-2 w-12 rounded-full bg-brand-100">
                <span className="block h-2 w-2/3 rounded-full bg-brand-500" />
              </span>
            </div>
            <div className="mt-4 overflow-hidden rounded-[1.8rem] border border-brand-100 bg-white">
              <img
                src={item.image}
                alt={item.title}
                className="h-[360px] w-full object-contain transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-5">
              <p className="text-lg font-semibold text-brand-900">{item.title}</p>
              <p className="mt-2 text-sm text-brand-700">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
