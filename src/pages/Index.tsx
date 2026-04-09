import NavBar from "@/components/fuel/NavBar";
import HeroSection from "@/components/fuel/HeroSection";
import FuelSection from "@/components/fuel/FuelSection";
import PaymentSection from "@/components/fuel/PaymentSection";
import ReviewsSection from "@/components/fuel/ReviewsSection";
import ContactsSection from "@/components/fuel/ContactsSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <FuelSection />
      <PaymentSection />
      <ReviewsSection />
      <ContactsSection />
    </div>
  );
}
