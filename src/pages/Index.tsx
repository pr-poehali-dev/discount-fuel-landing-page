import NavBar from "@/components/landing/NavBar";
import HeroSection from "@/components/landing/HeroSection";
import PricingSection from "@/components/landing/PricingSection";
import ReviewsContacts from "@/components/landing/ReviewsContacts";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <PricingSection />
      <ReviewsContacts />
    </div>
  );
}
