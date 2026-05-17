import {
  BookOpen,
  Droplets,
  HeartPulse,
  Landmark,
  Tractor,
  Waypoints,
} from "lucide-react";

// hero section
export const heroSlides = [
  {
    id: 1,
    badge: "डिजिटल गांव मिशन",
    badgeEn: "Digital Village Mission",

    title: "सूर्यपुरा ग्राम विकास पोर्टल",
    titleEn: "Suryapura Rural Development Portal",

    subtitle: "हर नागरिक, हर किसान, हर परिवार — अब डिजिटल विकास से जुड़ा।",
    subtitleEn:
      "Every citizen, every farmer, every family — now connected to digital development.",

    description:
      "गांव की सेवाएं, योजनाएं, शिकायतें और पंचायत की जानकारी अब एक ही डिजिटल प्लेटफॉर्म पर।",
    descriptionEn:
      "Village services, schemes, complaints, and Panchayat updates are now available on one digital platform.",

    image: "/images/hero/slider1.png",

    ctaPrimary: "ग्राम सेवाएं देखें",
    ctaPrimaryEn: "View Village Services",

    ctaSecondary: "डिजिटल पहचान बनाएं",
    ctaSecondaryEn: "Create Digital ID",
  },
  {
    id: 2,
    badge: "किसान सहायता",
    badgeEn: "Farmer Support",

    title: "किसानों के लिए स्मार्ट सेवा केंद्र",
    titleEn: "Smart Service Center for Farmers",

    subtitle: "फसल सलाह, मौसम जानकारी और सरकारी योजनाएं एक जगह।",
    subtitleEn: "Crop advice, weather updates, and government schemes in one place.",

    description:
      "किसानों को सही जानकारी, सही समय पर — ताकि खेती बने ज्यादा सुरक्षित और लाभदायक।",
    descriptionEn:
      "Farmers get the right information at the right time, making agriculture safer and more profitable.",

    image: "/images/hero/slider3.png",

    ctaPrimary: "किसान सेवाएं देखें",
    ctaPrimaryEn: "View Farmer Services",

    ctaSecondary: "योजनाएं जानें",
    ctaSecondaryEn: "Explore Schemes",
  },
  {
    id: 3,
    badge: "पंचायत पारदर्शिता",
    badgeEn: "Panchayat Transparency",

    title: "विकास कार्य अब सबके सामने",
    titleEn: "Development Work, Visible to Everyone",

    subtitle: "सड़क, जल योजना, शिक्षा और स्वास्थ्य कार्यों की लाइव प्रगति।",
    subtitleEn: "Live progress of roads, water schemes, education, and health projects.",

    description:
      "ग्राम पंचायत के बजट, कार्य प्रगति और शिकायत स्थिति को सरल तरीके से देखें।",
    descriptionEn:
      "View Panchayat budgets, work progress, and complaint status in a simple and transparent way.",

    image: "/images/hero/slider2.png",

    ctaPrimary: "विकास कार्य देखें",
    ctaPrimaryEn: "View Development Work",

    ctaSecondary: "शिकायत दर्ज करें",
    ctaSecondaryEn: "Register Complaint",
  },
];

// dashboard card
export const dashboardCards = [
  {
    title: "सड़क निर्माण",
    titleEn: "Road Construction",
    description: "12 कार्य प्रगति पर",
    descriptionEn: "12 works in progress",
    icon: Waypoints,
    progress: 72,
  },
  {
    title: "शिक्षा केंद्र",
    titleEn: "Education Centers",
    description: "8 केंद्र संचालित",
    descriptionEn: "8 centers active",
    icon: BookOpen,
    progress: 84,
  },
  {
    title: "किसान सहायता",
    titleEn: "Farmer Support",
    description: "450+ किसान जुड़े",
    descriptionEn: "450+ farmers connected",
    icon: Tractor,
    progress: 68,
  },
  {
    title: "जल योजना",
    titleEn: "Water Scheme",
    description: "5 योजनाएं चालू",
    descriptionEn: "5 schemes active",
    icon: Droplets,
    progress: 58,
  },
  {
    title: "स्वास्थ्य शिविर",
    titleEn: "Health Camps",
    description: "3 शिविर इस माह",
    descriptionEn: "3 camps this month",
    icon: HeartPulse,
    progress: 76,
  },
  {
    title: "पंचायत सेवाएं",
    titleEn: "Panchayat Services",
    description: "25+ सेवाएं उपलब्ध",
    descriptionEn: "25+ services available",
    icon: Landmark,
    progress: 90,
  },
];

