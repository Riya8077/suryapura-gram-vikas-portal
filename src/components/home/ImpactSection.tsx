import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import Container from "@/src/components/shared/Container";

import {
  impactHighlights,
  impactStats,
} from "@/src/data/homepage";

export default function ImpactSection() {
  const language = "hindi";
  return (
    <section className="relative overflow-hidden bg-green-950 py-16 text-white md:py-24">
      
      {/* Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-300/10 blur-3xl" />

      <Container className="relative">
        
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
              
              <TrendingUp
                className="text-green-300"
                size={18}
              />

              <span className="text-sm font-semibold">
                ग्राम विकास प्रभाव
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              डिजिटल बदलाव से
              <br />
              बदलता गांव
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              सूर्यपुरा ग्राम विकास पोर्टल गांव के नागरिकों,
              किसानों और पंचायत सेवाओं को एक आधुनिक डिजिटल
              प्लेटफॉर्म से जोड़ता है।
            </p>

            <div className="mt-8 space-y-4">
              {impactHighlights.map((item) => (
                <div
                  key={item.hi}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="mt-1 text-green-300"
                    size={20}
                  />

                  <p className="text-white/85">
                    {language === "hindi" ? item.hi : item.en}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-10 flex items-center gap-2 bg-white px-6 py-4 font-bold text-green-900 transition hover:bg-green-100">
              पूरा डैशबोर्ड देखें

              <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-5">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="border border-white/10 bg-white/10 p-8 backdrop-blur"
              >
                <h3 className="text-5xl font-black text-green-300">
                  {stat.value}
                </h3>

                <p className="mt-4 text-lg text-white/75">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}