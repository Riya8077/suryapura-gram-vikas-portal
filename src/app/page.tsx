import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import MobileBottomNav from "@/src/components/layout/MobileBottomNav";
import HeroSection from "../components/home/HeroSection";
import GramDashboard from "../components/home/GramDashboardCard";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8faf5]">
      
      <Navbar />

       <HeroSection />

      <GramDashboard />

      {/* <FarmerServices />

      <DigitalIdentity />

      <PanchayatTransparency />

      <ImpactSection /> */}

      <Footer />

      <MobileBottomNav />
    </main>
  );
}