import Image from "next/image";
import Container from "@/src/components/shared/Container";
import { Quote, CheckCircle2 } from "lucide-react";

export default function DevendraVision() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border-2 border-green-100" />

            <div className="relative overflow-hidden bg-green-50">
              <Image
                src="/images/banners/profile.png"
                alt="Devendra Singh rural development ambassador"
                width={700}
                height={780}
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              विकास दूत
            </p>

            <h2 className="text-4xl font-black leading-tight text-green-900 md:text-6xl">
              देवेंद्र सिंह की ग्राम विकास दृष्टि
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              सूर्यपुरा ग्राम विकास पोर्टल का उद्देश्य गांव के हर नागरिक,
              किसान, विद्यार्थी और परिवार को डिजिटल सेवाओं से जोड़ना है।
            </p>

            <div className="mt-8 border-l-4 border-green-700 bg-green-50 p-6">
              <Quote className="mb-4 text-green-700" />

              <p className="text-xl font-semibold leading-9 text-green-950">
                “हमारा लक्ष्य सिर्फ डिजिटल गांव बनाना नहीं, बल्कि आत्मनिर्भर,
                पारदर्शी और सम्मानित गांव बनाना है।”
              </p>

              <p className="mt-4 font-bold text-green-800">
                — देवेंद्र सिंह
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "हर सेवा डिजिटल",
                "किसानों तक सही जानकारी",
                "पंचायत कार्यों में पारदर्शिता",
                "शिक्षा और स्वास्थ्य पर ध्यान",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-700" size={20} />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}