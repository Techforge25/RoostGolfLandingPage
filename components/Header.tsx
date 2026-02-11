import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:py-8">
      <div className="flex items-center gap-3 rounded-3xl bg-white/80 px-4 py-2 shadow-card backdrop-blur">
        <div className="h-12 w-12 overflow-hidden rounded-2xl bg-white shadow-card">
          <img
            src="/roostgolf.png"
            alt="Roost Golf"
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <p className="text-xl font-semibold tracking-tight">Roost Golf</p>
          <p className="text-sm text-brand-700">Modern golf management</p>
        </div>
      </div>
      <nav className="hidden items-center gap-6 rounded-full bg-brand-700/90 px-6 py-2 text-sm font-semibold text-white shadow-glow md:flex">
        <a className="hover:text-brand-100" href="/#roles">
          Roles
        </a>
        <Link className="hover:text-brand-100" href="/features">
          Features
        </Link>
        <a className="hover:text-brand-100" href="/#analytics">
          Analytics
        </a>
        <Link className="hover:text-brand-100" href="/pricing">
          Pricing
        </Link>
        <Link className="hover:text-brand-100" href="/about">
          About
        </Link>
        <Link className="hover:text-brand-100" href="/contact">
          Contact
        </Link>
      </nav>
      <Link
        className="hidden rounded-full border border-brand-600 bg-white px-5 py-2 text-sm font-semibold text-brand-700 shadow-card transition hover:scale-[1.02] md:inline-flex"
        href="/contact"
      >
        Request Demo
      </Link>
    </header>
  );
}
