import {
  CheckCircle2,
  Clock3,
  IndianRupee,
  Landmark,
} from "lucide-react";

import Container from "@/src/components/shared/Container";
import SectionHeader from "@/src/components/shared/SectionHeader";

import {
  grievanceStats,
  transparencyData,
} from "@/src/data/homepage";

export default function PanchayatTransparency() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* LEFT */}
          <div>
            <SectionHeader
              title="पंचायत पारदर्शिता"
              subtitle="ग्राम पंचायत के विकास कार्य, बजट उपयोग और शिकायत निवारण की जानकारी सार्वजनिक रूप से उपलब्ध।"
            />

            <div className="space-y-5">
              {transparencyData.map((item) => (
                <div
                  key={item.title}
                  className="border border-gray-200 bg-[#fafcf8] p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    
                    <div>
                      <h3 className="text-xl font-bold text-green-900">
                        {item.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-2 text-gray-500">
                        <IndianRupee size={16} />

                        <span className="text-sm">
                          बजट: {item.budget}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-green-100 px-4 py-2 text-green-800">
                      <CheckCircle2 size={18} />

                      <span className="font-semibold">
                        {item.progress}% पूर्ण
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 h-3 overflow-hidden bg-green-100">
                    <div
                      className="h-full bg-green-700 transition-all duration-700"
                      style={{
                        width: `${item.progress}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="border border-green-100 bg-[#f8faf5] p-6 shadow-sm md:p-8">
            
            <div className="flex items-center gap-3">
              
              <div className="flex h-12 w-12 items-center justify-center bg-green-700 text-white">
                <Landmark size={24} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
                  ग्राम पंचायत
                </p>

                <h3 className="text-3xl font-black text-green-950">
                  शिकायत निवारण
                </h3>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {grievanceStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-gray-200 bg-white p-5"
                >
                  <p className="text-sm text-gray-500">
                    {stat.label}
                  </p>

                  <h4 className="mt-3 text-4xl font-black text-green-900">
                    {stat.value}
                  </h4>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-dashed border-green-200 bg-green-50 p-5">
              
              <div className="flex items-center gap-3">
                <Clock3 className="text-green-700" size={22} />

                <h4 className="font-bold text-green-900">
                  अगली ग्राम सभा
                </h4>
              </div>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                25 मई 2026 को पंचायत भवन में विकास कार्यों और नई योजनाओं पर चर्चा होगी।
              </p>

              <button className="mt-5 bg-green-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800">
                बैठक विवरण देखें
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}