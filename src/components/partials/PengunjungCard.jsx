import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { footer_translations } from "@/utils/footer_translations";

export default function PengunjungCard({ language = "id" }) {
  const [todayCount, setTodayCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const t = footer_translations[language];

  useEffect(() => {
    const today = new Date().toLocaleDateString();

    let total = parseInt(localStorage.getItem("totalCount") || "0");
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      total += 1;
      localStorage.setItem("totalCount", total);
      localStorage.setItem("hasVisited", "true");
    }

    setTotalCount(total);

    let todayVisits = parseInt(localStorage.getItem("todayCount") || "0");
    const lastVisitDate = localStorage.getItem("lastVisitDate");

    if (lastVisitDate !== today) {
      todayVisits = 1;
      localStorage.setItem("lastVisitDate", today);
    } else if (!localStorage.getItem("todayVisited")) {
      todayVisits += 1;
    }

    localStorage.setItem("todayCount", todayVisits);
    localStorage.setItem("todayVisited", "true");

    setTodayCount(todayVisits);
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
