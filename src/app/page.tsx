import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import MobileBottomNav from "@/src/components/layout/MobileBottomNav";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8faf5]">
      
      <Navbar />


      <Footer />

      <MobileBottomNav />
    </main>
  );
}