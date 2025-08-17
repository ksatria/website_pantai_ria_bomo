import { pengurus_translations } from "@/utils/pengurus_translations";
import React from "react";
import { motion } from "framer-motion";

export default function Pengurus({ language = "id" }) {
  const t = pengurus_translations[language];

  return (
    <section id="pengurus" className="scroll-smooth bg-[#002D72] mt-10 py-10">
      <motion.h1
        dangerouslySetInnerHTML={{ __html: t.title }}
        className="text-xl md:text-4xl text-white font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      ></motion.h1>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="overflow-hidden rounded-xl shadow-lg">
          <motion.img
            src="/images/benteng-samudra.png"
            className="w-full h-auto max-w-4xl mx-auto transition-transform duration-300 hover:scale-105"
            alt="Struktur Organisasi"
          />
        </div>
      </motion.div>
    </section>
  );
}
