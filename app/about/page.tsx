import Footer from "../../components/Footer";
import Header from "../../components/Header";

const values = [
  {
    title: "Modern UX",
    description: "We build clean, fast experiences for admins and players."
  },
  {
    title: "Golf-first",
    description: "Every flow is designed around real tournament operations."
  },
  {
    title: "Trusted Data",
    description: "Accurate scoring and analytics you can depend on."
  }
];

export default function AboutPage() {
  return (
    <main className="bg-hero noise min-h-screen">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
              About
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-900 md:text-5xl">
              Built for clubs that care about the experience.
            </h1>
            <p className="mt-4 text-base text-brand-700">
              Roost Golf brings Super Admins, Club Admins, and Players into one seamless
              platform. We focus on speed, clarity, and a premium feel at every touchpoint.
            </p>
            <div className="mt-8 grid gap-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl bg-white p-5 shadow-card">
                  <p className="text-lg font-semibold text-brand-900">{value.title}</p>
                  <p className="mt-2 text-sm text-brand-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
              Why Roost
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-brand-900">
              Premium golf operations, without the chaos.
            </h2>
            <p className="mt-4 text-sm text-brand-700">
              We believe golf events should feel professional from the first invite to the
              final leaderboard. Our mission is to make that happen with a platform that
              looks as good as it performs.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-glow"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
