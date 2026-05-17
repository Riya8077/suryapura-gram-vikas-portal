import Image from "next/image";

import {
  BadgeCheck,
  FileText,
  LandPlot,
  ShieldAlert,
  Users,
} from "lucide-react";

import Container from "@/src/components/shared/Container";

const identityServices = [
  {
    title: "परिवार विवरण",
    description: "परिवार की जानकारी देखें",
    icon: Users,
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    title: "भूमि रिकॉर्ड",
    description: "अपनी भूमि का विवरण देखें",
    icon: LandPlot,
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    title: "योजना पात्रता",
    description: "कौन सी योजनाएं आपके लिए",
    icon: BadgeCheck,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    title: "शिकायत स्थिति",
    description: "अपनी शिकायत की स्थिति देखें",
    icon: ShieldAlert,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    title: "प्रमाण पत्र आवेदन",
    description: "जाति, निवास, आय प्रमाण पत्र के लिए आवेदन करें",
    icon: FileText,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    full: true,
  },
];

export default function DigitalIdentity() {
  return (
    <section className="bg-[#fafcf8] py-16 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3">
              
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100">
                <BadgeCheck className="text-green-700" size={24} />
              </div>

              <div>
                <h2 className="text-3xl font-black text-green-800">
                  डिजिटल नागरिक पहचान
                </h2>

                <p className="mt-1 text-gray-500">
                  अपनी डिजिटल पहचान और दस्तावेजों को प्रबंधित करें
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {identityServices.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className={`border border-gray-200 bg-white p-5 shadow-sm ${
                      service.full ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      
                      <div
                        className={`flex h-11 w-11 items-center justify-center ${service.bg}`}
                      >
                        <Icon
                          className={service.color}
                          size={22}
                        />
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900">
                          {service.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="border border-green-100 bg-[#f7faf5] p-5 shadow-sm md:p-7">
            
            <div className="flex items-center justify-between">
              
              <h3 className="text-2xl font-black text-green-700">
                डिजिटल ग्राम पहचान पत्र
              </h3>

              <div className="flex items-center gap-2 text-green-600">
                <BadgeCheck size={18} />
                <span className="text-sm font-semibold">
                  सत्यापित
                </span>
              </div>
            </div>

            <div className="mt-6 border border-gray-200 bg-white p-5 shadow-sm">
              
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                
                {/* LEFT INFO */}
                <div className="flex gap-4">
                  
                  <div className="relative h-24 w-24 overflow-hidden border border-gray-200">
                    <Image
                      src="/images/banners/profile.png"
                      alt="Citizen"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-2xl font-black text-green-800">
                      राजेश कुमार
                    </h4>

                    <div className="mt-3 space-y-2 text-sm text-gray-700">
                      <p>
                        पुत्र: रामस्वरूप प्रसाद
                      </p>

                      <p>
                        ग्राम: सूर्यपुरा, जिला: सीतामढ़ी
                      </p>

                      <p className="font-semibold">
                        परिवार ID: SURY123456
                      </p>
                    </div>
                  </div>
                </div>

                {/* QR */}
                <div className="flex flex-col items-center">
                  
                  <div className="relative h-28 w-28 overflow-hidden border border-gray-300 bg-white">
                    <Image
                      src="/images/social-posts/qr.png"
                      alt="QR"
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <p className="mt-3 font-bold text-green-700">
                    सक्रिय
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-2 border border-green-100 bg-white px-5 py-4 text-lg font-bold text-green-700 transition hover:bg-green-50">
              पूर्ण प्रोफाइल देखें →
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}