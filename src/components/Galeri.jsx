"use client";
import { galeri_translations } from "@/utils/galeri_translations";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galeriImages = [
  "/images/galeri/Mushola1.jpg",
  "/images/galeri/Pendopo1.jpg",
  "/images/galeri/Kamar_mandi1.jpg",
  "/images/galeri/Pos_pantau1.jpg",
  "/images/galeri/Kantor_sekretariat1.jpg",
  "/images/galeri/Kantin1.jpg",
  "/images/galeri/Parkir1.jpg",
];

export default function Galeri({ language = "id" }) {
  const t = galeri_translations[language];
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openModal = (img) => {
    setActiveImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveImage(null);
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="galeri" className="py-18 scroll-smooth">
      <div className="flex flex-col pb-12 items-center">
        <motion.h2
          className="text-3xl font-semibold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t.title}
        </motion.h2>
        <div className="h-1 w-36 bg-yellow-400"></div>
      </div>

      <motion.div
        className="grid md:px-34 px-4 md:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {galeriImages.map((img, idx) => (
          <motion.div
            key={img}
            className={`relative overflow-hidden rounded-xl cursor-pointer ${
              idx === 1
                ? "col-span-2 row-span-2"
                : idx === 2 || idx === 3
                ? "col-span-1 row-span-2"
                : idx === 6
                ? "md:col-span-1 row-start-1"
                : ""
            }`}
            variants={itemVariants}
            onClick={() => openModal(img)}
          >
            <img
              src={img}
              className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
              alt={t.items[idx].label}
            />
            <p className="absolute bottom-2 left-2 text-white text-sm px-2 py-1 rounded bg-black/40">
              {t.items[idx].label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-4xl w-full px-4 relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={activeImage}
                alt="Preview"
                className="rounded-xl w-full h-auto max-h-[90vh] object-contain"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-3xl font-bold"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
