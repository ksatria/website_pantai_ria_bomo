"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import CardItem from "./partials/CardItem";
import { layanan_translations } from "@/utils/layanan_translations";
import { motion } from "framer-motion";

const image = [
  "/images/layanan/paket private family trip.JPG",
  "/images/layanan/paket tour open trip.JPG",
  "/images/layanan/paket mancing bagan.JPG",
  "/images/layanan/paket mancing premium.JPG",
  "/images/layanan/paket mancing standard.JPG",
  "/images/layanan/paket kuliner.JPG",
  "/images/layanan/paket pendopo.JPG",
];

export default function CardCarousel({ language = "id" }) {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const t = layanan_translations[language];

  return (
    <section id="layanan" className="scroll-smooth">
      <div className="flex flex-col pb-12 items-center">
        <motion.h2
          className="text-3xl font-semibold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {language === "en" ? "SERVICES" : "LAYANAN"}
        </motion.h2>
        <div className="h-1 w-36 bg-yellow-400"></div>
      </div>

      <div className="relative w-full flex justify-center">
        <button
          onClick={handlePrev}
          className="absolute hidden md:block left-12 top-1/2 -translate-y-1/2 z-10 bg-[#00AEEF] text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute hidden md:block right-12 top-1/2 -translate-y-1/2 z-10 bg-[#00AEEF] text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </button>

        <div className="w-full max-w-7xl px-4 md:px-33 xl:px-13">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              bulletClass: "swiper-pagination-bullet bg-[#D35F1C] opacity-50",
              bulletActiveClass: "swiper-pagination-bullet-active opacity-100",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1224: { slidesPerView: 3 },
            }}
          >
            {t.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <CardItem
                    image={image[index]}
                    title={item.title}
                    desc={item.desc}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center mt-4"></div>
        </div>
      </div>
    </section>
  );
}
