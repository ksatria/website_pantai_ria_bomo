import { activities_translations } from "@/utils/activities_translations";
import React, { useState } from "react";

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
    <section id="aktifitas" className="py-10 scroll-smooth">
      <h2 className="text-3xl font-semibold ml-4 md:ml-34 mb-6">{t.title}</h2>

      <div className="grid md:px-34 px-4 md:grid-cols-3 grid-cols-3 gap-1 md:gap-4">
        {activitiesImages.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl md:h-64 cursor-pointer"
            onClick={() => openModal(img)}
          >
            <img
              src={img}
              className="w-full h-44 md:h-full object-cover rounded-xl transition-transform duration-200 hover:scale-105"
              alt={`Galeri ${idx + 1}`}
            />
          </div>
        ))}
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="max-w-4xl w-full px-4"
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
          </div>
        </div>
      )}
    </section>
  );
}
