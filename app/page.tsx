import AnalyticsSection from "../components/AnalyticsSection";
import CtaSection from "../components/CtaSection";
import DashboardPreviewSection from "../components/DashboardPreviewSection";
import FeatureSection from "../components/FeatureSection";
import FlowController from "../components/FlowController";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import RolesSection from "../components/RolesSection";

export default function Home() {
  return (
    <main className="bg-hero noise">
      <Header />
      <Hero />
      <FeatureSection />
      <RolesSection />
      <DashboardPreviewSection />
      <AnalyticsSection />
      <FlowController />
      <CtaSection />
      <Footer />
    </main>
  );
}
