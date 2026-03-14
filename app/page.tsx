import BusinessPlanSection from "@/components/business-plan-section";
import CustomersSection from "@/components/customers-section";
import FeatureCardsSection from "@/components/feature-cards-section";
import HeroSection from "@/components/hero-section";
import HighlightSection from "@/components/highlight-section";
import HowWeHelpSection from "@/components/how-we-help-section";
import InfoCardsSection from "@/components/info-cards-section";
import ContactSections from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <FeatureCardsSection/>
      <HowWeHelpSection/>
      <HighlightSection/>
      <BusinessPlanSection/>
      <InfoCardsSection/>
      <CustomersSection/>
      <ContactSections/>
    </main>
  );
}
