"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Fasilitas from "@/components/Fasilitas";
import Galeri from "@/components/Galeri";
import Layanan from "@/components/Layanan";
import Footer from "@/components/Footer";
import About from "@/components/About";

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
      <Footer language={language} />
    </main>
  );
}
