"use client";

import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <main className="bg-hero noise min-h-screen">
      <Header />
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-900 md:text-5xl">
              Let&apos;s talk about your golf club.
            </h1>
            <p className="mt-4 text-base text-brand-700">
              Share a few details and we&apos;ll get back with a tailored demo and rollout plan.
            </p>
            <div className="mt-8 rounded-3xl bg-white p-6 shadow-card">
              <p className="text-sm font-semibold text-brand-700">Quick response</p>
              <p className="mt-2 text-2xl font-semibold text-brand-900">Within 24 hours</p>
              <p className="mt-2 text-sm text-brand-600">We&apos;ll review and reply fast.</p>
            </div>
          </div>
          <form
            className="rounded-[2.5rem] bg-white p-8 shadow-soft"
            onSubmit={(event) => {
              event.preventDefault();
              setStatus("Thanks! We received your request and will reply soon.");
              (event.currentTarget as HTMLFormElement).reset();
            }}
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-semibold text-brand-700">Name</label>
                <input
                  required
                  className="mt-2 w-full rounded-2xl border border-brand-100 px-4 py-3 text-sm outline-none focus:border-brand-500"
                  placeholder="Your full name"
                  name="name"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-brand-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-brand-100 px-4 py-3 text-sm outline-none focus:border-brand-500"
                  placeholder="you@club.com"
                  name="email"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-brand-700">Club Name</label>
                <input
                  className="mt-2 w-full rounded-2xl border border-brand-100 px-4 py-3 text-sm outline-none focus:border-brand-500"
                  placeholder="Your club or league"
                  name="club"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-brand-700">Message</label>
                <textarea
                  className="mt-2 h-32 w-full rounded-2xl border border-brand-100 px-4 py-3 text-sm outline-none focus:border-brand-500"
                  placeholder="Tell us about your needs"
                  name="message"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-glow"
              >
                Send Request
              </button>
              {status && (
                <p className="text-sm font-semibold text-brand-600" role="status">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
