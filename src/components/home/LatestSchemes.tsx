import Container from "@/src/components/shared/Container";
import { Home, Droplets, Wheat, HeartPulse, ArrowRight } from "lucide-react";

const schemes = [
  {
    title: "प्रधानमंत्री आवास योजना",
    description: "ग्रामीण परिवारों के लिए सुरक्षित आवास सहायता।",
    beneficiaries: "2,450 लाभार्थी",
    icon: Home,
  },
  {
    title: "जल जीवन मिशन",
    description: "हर घर तक स्वच्छ पेयजल पहुंचाने की पहल।",
    beneficiaries: "1,860 परिवार जुड़े",
    icon: Droplets,
  },
  {
    title: "किसान सहायता योजना",
    description: "किसानों के लिए बीज, खाद और फसल सहायता।",
    beneficiaries: "450+ किसान जुड़े",
    icon: Wheat,
  },
  {
    title: "स्वास्थ्य सुरक्षा सेवा",
    description: "गांव में स्वास्थ्य शिविर और डिजिटल हेल्थ रिकॉर्ड।",
    beneficiaries: "3 शिविर इस माह",
    icon: HeartPulse,
  },
];

export default function LatestSchemes() {
  return (
    <section className="bg-[#f8faf5] py-16 md:py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              योजनाएं और सेवाएं
            </p>

            <h2 className="text-4xl font-black text-green-900 md:text-5xl">
              नवीनतम सरकारी योजनाएं
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              नागरिकों, किसानों और परिवारों के लिए उपलब्ध प्रमुख योजनाओं की
              जानकारी एक ही स्थान पर।
            </p>
          </div>

          <button className="w-fit border border-green-200 bg-white px-5 py-3 text-sm font-bold text-green-800 transition hover:bg-green-50">
            सभी योजनाएं देखें →
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {schemes.map((scheme) => {
            const Icon = scheme.icon;

            return (
              <article
                key={scheme.title}
                className="group border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-green-50 text-green-700 group-hover:bg-green-700 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-black text-green-950">
                  {scheme.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {scheme.description}
                </p>

                <p className="mt-5 inline-block bg-green-50 px-3 py-1 text-sm font-bold text-green-700">
                  {scheme.beneficiaries}
                </p>

                <button className="mt-6 flex items-center gap-2 text-sm font-bold text-green-800">
                  अधिक जानकारी
                  <ArrowRight size={16} />
                </button>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}