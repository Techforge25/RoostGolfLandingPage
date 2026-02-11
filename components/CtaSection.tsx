export default function CtaSection() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-[2.5rem] bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 p-10 text-white shadow-glow md:p-14 shimmer motion-safe:animate-shimmer">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-100">Roost Golf</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Ready to elevate your golf operations?
            </h2>
            <p className="mt-4 text-sm text-white/80">
              Launch your club or league on Roost Golf and give every role a premium experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-card"
              href="/contact"
            >
              Book a Demo
            </a>
            <a
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white"
              href="/contact"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
