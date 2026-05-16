import FarmerCard from "@/src/components/cards/FarmerCard";
import Container from "@/src/components/shared/Container";
import SectionHeader from "@/src/components/shared/SectionHeader";

import { farmerServices } from "@/src/data/homepage";

export default function FarmerServices() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        
        <SectionHeader
          title="किसान सेवा केंद्र"
          subtitle="किसानों को आधुनिक तकनीक, मौसम जानकारी और सरकारी सहायता से जोड़ने की पहल।"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          
          {farmerServices.map((service) => (
            <FarmerCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}