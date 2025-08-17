import { about_translations } from "@/utils/about_translations";
import { FaPhoneVolume } from "react-icons/fa";
import { motion } from "framer-motion";
import Jadwal from "./partials/Jadwal";

export default function About({ language = "id" }) {
  const t = about_translations[language];

  return (
    <section id="about" className="bg-white pt-30 px-4 md:px-34 scroll-smooth">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#1E1B4B] mb-2">
            {t.heading[0]}
            <span className="italic bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              {t.heading[1]}
            </span>
          </h1>
          <p className="text-sm md:text-lg text-gray-600">{t.subheading}</p>
        </div>

        <div className="grid grid-cols-1 pt-8 md:grid-cols-3 gap-8 justify-between items-center">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-[#1E1B4B] mb-4">
              {t.descHeading}
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-8 pr-4">
              {t.desc}
            </p>
          </motion.div>

          {/* <motion.div
            className="bg-[#F9FAFB] border border-[#D35F1C] rounded-lg p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#D35F1C] mb-4">
              {t.schedule}
            </h3>
            <ul className="divide-y divide-gray-300 mb-6">
              {about_translations[language].days.map((day) => (
                <li
                  key={day}
                  className="flex justify-between text-sm xl:text-lg py-2 text-gray-700"
                >
                  <span>{day}</span>
                  <span>8:00am–5:00pm</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 mt-4">
              <FaPhoneVolume className="text-lg xl:text-4xl" />
              <div className="pl-2">
                <span className="text-gray-700 text-sm xl:text-lg font-medium">
                  {t.callNow}:
                </span>
                <div className="text-[#D35F1C] font-bold text-sm xl:text-lg">
                  (+62) 812-1635-7836
                </div>
              </div>
            </div>
          </motion.div> */}

          <motion.div
            className="p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img src="/images/logo-pantai-ria-bomo.png" alt="" />
          </motion.div>
        </div>
        <Jadwal language={language} />
      </motion.div>
    </section>
  );
}
