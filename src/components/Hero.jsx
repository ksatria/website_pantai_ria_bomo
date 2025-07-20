"use client";
import { useEffect, useState } from "react";

const images = [
  "/images/hero/hero1.heic",
  "/images/hero/hero2.heic",
  "/images/hero/hero3.heic",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[600px] md:h-screen flex items-center justify-center"
    >
      {/* Background Images */}
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

      {/* Overlay Content */}
      <div className="relative z-10 px-4 mx-auto max-w-screen-xl text-center text-white py-24 lg:py-56">
        <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          Temukan Kembali <br /> Ketenangan Anda di Sini
        </h1>
        <p className="mb-8 text-sm font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">
          Jauh dari hiruk pikuk kota, nikmati kesejukan di bawah pohon cemara
          dan debur ombak yang menenangkan jiwa.
        </p>
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="w-fit inline-flex justify-center items-center px-3 text-xs py-3 sm:px-5 sm:text-base font-medium text-center text-white rounded-lg bg-[#D35F1C] hover:bg-[#BC4F10]"
          >
            Temukan Kedamaian Anda
          </a>
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-30 z-0" />
    </section>
  );
}