// farmer card data
export const farmerServices = [
  {
    title: "फसल सलाह",
    titleEn: "Crop Advisory",
    description: "विशेषज्ञों से खेती और फसल उत्पादन की जानकारी प्राप्त करें।",
    descriptionEn: "Get expert guidance for farming and crop production.",
    image: "/images/banners/farmer-1.png",
  },
  {
    title: "मौसम जानकारी",
    titleEn: "Weather Updates",
    description: "आज का मौसम, वर्षा और तापमान अपडेट देखें।",
    descriptionEn: "Check today’s weather, rainfall, and temperature updates.",
    image: "/images/banners/farmer-2.jpg",
  },
  {
    title: "सरकारी योजनाएं",
    titleEn: "Government Schemes",
    description: "किसानों के लिए उपलब्ध सभी सरकारी योजनाओं की जानकारी।",
    descriptionEn: "Explore all government schemes available for farmers.",
    image: "/images/banners/farmer-3.jpg",
  },
  {
    title: "बीज और खाद सहायता",
    titleEn: "Seed & Fertilizer Support",
    description: "उन्नत बीज और खाद वितरण सेवाओं का लाभ उठाएं।",
    descriptionEn: "Access improved seed and fertilizer support services.",
    image: "/images/banners/farmer-4.jpg",
  },
];

// transparency data
export const transparencyData = [
  {
    title: "सड़क निर्माण",
    titleEn: "Road Construction",
    budget: "₹18 लाख",
    budgetEn: "₹18 Lakh",
    progress: 78,
  },
  {
    title: "जल योजना",
    titleEn: "Water Scheme",
    budget: "₹12 लाख",
    budgetEn: "₹12 Lakh",
    progress: 62,
  },
  {
    title: "विद्यालय सुधार",
    titleEn: "School Improvement",
    budget: "₹9 लाख",
    budgetEn: "₹9 Lakh",
    progress: 84,
  },
  {
    title: "स्वास्थ्य केंद्र",
    titleEn: "Health Center",
    budget: "₹6 लाख",
    budgetEn: "₹6 Lakh",
    progress: 55,
  },
];

export const grievanceStats = [
  {
    label: "कुल शिकायतें",
    labelEn: "Total Complaints",
    value: "248",
  },
  {
    label: "सुलझाई गई",
    labelEn: "Resolved",
    value: "201",
  },
  {
    label: "लंबित",
    labelEn: "Pending",
    value: "47",
  },
];

// impact section
export const impactStats = [
  {
    value: "12K+",
    label: "पंजीकृत नागरिक",
    labelEn: "Registered Citizens",
  },
  {
    value: "450+",
    label: "किसान जुड़े",
    labelEn: "Farmers Connected",
  },
  {
    value: "96%",
    label: "सेवा संतुष्टि",
    labelEn: "Service Satisfaction",
  },
  {
    value: "32",
    label: "विकास परियोजनाएं",
    labelEn: "Development Projects",
  },
];

export const impactHighlights = [
  {
    hi: "सभी पंचायत सेवाएं अब डिजिटल",
    en: "All Panchayat services are now digital",
  },
  {
    hi: "गांव के विकास कार्यों की लाइव ट्रैकिंग",
    en: "Live tracking of village development work",
  },
  {
    hi: "किसानों के लिए स्मार्ट सहायता केंद्र",
    en: "Smart support center for farmers",
  },
  {
    hi: "योजना पात्रता और शिकायत प्रणाली",
    en: "Scheme eligibility and complaint system",
  },
];