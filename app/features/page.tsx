import FeatureSection from "../../components/FeatureSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RolesSection from "../../components/RolesSection";

export default function FeaturesPage() {
  return (
    <main className="bg-hero noise min-h-screen">
      <Header />
      <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
            Features
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-brand-900 md:text-5xl">
            Everything you need to run modern golf events.
          </h1>
          <p className="mt-4 text-base text-brand-700">
            From live scoring to analytics, Roost Golf keeps every role in sync.
          </p>
        </div>
      </section>
      <FeatureSection />
      <RolesSection />
      <Footer />
    </main>
  );
}
