export default function AnalyticsSection() {
  return (
    <section id="analytics" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
            Reports & Analytics
          </p>
          <h3 className="mt-4 text-3xl font-semibold text-brand-900">
            Beautiful dashboards that make club growth obvious.
          </h3>
          <p className="mt-4 text-sm text-brand-700">
            From active players to completed rounds, every metric is easy to read and act on.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-100 p-5">
              <p className="text-sm font-semibold text-brand-700">Active Players</p>
              <p className="mt-2 text-2xl font-semibold text-brand-900">48 players</p>
              <p className="mt-1 text-sm text-brand-500">+9.3% this month</p>
            </div>
            <div className="rounded-2xl border border-brand-100 p-5">
              <p className="text-sm font-semibold text-brand-700">Games Played</p>
              <p className="mt-2 text-2xl font-semibold text-brand-900">22 games</p>
              <p className="mt-1 text-sm text-brand-500">+5.4% this month</p>
            </div>
          </div>
          <div className="mt-6 h-32 rounded-2xl bg-gradient-to-r from-brand-100 via-brand-50 to-white" />
        </div>
        <div className="space-y-6">
          <div className="rounded-[2rem] bg-brand-900 p-8 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Trust</p>
            <p className="mt-4 text-2xl font-semibold">Secure permissions & compliance</p>
            <p className="mt-3 text-sm text-white/70">
              Admin roles and player data are protected with clean access control.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-card">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-500">Engagement</p>
            <p className="mt-4 text-2xl font-semibold text-brand-900">Make every round feel live.</p>
            <p className="mt-3 text-sm text-brand-700">
              Push updates, live leaderboards, and on-course scoring keep players locked in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
