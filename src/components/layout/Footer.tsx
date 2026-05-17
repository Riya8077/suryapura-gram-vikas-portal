import Container from "@/src/components/shared/Container";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h2 className="text-3xl font-black">सूर्यपुरा</h2>
            <p className="mt-2 text-sm text-green-100">
              ग्राम विकास पोर्टल
            </p>

            <p className="mt-5 text-sm leading-7 text-white/70">
              यह एक fictional demo portal है, जिसका उद्देश्य ग्रामीण विकास,
              पंचायत पारदर्शिता और डिजिटल सेवाओं को आधुनिक UI के साथ दिखाना है।
            </p>
          </div>

          <div>
            <h3 className="font-bold">मुख्य लिंक</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>होम</li>
              <li>सेवाएं</li>
              <li>योजनाएं</li>
              <li>पंचायत</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">हेल्पलाइन</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <Phone size={16} /> Emergency: 112
              </li>
              <li className="flex gap-2">
                <Phone size={16} /> किसान सहायता: 1800-180-1551
              </li>
              <li className="flex gap-2">
                <Phone size={16} /> पंचायत सहायता: 1800-000-2026
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">संपर्क</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <MapPin size={16} /> सूर्यपुरा ग्राम पंचायत
              </li>
              <li className="flex gap-2">
                <Mail size={16} /> help@suryapura.demo
              </li>
              <li className="flex gap-2">
                <ShieldCheck size={16} /> सुरक्षित डिजिटल सेवा
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        © 2026 सूर्यपुरा ग्राम विकास पोर्टल — Fictional GovTech Demo Project
      </div>
    </footer>
  );
}