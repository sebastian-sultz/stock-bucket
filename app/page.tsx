import { HeroSection } from "@/components/home/HeroSection";
import { TrustMetricsBar } from "@/components/home/TrustMetricsBar";
import { AboutSummary } from "@/components/home/AboutSummary";
import { BucketCards } from "@/components/home/BucketCards";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SampleCallCard } from "@/components/home/SampleCallCard";
import { FaqSection } from "@/components/home/FaqSection";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustMetricsBar />
      <AboutSummary />
      <BucketCards />
      <HowItWorks />
      <WhyChooseUs />
      <SampleCallCard />
      <FaqSection />
      <InsightsPreview />
      <ContactCTA />
    </>
  );
}
