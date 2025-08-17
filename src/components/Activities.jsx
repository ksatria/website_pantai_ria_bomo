import { activities_translations } from "@/utils/activities_translations";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const activitiesImages = [
  "/images/aktifitas/aktifitas1.jpeg",
  "/images/aktifitas/aktifitas2.jpg",
  "/images/aktifitas/aktifitas3.jpeg",
  "/images/aktifitas/aktifitas4.jpeg",
  "/images/aktifitas/aktifitas5.jpg",
  "/images/aktifitas/aktifitas6.jpeg",
  "/images/aktifitas/aktifitas7.jpeg",
  "/images/aktifitas/aktifitas8.jpg",
  "/images/aktifitas/aktifitas9.jpeg",
];
export default function Activities({ language = "id" }) {
  const t = activities_translations[language];

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

  return (
    <section id="aktifitas" className="py-18 scroll-smooth">
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

      <div className="grid md:px-34 px-4 grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {activitiesImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-xl cursor-pointer group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true }}
            onClick={() => openModal(img)}
          >
            <img
              src={img}
              className="w-full h-44 md:h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl"
              alt={`Galeri ${idx + 1}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="max-w-4xl w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
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
