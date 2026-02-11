import { stats } from "./data";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-8 md:grid-cols-[1.1fr_0.9fr] md:pb-24">
      <div>
        <span className="badge">Golf Ops, Reimagined</span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-brand-900 md:text-6xl md:leading-[1.05]">
          Run clubs, tournaments, and live scoring from one beautiful app.
        </h1>
        <p className="mt-5 text-lg text-brand-800 md:text-xl">
          Roost Golf unifies Super Admins, Club Admins, and Players with a premium
          experience that feels fast, clean, and effortless.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-2px]"
            href="/pricing"
          >
            Start Free Trial
          </a>
          <a
            className="rounded-full border border-brand-300 bg-white px-6 py-3 text-sm font-semibold text-brand-800 shadow-card transition hover:border-brand-500"
            href="/contact"
          >
            Download App
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/80 p-4 text-center shadow-card"
            >
              <p className="text-2xl font-semibold text-brand-900">{item.value}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute -left-8 top-16 h-20 w-20 rounded-3xl bg-brand-200 blur-xl" />
        <div className="absolute -right-10 top-28 h-28 w-28 rounded-full bg-[#f7d87c] blur-2xl opacity-60" />
        <div className="phone-rotate device-shell mx-auto">
          <img src="/mobile.png" alt="iPhone frame" className="frame" />
          <div
            className="device-screen"
            style={{
              ["--screen-left" as string]: "14.5%",
              ["--screen-right" as string]: "14.5%",
              ["--screen-top" as string]: "12%",
              ["--screen-bottom" as string]: "12%"
            }}
          >
            <img
              src="/player_dashboard.png"
              alt="Roost Golf app preview"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
