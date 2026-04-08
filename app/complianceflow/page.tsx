import Navbar from "@/components/navbar";
import CfHero from "@/components/complianceflow/cf-hero";
import CfHow from "@/components/complianceflow/cf-how";
import CfMockupSections from "@/components/complianceflow/cf-mockup-sections";
import CfFeatures from "@/components/complianceflow/cf-features";
import CfPricing from "@/components/complianceflow/cf-pricing";
import CfCta from "@/components/complianceflow/cf-cta";
import Footer from "@/components/footer";

export const metadata = {
  title: "ComplianceFlow — CE & Sicherheitsdatenblätter automatisiert | Vetron",
  description:
    "CE-Erklärungen und Sicherheitsdatenblätter vollautomatisch verwalten. Excel hochladen, System übernimmt. 14 Tage kostenlos testen.",
};

export default function ComplianceFlowPage() {
  return (
    <>
      <Navbar />
      <main>
        <CfHero />
        <CfHow />
        <CfMockupSections />
        <CfFeatures />
        <CfPricing />
        <CfCta />
      </main>
      <Footer />
    </>
  );
}
