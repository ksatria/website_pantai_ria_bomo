"use client";
import { useEffect, useState } from "react";
import { hero_translations } from "@/utils/hero_translations";

const images = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
];

export default function Hero({ language = "id" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowContent(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );

        setTimeout(() => {
          setShowContent(true);
        }, 1000);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const t = hero_translations[language];

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[600px] md:h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      <div
        className={`relative z-10 px-4 mx-auto max-w-screen-xl text-center text-white py-24 lg:py-56 transition-all duration-500 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl whitespace-pre-line">
          {t.title}
        </h1>
        <p className="mb-8 text-sm font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">
          {t.desc}
        </p>
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="w-fit inline-flex justify-center items-center px-3 text-xs py-3 sm:px-5 sm:text-base font-medium text-center text-white rounded-lg bg-[#D35F1C] hover:bg-[#BC4F10] transition-all duration-500"
          >
            {t.button}
          </a>
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-30 z-0" />
    </section>
  );
}
