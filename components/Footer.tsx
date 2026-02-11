export default function Footer() {
  return (
    <footer className="footer-grid">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 text-white md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-2xl bg-white/10">
              <img
                src="/roostgolf.png"
                alt="Roost Golf"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Roost Golf</p>
              <p className="text-xs text-white/70">Est. 2025</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70">
            A premium golf app for modern clubs and tournaments.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Product</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
            <a href="/#roles">Role dashboards</a>
            <a href="/features">Features</a>
            <a href="/#analytics">Analytics</a>
            <a href="/#cta">Get started</a>
            <a href="/pricing">Pricing</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Contact</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
            <span>hello@roostgolf.app</span>
            <span>+1 (000) 000-0000</span>
            <span>United States</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © 2026 Roost Golf. All rights reserved.
      </div>
    </footer>
  );
}
