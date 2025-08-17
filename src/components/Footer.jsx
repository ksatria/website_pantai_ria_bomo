import { footer_translations } from "@/utils/footer_translations";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import PengunjungCard from "./partials/PengunjungCard";

export default function Footer({ language = "id" }) {
  const t = footer_translations[language];

  return (
    <section id="contact" className="w-full pt-20 scroll-smooth">
      <div className="flex flex-col items-center">
        <motion.h2
          className="text-3xl font-semibold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {language === "en" ? "LOCATION" : "LOKASI"}
        </motion.h2>
        <div className="h-1 w-36 bg-yellow-400"></div>
      </div>

      <div className="w-full px-4 md:px-18 py-12 h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.216585336767!2d114.34655087501145!3d-8.380345191657362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15984f4455de9%3A0x4dcbb9cf101556ec!2sPantai%20Ria%20Bomo!5e0!3m2!1sid!2sid!4v1754129971414!5m2!1sid!2sid"
          width="600"
          height="450"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <footer className="bg-[#002D72] w-full py-12 px-6 text-white md:px-16">
        <div className="bg-[url('/images/waves.svg')] bg-repeat w-full md:py-10 rounded-xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/logo-pantai-ria-bomo.png"
                alt="Bomo Beach Logo"
                className="w-18 md:w-40 h-auto transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
            <div className="flex md:flex-none">
              <motion.div
                className="flex-1 text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-semibold mb-4">{t.kontak}</h2>
                <ul className="space-y-3 ">
                  <li className="flex items-center gap-2 ">
                    <FaWhatsapp /> +62 812-1635-7836
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/pantai_ria_bomo"
                      className="flex items-center gap-2 "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram /> pantai_ria_bomo
                    </a>
                  </li>
                  <li className="flex items-center gap-2 ">
                    <FaTiktok /> pantai.ria.bomobwi
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="font-semibold mb-4">{t.lokasi}</h2>
                <p className=" leading-relaxed ">
                  Jl. Pantai Bomo, Dusun Krajan, Kec Rogojampi,
                  <br />
                  Kabupaten Banyuwangi
                </p>
              </motion.div>
            </div>
            <div className="w-full h-[1px] md:w-[1px] md:h-36  bg-white"></div>

            {/* <PengunjungCard language={language} /> */}
          </div>
          <div className="mt-8 text-sm md:text-base left-0 border-gray-200 pt-6 text-white text-center bottom-0">
            &copy; Copyright Tim Pengabdian Politeknik Negeri Banyuwangi
          </div>
        </div>
      </footer>
    </section>
  );
}
