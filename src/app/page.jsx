"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Fasilitas from "@/components/Fasilitas";
import Galeri from "@/components/Galeri";
import Layanan from "@/components/Layanan";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Pengurus from "@/components/Pengurus";
import { FaRegSmile, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [language, setLanguage] = useState("id");

  useEffect(() => {
    const savedLang =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (savedLang) setLanguage(savedLang);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", language);
    }
  }, [language]);

  return (
    <main>
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Fasilitas language={language} />
      <Galeri language={language} />
      <Layanan language={language} />
      <Activities language={language} />
      <Pengurus language={language} />
      <Footer language={language} />

      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <a
          href="https://forms.gle/V6WgF3JSJaK3eXcR8"
          target="_blank"
          className="relative w-16 h-16 rounded-full bg-[#D35F1C] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <FaRegSmile className="w-10 h-10 text-white" />
        </a>

        <a
          href="https://wa.me/6281216357836?text=Halo%2C%20saya%20ingin%20memesan%20layanan%20yang%20ada%20di%20Pantai%20Ria%20Bomo."
          target="_blank"
          className="relative w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <FaWhatsapp className="w-10 h-10 text-white" />
        </a>
      </div>
    </main>
  );
}
