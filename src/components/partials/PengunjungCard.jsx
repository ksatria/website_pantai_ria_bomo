import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { footer_translations } from "@/utils/footer_translations";

export default function PengunjungCard({ language = "id" }) {
  const [todayCount, setTodayCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const t = footer_translations[language];

  useEffect(() => {
    let total = parseInt(localStorage.getItem("totalCount") || "0");
    total += 1;
    setTotalCount(total);
    localStorage.setItem("totalCount", total);

    const today = new Date().toLocaleDateString();
    const lastVisitDate = localStorage.getItem("lastVisitDate");
    let todayVisits = parseInt(localStorage.getItem("todayCount") || "0");

    if (lastVisitDate === today) {
      todayVisits += 1;
    } else {
      todayVisits = 1;
      localStorage.setItem("lastVisitDate", today);
    }

    setTodayCount(todayVisits);
    localStorage.setItem("todayCount", todayVisits);
  }, []);

  return (
    <motion.div
      className="flex-1 text-sm md:text-base"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="font-semibold mb-4">{t.pengunjung}</h2>
      <ul className="space-y-2">
        <li>
          {t.hari_ini}: {todayCount}
        </li>
        <li>
          {t.jumlah}: {totalCount}
        </li>
      </ul>
    </motion.div>
  );
}
