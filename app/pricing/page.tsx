import Footer from "../../components/Footer";
import Header from "../../components/Header";

const plans = [
  {
    name: "Starter",
    price: "$49/mo",
    description: "For small clubs launching their first tournaments.",
    features: ["Up to 2 clubs", "Live scoring", "Basic analytics", "Email support"]
  },
  {
    name: "Pro",
    price: "$149/mo",
    description: "For growing clubs with multiple events and teams.",
    features: ["Unlimited clubs", "Advanced analytics", "Team management", "Priority support"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations needing full governance.",
    features: ["Dedicated success", "Custom roles", "Security review", "SLA"]
  }
];

export default function PricingPage() {
  return (
    <main className="bg-hero noise min-h-screen">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
            Pricing
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-brand-900 md:text-5xl">
            Simple plans for every club.
          </h1>
          <p className="mt-4 text-base text-brand-700">
            Start fast and scale up as your tournaments grow.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-[2.5rem] bg-white p-8 shadow-card">
              <p className="text-lg font-semibold text-brand-900">{plan.name}</p>
              <p className="mt-3 text-3xl font-semibold text-brand-900">{plan.price}</p>
              <p className="mt-2 text-sm text-brand-700">{plan.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-brand-700">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <a
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-glow"
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
