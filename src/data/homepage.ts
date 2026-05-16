// hero section 
export const heroSlides = [
  {
    id: 1,
    badge: "डिजिटल गांव मिशन",
    title: "सूर्यपुरा ग्राम विकास पोर्टल",
    subtitle: "हर नागरिक, हर किसान, हर परिवार — अब डिजिटल विकास से जुड़ा।",
    description:
      "गांव की सेवाएं, योजनाएं, शिकायतें और पंचायत की जानकारी अब एक ही डिजिटल प्लेटफॉर्म पर।",
    image: "/images/hero/slider1.png",
    ctaPrimary: "ग्राम सेवाएं देखें",
    ctaSecondary: "डिजिटल पहचान बनाएं",
  },
  {
    id: 2,
    badge: "किसान सहायता",
    title: "किसानों के लिए स्मार्ट सेवा केंद्र",
    subtitle: "फसल सलाह, मौसम जानकारी और सरकारी योजनाएं एक जगह।",
    description:
      "किसानों को सही जानकारी, सही समय पर — ताकि खेती बने ज्यादा सुरक्षित और लाभदायक।",
    image: "/images/hero/slider3.png",
    ctaPrimary: "किसान सेवाएं देखें",
    ctaSecondary: "योजनाएं जानें",
  },
  {
    id: 3,
    badge: "पंचायत पारदर्शिता",
    title: "विकास कार्य अब सबके सामने",
    subtitle: "सड़क, जल योजना, शिक्षा और स्वास्थ्य कार्यों की लाइव प्रगति।",
    description:
      "ग्राम पंचायत के बजट, कार्य प्रगति और शिकायत स्थिति को सरल तरीके से देखें।",
    image: "/images/hero/slider2.png",
    ctaPrimary: "विकास कार्य देखें",
    ctaSecondary: "शिकायत दर्ज करें",
  },
];
// dashboard card
import {
  BookOpen,
  Droplets,
  HeartPulse,
  Landmark,
  Tractor,
  Waypoints,
} from "lucide-react";

export const dashboardCards = [
  {
    title: "सड़क निर्माण",
    description: "12 कार्य प्रगति पर",
    icon: Waypoints,
    progress: 72,
  },
  {
    title: "शिक्षा केंद्र",
    description: "8 केंद्र संचालित",
    icon: BookOpen,
    progress: 84,
  },
  {
    title: "किसान सहायता",
    description: "450+ किसान जुड़े",
    icon: Tractor,
    progress: 68,
  },
  {
    title: "जल योजना",
    description: "5 योजनाएं चालू",
    icon: Droplets,
    progress: 58,
  },
  {
    title: "स्वास्थ्य शिविर",
    description: "3 शिविर इस माह",
    icon: HeartPulse,
    progress: 76,
  },
  {
    title: "पंचायत सेवाएं",
    description: "25+ सेवाएं उपलब्ध",
    icon: Landmark,
    progress: 90,
  },
];

// farmer card data 
export const farmerServices = [
  {
    title: "फसल सलाह",
    description:
      "विशेषज्ञों से खेती और फसल उत्पादन की जानकारी प्राप्त करें।",
    image: "/images/banners/farmer-1.png",
  },
  {
    title: "मौसम जानकारी",
    description:
      "आज का मौसम, वर्षा और तापमान अपडेट देखें।",
    image: "/images/banners/farmer-2.jpg",
  },
  {
    title: "सरकारी योजनाएं",
    description:
      "किसानों के लिए उपलब्ध सभी सरकारी योजनाओं की जानकारी।",
    image: "/images/banners/farmer-3.jpg",
  },
  {
    title: "बीज और खाद सहायता",
    description:
      "उन्नत बीज और खाद वितरण सेवाओं का लाभ उठाएं।",
    image: "/images/banners/farmer-4.jpg",
  },
];