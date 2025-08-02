"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import CardItem from "./CardItem";

const data = [
  {
    title: "Paket Private Family Trip",
    desc: "Kuliner seafood, bahan fresh, kenikmatan di tepi laut.",
    image: "/images/layanan/image.png",
    tag: "Seafood",
  },
  {
    title: "Paket Tour Open Trip",
    desc: "Eksplorasi keberanian anak-anak di alam terbuka.",
    image: "/images/fasilitas/kantin.jpg",
    tag: "Rp 15.000",
  },
  {
    title: "Paket Mancing Bagan",
    desc: "Bernyanyi dan berjoget di tepi pantai.",
    image: "/images/panggung.jpg",
    tag: "Live Music",
  },
  {
    title: "Paket Mancing Premium",
    desc: "Bernyanyi dan berjoget di tepi pantai.",
    image: "/images/panggung.jpg",
    tag: "Live Music",
  },
  {
    title: "Paket Mancing Standard",
    desc: "Bernyanyi dan berjoget di tepi pantai.",
    image: "/images/panggung.jpg",
    tag: "Live Music",
  },
  {
    title: "Paket Makan",
    desc: "Bernyanyi dan berjoget di tepi pantai.",
    image: "/images/panggung.jpg",
    tag: "Live Music",
  },
  {
    title: "Paket Pendopo",
    desc: "Bernyanyi dan berjoget di tepi pantai.",
    image: "/images/panggung.jpg",
    tag: "Live Music",
  },
];

export default function CardCarousel() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section id="layanan" className="scroll-smooth">
      <h2 className="text-3xl font-semibold ml-4 md:ml-34 py-10 mb-6">
        Layanan
      </h2>
      <div className="relative w-full flex justify-center">
        <button
          onClick={handlePrev}
          className="absolute hidden md:block left-12 top-1/2 -translate-y-1/2 z-10 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          <svg
            className="w-6 h-6 text-white "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
          className="absolute hidden md:block right-12 top-1/2 -translate-y-1/2 z-10 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          <svg
            className="w-6 h-6 text-white "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
            spaceBetween={16}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <CardItem {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center mt-4"></div>
        </div>
      </div>
    </section>
  );
}
