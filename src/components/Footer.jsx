import { footer_translations } from "@/utils/footer_translations";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer({ language = "id" }) {
  const t = footer_translations[language];

  return (
    <section id="contact" className="w-full pt-20 scroll-smooth">
      <div className="w-full h-[450px]">
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

      <footer className="bg-[#FFF7F3] w-full py-12 px-6 md:px-16">
        <div className="bg-[url('/images/waves.svg')] bg-repeat w-full py-10 rounded-xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-lg font-semibold text-[#1E1B4B] mb-4">
                {t.kontak}
              </h2>
              <ul className="space-y-3 text-[#1E1B4B]">
                <li className="flex items-center gap-2 hover:text-orange-600 transition-colors">
                  <FaWhatsapp /> +62 812-1635-7836
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pantai_ria_bomo"
                    className="flex items-center gap-2 hover:text-orange-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram /> pantai_ria_bomo
                  </a>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-600 transition-colors">
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
              <h2 className="text-lg font-semibold text-[#1E1B4B] mb-4">
                {t.lokasi}
              </h2>
              <p className="text-[#1E1B4B] leading-relaxed">
                Jl. Pantai Bomo, Dusun Krajan, Kec Rogojampi,
                <br />
                Kabupaten Banyuwangi
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-orange-600 text-xl font-semibold mb-4">
                Pantai Ria Bomo
              </h2>
              <img
                src="/images/logo-pantai-ria-bomo.png"
                alt="Bomo Beach Logo"
                className="w-40 h-auto transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </footer>
    </section>
  );
}
