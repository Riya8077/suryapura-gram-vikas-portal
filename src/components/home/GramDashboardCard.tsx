import DashboardCard from "@/src/components/cards/DashboardCard";
import Container from "@/src/components/shared/Container";
import SectionHeader from "@/src/components/shared/SectionHeader";

import { dashboardCards } from "@/src/data/homepage";

export default function GramDashboard() {
  return (
    <section className="bg-[#f8faf5] py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            title="ग्राम विकास डैशबोर्ड"
            subtitle="हमारे गांव के विकास कार्यों और जरूरी सेवाओं की जानकारी एक साफ और सरल रूप में।"
          />

          <button
            className="
              w-fit
              border
              border-green-200
              bg-white
              px-5
              py-3
              text-sm
              font-semibold
              text-green-800
              transition
              hover:bg-green-50
            "
          >
            सभी देखें →
          </button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {dashboardCards.map((card) => (
            <DashboardCard
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
              progress={card.progress}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}