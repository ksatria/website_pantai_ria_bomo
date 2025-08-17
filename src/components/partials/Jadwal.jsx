import { about_translations } from "@/utils/about_translations";
import { motion } from "framer-motion";

export default function Jadwal({ language = "id" }) {
  const t = about_translations[language];

  return (
    <motion.div
      className="py-10  px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-6">
        <div className="h-1 w-38 bg-yellow-400 mb-2"></div>
        <h2 className="text-lg font-semibold text-blue-800">{t.schedule}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {t.days.map((item, index) => (
          <div
            key={index}
            className="flex border-l-4 border-yellow-400 rounded-sm overflow-hidden"
          >
            <div className="bg-gray-200 px-4 py-3 w-32 text-blue-900 font-medium">
              {item.day}
            </div>
            <div className="bg-blue-100 flex-1 px-4 py-3 text-black">
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
