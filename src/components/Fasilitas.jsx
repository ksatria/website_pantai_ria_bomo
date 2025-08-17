"use client";
import { fasilitas_translations } from "@/utils/fasilitas_translations";
import { motion } from "framer-motion";

export default function Fasilitas({ language = "id" }) {
  const fasilitas = fasilitas_translations[language];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="fasilitas"
      className="py-10 bg-[#002D72] text-white scroll-smooth"
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col pb-12 items-center">
        <motion.h2
          className="text-3xl font-semibold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {language === "en" ? "FACILITIES" : "FASILITAS"}
        </motion.h2>
        <div className="h-1 w-36 bg-yellow-400"></div>
      </div>

      <motion.div
        className="grid grid-cols-2 px-4 md:px-34 md:grid-cols-4 gap-8 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {fasilitas.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col"
            variants={itemVariants}
          >
            <img src={item.icon} alt={item.name} className="w-12 h-12" />
            <p className="mt-2 font-medium">{item.name}</p>
            <p className="mt-2 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
