import { pengurus_translations } from "@/utils/pengurus_translations";
import React from "react";

export default function Pengurus({ language = "id" }) {
  const t = pengurus_translations[language];
  return (
    <section id="pengurus" className="scroll-smooth mt-10 ">
      <h1 className="text-4xl  font-bold text-center mb-10">{t.title}</h1>

      <img
        src="/images/bagan_struktur_organisasi.png"
        className="w-full h-auto max-w-4xl mx-auto"
        alt="Struktur Organisasi"
      />
    </section>
  );
}
