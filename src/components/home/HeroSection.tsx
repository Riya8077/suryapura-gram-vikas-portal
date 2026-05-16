"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { heroSlides } from "@/src/data/homepage";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-green-950">
      <div className="relative min-h-[78vh] w-full overflow-hidden sm:min-h-[82vh] lg:min-h-[86vh]">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 mx-auto grid min-h-[78vh] max-w-7xl items-center gap-10 px-4 py-12 sm:min-h-[82vh] sm:px-6 lg:min-h-[86vh] lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id + "-content"}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur">
                <Sparkles size={17} className="text-yellow-300" />
                <span className="text-xs font-medium sm:text-sm">
                  {activeSlide.badge}
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {activeSlide.title}
              </h1>

              <p className="mt-5 max-w-xl text-lg font-semibold leading-8 text-yellow-100 sm:text-xl md:text-2xl">
                {activeSlide.subtitle}
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base md:text-lg">
                {activeSlide.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-green-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-yellow-50">
                  {activeSlide.ctaPrimary}
                  <ArrowRight size={18} />
                </button>

                <button className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
                  {activeSlide.ctaSecondary}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="hidden lg:block">
            <div className="ml-auto max-w-sm border border-white/20 bg-white/15 p-5 text-white shadow-2xl backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-200">
                वर्तमान योजनाएं
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                गांव की मुख्य सेवाएं अब डिजिटल
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "किसान सम्मान निधि",
                  "जल जीवन मिशन",
                  "प्रधानमंत्री आवास योजना",
                  "डिजिटल ग्राम पहचान",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between bg-white/10 px-4 py-3"
                  >
                    <span className="text-sm">{item}</span>
                    <span className="bg-green-400/20 px-3 py-1 text-xs text-green-100">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/30 md:block"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/30 md:block"
        >
          <ChevronRight size={22} />
        </button>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 transition-all ${
                activeIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
